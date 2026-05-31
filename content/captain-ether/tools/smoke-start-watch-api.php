<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';
require __DIR__ . '/../../../public/api/captain-ether/_learner-streams.php';

$appRoot = dirname(__DIR__, 3);
$phpBin = getenv('CAPTAIN_ETHER_PHP') ?: PHP_BINARY;
$cookieName = (string) app_config('session_cookie', 'brk_game_session');
$adminUserId = 'usr_captain_ether_api_smoke_admin';
$adminEmail = 'captain-ether-api-smoke-admin@example.invalid';
$adminSessionToken = bin2hex(random_bytes(32));
$adminCsrfToken = bin2hex(random_bytes(16));
$playerUserId = 'usr_captain_ether_api_smoke_player';
$playerEmail = 'captain-ether-api-smoke-player@example.invalid';
$playerSessionToken = bin2hex(random_bytes(32));
$playerCsrfToken = bin2hex(random_bytes(16));
$sessionToken = $adminSessionToken;
$csrfToken = $adminCsrfToken;
$port = 19000 + random_int(0, 999);
$baseUrl = 'http://127.0.0.1:' . $port;
$server = null;
$serverLog = tempnam(sys_get_temp_dir(), 'captain_ether_api_smoke_');

$storageNames = [
    'users',
    'sessions',
    'progress',
    'watch_sessions',
    'weak_points',
    'captain_ether_stream_progress',
    'captain_ether_stream_weak_points',
    'captain_answer_logs',
];

$backup = [];
$failures = [];
$checks = [];

function smoke_storage_files(array $names): array {
    $paths = [];
    foreach ($names as $name) {
        $path = storage_path($name);
        $paths[$path] = true;
        $paths[STORAGE_DIR . '/.' . preg_replace('/[^a-z0-9_.-]/i', '', $name) . '.lock'] = true;
    }
    return array_keys($paths);
}

function smoke_backup_storage(array $paths): array {
    $backup = [];
    foreach ($paths as $path) {
        $backup[$path] = is_file($path) ? file_get_contents($path) : null;
    }
    return $backup;
}

function smoke_restore_storage(array $backup): void {
    foreach ($backup as $path => $contents) {
        if ($contents === null) {
            if (is_file($path)) {
                unlink($path);
            }
            continue;
        }
        file_put_contents($path, $contents, LOCK_EX);
    }
}

function smoke_write_json(string $name, array $data): void {
    $encoded = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    if ($encoded === false) {
        throw new RuntimeException('Could not encode storage fixture: ' . $name);
    }
    file_put_contents(storage_path($name), $encoded . PHP_EOL, LOCK_EX);
}

function smoke_read_json(string $name, array $default): array {
    $path = storage_path($name);
    if (!is_file($path)) return $default;
    $data = json_decode((string) file_get_contents($path), true);
    return is_array($data) ? $data : $default;
}

function smoke_seed_users(array $fixtures): void {
    $users = [];
    $emailIndex = [];
    $sessions = [];
    foreach ($fixtures as $fixture) {
        $userId = (string) $fixture['user_id'];
        $email = (string) $fixture['email'];
        $token = (string) $fixture['token'];
        $csrf = (string) $fixture['csrf'];
        $role = (string) ($fixture['role'] ?? 'player');
        $users[$userId] = [
            'id' => $userId,
            'email' => $email,
            'role' => $role,
            'provider' => 'api-smoke',
            'ecosystem_user_id' => '',
            'name' => 'Captain Ether API Smoke ' . $role,
            'created_at' => gmdate('c'),
            'last_login_at' => gmdate('c'),
        ];
        $emailIndex[hash('sha256', $email)] = $userId;
        $sessions[$token] = [
            'token' => $token,
            'csrf' => $csrf,
            'user_id' => $userId,
            'created_at' => gmdate('c'),
            'expires_at' => gmdate('c', time() + 86400),
        ];
    }

    smoke_write_json('users', [
        'users' => $users,
        'email_index' => $emailIndex,
    ]);
    smoke_write_json('sessions', [
        'sessions' => $sessions,
    ]);
    smoke_write_json('progress', ['users' => []]);
    smoke_write_json('watch_sessions', ['sessions' => []]);
    smoke_write_json('weak_points', ['users' => []]);
    smoke_write_json('captain_ether_stream_progress', ['users' => []]);
    smoke_write_json('captain_ether_stream_weak_points', ['users' => []]);
    smoke_write_json('captain_answer_logs', ['entries' => [], 'total_logged' => 0, 'updated_at' => null]);
}

function smoke_seed_weak_points(string $userId, array $itemIds): void {
    $points = [];
    foreach (array_values(array_unique($itemIds)) as $index => $itemId) {
        $points[$itemId] = [
            'item_id' => $itemId,
            'reason' => 'wrong',
            'last_answer' => 'fixture answer',
            'wrong_count' => 1 + $index,
            'hint_count' => 0,
            'skip_count' => 0,
            'created_at' => gmdate('c'),
            'updated_at' => gmdate('c'),
            'resolved_at' => null,
        ];
    }
    smoke_write_json('weak_points', ['users' => [$userId => $points]]);
}

function smoke_seed_progress(string $userId, array $progress): void {
    $default = [
        'skip_cleanup_count' => 0,
        'completed_watches' => 0,
        'last_level' => 'beginner',
        'history' => [],
    ];
    smoke_write_json('progress', [
        'users' => [
            $userId => array_replace($default, $progress),
        ],
    ]);
}

function smoke_start_server(string $phpBin, string $appRoot, int $port, string $logPath): mixed {
    $command = escapeshellarg($phpBin) . ' -S 127.0.0.1:' . $port . ' -t ' . escapeshellarg($appRoot . '/public');
    $descriptorSpec = [
        0 => ['pipe', 'r'],
        1 => ['file', $logPath, 'a'],
        2 => ['file', $logPath, 'a'],
    ];
    $process = proc_open($command, $descriptorSpec, $pipes, $appRoot);
    if (!is_resource($process)) {
        throw new RuntimeException('Could not start PHP built-in server.');
    }
    if (isset($pipes[0]) && is_resource($pipes[0])) {
        fclose($pipes[0]);
    }
    return $process;
}

function smoke_wait_for_server(string $host, int $port): void {
    $deadline = microtime(true) + 5.0;
    do {
        $socket = @fsockopen($host, $port, $errno, $errstr, 0.2);
        if (is_resource($socket)) {
            fclose($socket);
            return;
        }
        usleep(100000);
    } while (microtime(true) < $deadline);
    throw new RuntimeException('PHP built-in server did not become ready.');
}

function smoke_stop_server(mixed $server): void {
    if (is_resource($server)) {
        proc_terminate($server);
        proc_close($server);
    }
}

function smoke_credentials(string $role): array {
    global $adminSessionToken, $adminCsrfToken, $playerSessionToken, $playerCsrfToken;
    if ($role === 'player') {
        return [$playerSessionToken, $playerCsrfToken];
    }
    return [$adminSessionToken, $adminCsrfToken];
}

function smoke_request(string $method, string $url, ?array $body, string $cookieName, string $token, string $csrf): array {
    $headers = [
        'Accept: application/json',
        'Cookie: ' . $cookieName . '=' . $token,
    ];
    $content = null;
    if ($method === 'POST') {
        $headers[] = 'Content-Type: application/json';
        $headers[] = 'X-CSRF-Token: ' . $csrf;
        $content = json_encode($body ?? [], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    $context = stream_context_create([
        'http' => [
            'method' => $method,
            'header' => implode("\r\n", $headers),
            'content' => $content,
            'ignore_errors' => true,
            'timeout' => 10,
        ],
    ]);

    $raw = file_get_contents($url, false, $context);
    $status = 0;
    foreach ($http_response_header ?? [] as $header) {
        if (preg_match('/^HTTP\/\S+\s+(\d+)/', $header, $matches)) {
            $status = (int) $matches[1];
            break;
        }
    }

    $json = json_decode((string) $raw, true);
    return [
        'status' => $status,
        'json' => is_array($json) ? $json : null,
        'raw' => is_string($raw) ? $raw : '',
    ];
}

function smoke_post(string $path, array $body): array {
    global $baseUrl, $cookieName, $sessionToken, $csrfToken;
    return smoke_request('POST', $baseUrl . $path, $body, $cookieName, $sessionToken, $csrfToken);
}

function smoke_post_as(string $role, string $path, array $body): array {
    global $baseUrl, $cookieName;
    [$token, $csrf] = smoke_credentials($role);
    return smoke_request('POST', $baseUrl . $path, $body, $cookieName, $token, $csrf);
}

function smoke_get(string $path): array {
    global $baseUrl, $cookieName, $sessionToken, $csrfToken;
    return smoke_request('GET', $baseUrl . $path, null, $cookieName, $sessionToken, $csrfToken);
}

function smoke_get_as(string $role, string $path): array {
    global $baseUrl, $cookieName;
    [$token, $csrf] = smoke_credentials($role);
    return smoke_request('GET', $baseUrl . $path, null, $cookieName, $token, $csrf);
}

function smoke_check(string $name, bool $condition, string $detail = ''): void {
    global $checks, $failures;
    $checks[] = $name;
    if (!$condition) {
        $failures[] = $detail === '' ? $name : $name . ': ' . $detail;
    }
}

function smoke_items(string $stream = CAPTAIN_LEARNER_STREAM_RU): array {
    $items = captain_stream_items_by_id($stream);
    return array_values($items);
}

function smoke_item_map(string $stream = CAPTAIN_LEARNER_STREAM_RU): array {
    return captain_stream_items_by_id($stream);
}

function smoke_watch_stream(string $watchId): string {
    $store = smoke_read_json('watch_sessions', ['sessions' => []]);
    $watch = $store['sessions'][$watchId] ?? [];
    $stream = is_array($watch) ? captain_learner_stream_from_value($watch['learner_stream'] ?? CAPTAIN_LEARNER_STREAM_RU) : null;
    return $stream ?? CAPTAIN_LEARNER_STREAM_RU;
}

function smoke_allowed_levels(string $level): array {
    if ($level === 'advanced') return ['beginner', 'intermediate', 'advanced'];
    if ($level === 'intermediate') return ['beginner', 'intermediate'];
    return ['beginner'];
}

function smoke_watch_length(string $level): int {
    return match ($level) {
        'advanced' => 20,
        'intermediate' => 16,
        default => 12,
    };
}

function smoke_focus_quota_total(int $total): int {
    return match ($total) {
        20 => 15,
        16 => 12,
        default => 9,
    };
}

function smoke_mixed_focus_quota_total(int $total): int {
    return match ($total) {
        20 => 6,
        16 => 5,
        default => 4,
    };
}

function smoke_valid_next_step(string $step): bool {
    return in_array($step, ['clear_revision', 'build_rhythm', 'step_up', 'hold_course'], true);
}

function smoke_weak_quota_total(int $total): int {
    return max(2, (int) floor($total * 0.35));
}

function smoke_selected_ids(string $watchId): array {
    $store = smoke_read_json('watch_sessions', ['sessions' => []]);
    $watch = $store['sessions'][$watchId] ?? [];
    $ids = [];
    foreach ($watch['questions'] ?? [] as $question) {
        $ids[] = (string) ($question['item_id'] ?? '');
    }
    return array_values(array_filter($ids));
}

function smoke_selected_items(string $watchId): array {
    $map = smoke_item_map(smoke_watch_stream($watchId));
    $result = [];
    foreach (smoke_selected_ids($watchId) as $id) {
        if (isset($map[$id])) {
            $result[] = $map[$id];
        }
    }
    return $result;
}

function smoke_count_branch(array $items, string $branch): int {
    return count(array_filter($items, static fn(array $item): bool => ($item['branch'] ?? '') === $branch));
}

function smoke_type_counts(array $items): array {
    $counts = ['word' => 0, 'short_expression' => 0, 'phrase' => 0];
    foreach ($items as $item) {
        $type = (string) ($item['type'] ?? 'phrase');
        if (!isset($counts[$type])) $type = 'phrase';
        $counts[$type]++;
    }
    return $counts;
}

function smoke_type_floor_total(int $total, string $intensity = 'standard'): array {
    if ($intensity === 'lighter') {
        $word = max(3, (int) ceil($total * 0.30));
        $short = max(3, (int) ceil($total * 0.30));
        $phrase = max(4, $total - $word - $short);
        return ['word' => $word, 'short_expression' => $short, 'phrase' => $phrase];
    }

    if ($intensity === 'denser') {
        $word = max(2, (int) floor($total * 0.23));
        $short = max(3, (int) floor($total * 0.27));
        $phrase = max(6, $total - $word - $short);
        return ['word' => $word, 'short_expression' => $short, 'phrase' => $phrase];
    }

    if ($total >= 20) return ['word' => 6, 'short_expression' => 6, 'phrase' => 8];
    if ($total >= 16) return ['word' => 4, 'short_expression' => 5, 'phrase' => 7];
    return ['word' => 3, 'short_expression' => 3, 'phrase' => 6];
}

function smoke_meets_type_floor(array $items, int $total, string $intensity = 'standard'): bool {
    $counts = smoke_type_counts($items);
    foreach (smoke_type_floor_total($total, $intensity) as $type => $floor) {
        if (($counts[$type] ?? 0) < $floor) return false;
    }
    return true;
}

function smoke_no_public_keys(?array $payload, array $forbidden): bool {
    if (!is_array($payload)) return false;
    foreach ($payload as $key => $value) {
        if (in_array((string) $key, $forbidden, true)) return false;
        if (is_array($value) && !smoke_no_public_keys($value, $forbidden)) return false;
    }
    return true;
}

function smoke_storage_hashes(): array {
    global $storageNames;
    $hashes = [];
    foreach ($storageNames as $name) {
        $path = storage_path($name);
        $hashes[$name] = is_file($path) ? hash('sha256', (string) file_get_contents($path)) : null;
    }
    return $hashes;
}

function smoke_storage_counts(): array {
    return [
        'watch_sessions' => count(smoke_read_json('watch_sessions', ['sessions' => []])['sessions'] ?? []),
        'progress_users' => count(smoke_read_json('progress', ['users' => []])['users'] ?? []),
        'weak_users' => count(smoke_read_json('weak_points', ['users' => []])['users'] ?? []),
        'stream_progress_users' => count(smoke_read_json('captain_ether_stream_progress', ['users' => []])['users'] ?? []),
        'stream_weak_users' => count(smoke_read_json('captain_ether_stream_weak_points', ['users' => []])['users'] ?? []),
        'answer_logs' => count(smoke_read_json('captain_answer_logs', ['entries' => []])['entries'] ?? []),
    ];
}

function smoke_expect_start_error_no_mutation(string $name, array $body, int $status, string $error, string $role = 'admin'): void {
    $before = smoke_storage_hashes();
    $response = smoke_post_as($role, '/api/captain-ether/start-watch.php', $body);
    $after = smoke_storage_hashes();
    smoke_check($name . ' status', $response['status'] === $status, 'expected ' . $status . ', got ' . $response['status']);
    smoke_check($name . ' error', ($response['json']['error'] ?? '') === $error, 'unexpected error code');
    smoke_check($name . ' mutation-free', $before === $after, 'storage counts changed on rejected request');
    smoke_check($name . ' error privacy', smoke_no_public_keys($response['json'], ['token', 'csrf', 'email', 'user_id', 'player_hash']), 'error payload exposed private keys');
}

function smoke_start_watch(string $name, array $body, string $level, ?string $branch = null, string $stream = CAPTAIN_LEARNER_STREAM_RU, string $role = 'admin', ?int $expectedTotal = null): string {
    $response = smoke_post_as($role, '/api/captain-ether/start-watch.php', $body);
    smoke_check($name . ' status', $response['status'] === 200, 'expected 200, got ' . $response['status']);
    smoke_check($name . ' ok', ($response['json']['ok'] ?? false) === true, 'ok was not true');
    $watch = $response['json']['watch'] ?? [];
    $watchId = (string) ($watch['id'] ?? '');
    smoke_check($name . ' watch id', $watchId !== '', 'watch id missing');
    smoke_check($name . ' stream', ($watch['learner_stream'] ?? '') === $stream, 'stream mismatch');
    smoke_check($name . ' level', ($watch['level'] ?? '') === $level, 'level mismatch');
    smoke_check($name . ' total', (int) ($watch['total'] ?? 0) === ($expectedTotal ?? smoke_watch_length($level)), 'total mismatch');
    smoke_check($name . ' response privacy', smoke_no_public_keys($response['json'], ['accepted_answers', 'qa_notes', 'answer', 'branch', 'module', 'user_id', 'email', 'token', 'csrf', 'cookie', 'session_id', 'player_hash']), 'public response exposed private keys');
    $actualTotal = (int) ($watch['total'] ?? 0);
    $pacingIntensity = (string) ($watch['pacing']['intensity'] ?? 'standard');

    $items = $watchId !== '' ? smoke_selected_items($watchId) : [];
    smoke_check($name . ' stored count', count($items) === ($expectedTotal ?? smoke_watch_length($level)), 'stored item count mismatch');
    smoke_check($name . ' stored stream', $watchId === '' || smoke_watch_stream($watchId) === $stream, 'stored stream mismatch');
    if ($branch !== null) {
        smoke_check($name . ' focus quota', smoke_count_branch($items, $branch) === smoke_focus_quota_total($actualTotal), 'focused branch quota mismatch');
        smoke_check($name . ' type floor', smoke_meets_type_floor($items, $actualTotal, $pacingIntensity), 'focused type floor failed');
    }

    return $watchId;
}

function smoke_ids_for(callable $predicate, int $limit): array {
    $ids = [];
    foreach (smoke_items() as $item) {
        if ($predicate($item)) {
            $ids[] = (string) $item['id'];
            if (count($ids) >= $limit) break;
        }
    }
    return $ids;
}

function smoke_target_text(string $itemId): string {
    foreach ([CAPTAIN_LEARNER_STREAM_RU, CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE] as $stream) {
        $map = smoke_item_map($stream);
        if (isset($map[$itemId])) {
            return (string) ($map[$itemId]['target_text'] ?? '');
        }
    }
    return '';
}

function smoke_source_text(string $itemId): string {
    foreach ([CAPTAIN_LEARNER_STREAM_RU, CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE] as $stream) {
        $map = smoke_item_map($stream);
        if (isset($map[$itemId])) {
            return (string) ($map[$itemId]['source_text'] ?? '');
        }
    }
    return '';
}

function smoke_first_item_id(string $watchId): string {
    return smoke_selected_ids($watchId)[0] ?? '';
}

function smoke_answer_watch_item(string $watchId, int $index, string $answer, bool $usedHint = false, bool $skipped = false, array $extra = []): array {
    return smoke_post('/api/captain-ether/submit-answer.php', array_merge([
        'watch_id' => $watchId,
        'index' => $index,
        'answer' => $answer,
        'used_hint' => $usedHint,
        'skipped' => $skipped,
    ], $extra));
}

try {
    $backup = smoke_backup_storage(smoke_storage_files($storageNames));
    smoke_seed_users([
        [
            'user_id' => $adminUserId,
            'email' => $adminEmail,
            'role' => 'admin',
            'token' => $adminSessionToken,
            'csrf' => $adminCsrfToken,
        ],
        [
            'user_id' => $playerUserId,
            'email' => $playerEmail,
            'role' => 'player',
            'token' => $playerSessionToken,
            'csrf' => $playerCsrfToken,
        ],
    ]);
    $server = smoke_start_server($phpBin, $appRoot, $port, (string) $serverLog);
    smoke_wait_for_server('127.0.0.1', $port);

    smoke_start_watch('mixed beginner default', ['level' => 'beginner'], 'beginner');
    smoke_start_watch('mixed intermediate', ['level' => 'intermediate'], 'intermediate');
    smoke_start_watch('mixed advanced', ['level' => 'advanced'], 'advanced');
    smoke_start_watch('legacy branch ignored', ['level' => 'beginner', 'branch' => 'core_radio'], 'beginner');
    smoke_start_watch('legacy module ignored', ['level' => 'beginner', 'module' => 'radio_basics'], 'beginner');
    smoke_start_watch('explicit mixed ignores focus fields', ['level' => 'beginner', 'mode' => 'mixed', 'branch' => 'core_radio', 'module' => 'radio_basics'], 'beginner');

    $unbranched = smoke_ids_for(static fn(array $item): bool => ($item['branch'] ?? '') === '', 1);
    smoke_check('legacy unbranched content remains eligible', count($unbranched) > 0, 'no unbranched starter items found');

    $weakIds = smoke_ids_for(static fn(array $item): bool => in_array($item['level'] ?? '', smoke_allowed_levels('advanced'), true), 12);
    smoke_seed_weak_points($adminUserId, $weakIds);
    $mixedWeakWatch = smoke_start_watch('mixed weak hard cap', ['level' => 'advanced'], 'advanced', null, CAPTAIN_LEARNER_STREAM_RU, 'admin', 17);
    $mixedWeakSelected = array_intersect(smoke_selected_ids($mixedWeakWatch), $weakIds);
    smoke_check('mixed weak hard cap count', count($mixedWeakSelected) <= smoke_weak_quota_total(count(smoke_selected_ids($mixedWeakWatch))), 'selected too many weak items');

    smoke_seed_weak_points($adminUserId, []);
    smoke_expect_start_error_no_mutation('invalid mode', ['level' => 'beginner', 'mode' => 'bad_mode'], 400, 'invalid_watch_mode');
    smoke_expect_start_error_no_mutation('missing focused branch', ['level' => 'beginner', 'mode' => 'focused_branch'], 400, 'missing_branch');
    smoke_expect_start_error_no_mutation('invalid focused branch', ['level' => 'beginner', 'mode' => 'focused_branch', 'branch' => 'not_a_branch'], 400, 'invalid_branch');

    smoke_start_watch('focused core beginner', ['level' => 'beginner', 'mode' => 'focused_branch', 'branch' => 'core_radio'], 'beginner', 'core_radio');
    smoke_start_watch('focused core intermediate', ['level' => 'intermediate', 'mode' => 'focused_branch', 'branch' => 'core_radio'], 'intermediate', 'core_radio');
    smoke_start_watch('focused marina advanced', ['level' => 'advanced', 'mode' => 'focused_branch', 'branch' => 'marina_harbour'], 'advanced', 'marina_harbour');
    smoke_start_watch('focused navigation intermediate', ['level' => 'intermediate', 'mode' => 'focused_branch', 'branch' => 'navigation_reports'], 'intermediate', 'navigation_reports');
    smoke_start_watch('focused safety advanced', ['level' => 'advanced', 'mode' => 'focused_branch', 'branch' => 'safety_securite'], 'advanced', 'safety_securite');

    smoke_expect_start_error_no_mutation('focused navigation beginner unavailable', ['level' => 'beginner', 'mode' => 'focused_branch', 'branch' => 'navigation_reports'], 409, 'branch_watch_unavailable');
    smoke_expect_start_error_no_mutation('focused traffic collision unavailable', ['level' => 'advanced', 'mode' => 'focused_branch', 'branch' => 'traffic_collision'], 409, 'branch_watch_unavailable');
    smoke_expect_start_error_no_mutation('focused urgency below threshold', ['level' => 'beginner', 'mode' => 'focused_branch', 'branch' => 'urgency_panpan'], 409, 'branch_watch_unavailable');
    smoke_expect_start_error_no_mutation('focused module no branch', ['level' => 'beginner', 'mode' => 'focused_module'], 409, 'focused_module_unavailable');
    smoke_expect_start_error_no_mutation('focused module no module', ['level' => 'beginner', 'mode' => 'focused_module', 'branch' => 'core_radio'], 409, 'focused_module_unavailable');
    smoke_expect_start_error_no_mutation('focused module invalid module', ['level' => 'beginner', 'mode' => 'focused_module', 'branch' => 'core_radio', 'module' => 'x'], 409, 'focused_module_unavailable');
    smoke_expect_start_error_no_mutation('focused module valid-looking unavailable', ['level' => 'beginner', 'mode' => 'focused_module', 'branch' => 'core_radio', 'module' => 'radio_basics'], 409, 'focused_module_unavailable');
    smoke_expect_start_error_no_mutation('invalid learner stream', ['level' => 'beginner', 'learner_stream' => 'bad_stream'], 400, 'invalid_learner_stream');
    smoke_expect_start_error_no_mutation('player english native forbidden', ['level' => 'beginner', 'learner_stream' => CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE], 403, 'learner_stream_unavailable', 'player');
    smoke_expect_start_error_no_mutation('english native focused branch unavailable', [
        'level' => 'intermediate',
        'learner_stream' => CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE,
        'mode' => 'focused_branch',
        'branch' => 'core_radio',
    ], 409, 'branch_watch_unavailable');

    $starterIds = array_fill_keys(array_map(static fn(array $item): string => (string) ($item['id'] ?? ''), smoke_items()), true);
    $englishBeginnerWatch = smoke_start_watch(
        'english native beginner admin',
        ['level' => 'beginner', 'learner_stream' => CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE],
        'beginner',
        null,
        CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE
    );
    $englishAdvancedWatch = smoke_start_watch(
        'english native advanced admin',
        ['level' => 'advanced', 'learner_stream' => CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE],
        'advanced',
        null,
        CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE
    );
    foreach ([$englishBeginnerWatch, $englishAdvancedWatch] as $englishWatchId) {
        $englishIds = smoke_selected_ids($englishWatchId);
        $englishItems = smoke_selected_items($englishWatchId);
        smoke_check('english native ids only batch 006 ' . $englishWatchId, count($englishIds) === count(array_filter($englishIds, static fn(string $id): bool => str_starts_with($id, 'EN-B006-'))), 'non Batch 006 item selected');
        smoke_check('english native not in starter ' . $englishWatchId, count(array_filter($englishIds, static fn(string $id): bool => isset($starterIds[$id]))) === 0, 'Batch 006 item found in starter');
        smoke_check('english native no review items ' . $englishWatchId, count(array_filter($englishIds, static fn(string $id): bool => str_starts_with($id, 'EN-B006-REV-'))) === 0, 'REV item selected');
        smoke_check('english native item stream ' . $englishWatchId, count($englishItems) === count(array_filter($englishItems, static fn(array $item): bool => ($item['learner_stream'] ?? '') === CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE)), 'selected item stream mismatch');
    }

    $englishFirstItemId = smoke_first_item_id($englishBeginnerWatch);
    $englishFirstTarget = smoke_target_text($englishFirstItemId);
    $englishFirstSource = smoke_source_text($englishFirstItemId);
    smoke_check('english native source differs from target', normalize_answer($englishFirstSource) !== normalize_answer($englishFirstTarget), 'source prompt equals target');
    $englishWrong = smoke_answer_watch_item($englishBeginnerWatch, 0, $englishFirstSource, false, false, ['learner_stream' => CAPTAIN_LEARNER_STREAM_RU]);
    smoke_check('english source prompt reject status', $englishWrong['status'] === 200, 'expected 200, got ' . $englishWrong['status']);
    smoke_check('english source prompt reject result', ($englishWrong['json']['correct'] ?? true) === false, 'source prompt was accepted');
    smoke_check('english submit stored stream wins', ($englishWrong['json']['learner_stream'] ?? '') === CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE, 'submit switched stream from client input');

    $englishLost = smoke_get('/api/captain-ether/lost-oars.php?learner_stream=' . CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE);
    smoke_check('english lost oars status', $englishLost['status'] === 200, 'expected 200, got ' . $englishLost['status']);
    smoke_check('english lost oars present', count(array_filter($englishLost['json']['lost_oars'] ?? [], static fn(array $row): bool => ($row['item_id'] ?? '') === $englishFirstItemId)) === 1, 'English-native lost oar missing');

    $legacyLostAfterEnglish = smoke_get('/api/captain-ether/lost-oars.php');
    smoke_check('english lost absent from legacy default', count(array_filter($legacyLostAfterEnglish['json']['lost_oars'] ?? [], static fn(array $row): bool => ($row['item_id'] ?? '') === $englishFirstItemId)) === 0, 'English-native lost oar leaked into legacy default');

    $englishDangerReject = smoke_post('/api/captain-ether/resolve-lost-oar.php', [
        'item_id' => 'EN-B006-CORE-001',
        'learner_stream' => CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE,
        'answer' => 'repeat',
    ]);
    smoke_check('english dangerous reject status', $englishDangerReject['status'] === 200, 'expected 200, got ' . $englishDangerReject['status']);
    smoke_check('english dangerous reject result', ($englishDangerReject['json']['correct'] ?? true) === false, 'dangerous natural-English reject was accepted');

    $englishResolve = smoke_post('/api/captain-ether/resolve-lost-oar.php', [
        'item_id' => $englishFirstItemId,
        'learner_stream' => CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE,
        'answer' => $englishFirstTarget,
    ]);
    smoke_check('english resolve lost oar status', $englishResolve['status'] === 200, 'expected 200, got ' . $englishResolve['status']);
    smoke_check('english resolve lost oar correct', ($englishResolve['json']['correct'] ?? false) === true, 'English-native lost oar was not resolved');

    foreach (smoke_selected_ids($englishBeginnerWatch) as $index => $itemId) {
        if ($index === 0) continue;
        smoke_answer_watch_item($englishBeginnerWatch, $index, smoke_target_text($itemId));
    }
    $englishFinish = smoke_post('/api/captain-ether/finish-watch.php', [
        'watch_id' => $englishBeginnerWatch,
        'learner_stream' => CAPTAIN_LEARNER_STREAM_RU,
    ]);
    smoke_check('english finish status', $englishFinish['status'] === 200, 'expected 200, got ' . $englishFinish['status']);
    smoke_check('english finish stream', ($englishFinish['json']['summary']['learner_stream'] ?? '') === CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE, 'finish switched stream from client input');

    $englishProgress = smoke_get('/api/captain-ether/progress.php?learner_stream=' . CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE);
    smoke_check('english progress status', $englishProgress['status'] === 200, 'expected 200, got ' . $englishProgress['status']);
    smoke_check('english progress stream', ($englishProgress['json']['progress']['learner_stream'] ?? '') === CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE, 'progress stream mismatch');
    smoke_check('english progress completed', (int) ($englishProgress['json']['progress']['completed_watches'] ?? 0) >= 1, 'English-native watch not recorded');

    $branchWeakIds = smoke_ids_for(static fn(array $item): bool => ($item['branch'] ?? '') === 'core_radio' && in_array($item['level'] ?? '', smoke_allowed_levels('intermediate'), true), 2);
    $reviewWeakIds = smoke_ids_for(static fn(array $item): bool => ($item['branch'] ?? '') !== 'core_radio' && ($item['branch'] ?? '') !== '' && in_array($item['level'] ?? '', smoke_allowed_levels('intermediate'), true), 2);
    smoke_seed_weak_points($adminUserId, array_merge($branchWeakIds, $reviewWeakIds));
    $prioritizedLost = smoke_get('/api/captain-ether/lost-oars.php');
    smoke_check('lost oars prioritized status', $prioritizedLost['status'] === 200, 'expected 200, got ' . $prioritizedLost['status']);
    smoke_check('lost oars recommended branch', ($prioritizedLost['json']['recommended_branch'] ?? '') === 'core_radio', 'recommended branch mismatch');
    smoke_check('lost oars priority first branch', ($prioritizedLost['json']['lost_oars'][0]['branch'] ?? '') === 'core_radio', 'priority ordering did not start from focus branch');
    smoke_check('lost oars priority first match', ($prioritizedLost['json']['lost_oars'][0]['focus_match'] ?? false) === true, 'priority item was not marked as focus match');
    smoke_check('lost oars recommended watch mode', in_array(($prioritizedLost['json']['recommended_watch']['mode'] ?? ''), ['mixed', 'focused_branch'], true), 'lost oars recommended watch mode missing or invalid');
    smoke_check('lost oars recommended watch pacing', ($prioritizedLost['json']['recommended_watch']['pacing']['profile'] ?? '') === 'recovery', 'lost oars pacing profile mismatch');
    $guidedMixedWatch = smoke_start_watch('mixed guided branch distribution', ['level' => 'intermediate'], 'intermediate', null, CAPTAIN_LEARNER_STREAM_RU, 'admin', 13);
    $guidedMixedItems = smoke_selected_items($guidedMixedWatch);
    smoke_check('mixed guided branch soft quota', smoke_count_branch($guidedMixedItems, 'core_radio') >= smoke_mixed_focus_quota_total(count($guidedMixedItems)), 'mixed watch did not lean into recommended branch');
    $guidedMixedResponse = smoke_post('/api/captain-ether/start-watch.php', ['level' => 'intermediate']);
    smoke_check('mixed guided pacing recovery length', (int) ($guidedMixedResponse['json']['watch']['total'] ?? 0) === 13, 'recovery pacing did not shorten intermediate watch');
    smoke_check('mixed guided pacing recovery profile', ($guidedMixedResponse['json']['watch']['pacing']['profile'] ?? '') === 'recovery', 'recovery pacing profile missing from watch');
    smoke_check('mixed guided hint mode', ($guidedMixedResponse['json']['watch']['hint_policy']['mode'] ?? '') === 'supportive', 'recovery hint mode mismatch');
    smoke_check('mixed guided hint reward', abs((float) ($guidedMixedResponse['json']['watch']['current']['hint_reward'] ?? 0) - 0.75) < 0.001, 'recovery hint reward mismatch');
    smoke_check('mixed guided skip mode', ($guidedMixedResponse['json']['watch']['skip_policy']['mode'] ?? '') === 'supportive', 'recovery skip mode mismatch');
    smoke_check('mixed guided skip reward', abs((float) ($guidedMixedResponse['json']['watch']['current']['skip_reward'] ?? 0) - 0.25) < 0.001, 'recovery skip reward mismatch');
    $guidedWatchId = (string) ($guidedMixedResponse['json']['watch']['id'] ?? '');
    $guidedFirstItemId = smoke_first_item_id($guidedWatchId);
    $guidedSubmit = smoke_answer_watch_item($guidedWatchId, 0, smoke_target_text($guidedFirstItemId), true);
    smoke_check('recovery hint applied status', $guidedSubmit['status'] === 200, 'expected 200, got ' . $guidedSubmit['status']);
    smoke_check('recovery hint applied', ($guidedSubmit['json']['hint_applied'] ?? false) === true, 'recovery hint was not applied');
    smoke_check('recovery hint points', abs((float) ($guidedSubmit['json']['points'] ?? 0) - 0.75) < 0.001, 'recovery hint points mismatch');
    $guidedSkip = smoke_answer_watch_item($guidedWatchId, 1, '', false, true);
    smoke_check('recovery skip status', $guidedSkip['status'] === 200, 'expected 200, got ' . $guidedSkip['status']);
    smoke_check('recovery skip applied', ($guidedSkip['json']['skip_applied'] ?? false) === true, 'recovery skip was not applied');
    smoke_check('recovery skip points', abs((float) ($guidedSkip['json']['points'] ?? 0) - 0.25) < 0.001, 'recovery skip points mismatch');
    $focusedWeakWatch = smoke_start_watch('focused branch weak distribution', ['level' => 'intermediate', 'mode' => 'focused_branch', 'branch' => 'core_radio'], 'intermediate', 'core_radio', CAPTAIN_LEARNER_STREAM_RU, 'admin', 13);
    $focusedWeakItems = smoke_selected_items($focusedWeakWatch);
    $focusedWeakIds = smoke_selected_ids($focusedWeakWatch);
    smoke_check('focused weak hard cap count', count(array_intersect($focusedWeakIds, array_merge($branchWeakIds, $reviewWeakIds))) <= smoke_weak_quota_total(count($focusedWeakIds)), 'selected too many weak items');
    smoke_check('focused review excludes same branch overflow', count($focusedWeakItems) - smoke_count_branch($focusedWeakItems, 'core_radio') === count($focusedWeakItems) - smoke_focus_quota_total(count($focusedWeakItems)), 'review quota mismatch');

    smoke_seed_weak_points($adminUserId, []);
    $flowWatch = smoke_start_watch('submit flow watch', ['level' => 'beginner', 'mode' => 'focused_branch', 'branch' => 'core_radio'], 'beginner', 'core_radio');
    $firstItemId = smoke_first_item_id($flowWatch);
    $submit = smoke_answer_watch_item($flowWatch, 0, smoke_target_text($firstItemId));
    smoke_check('submit answer status', $submit['status'] === 200, 'expected 200, got ' . $submit['status']);
    smoke_check('submit answer correct', ($submit['json']['correct'] ?? false) === true, 'answer not accepted');
    smoke_check('submit answer next privacy', smoke_no_public_keys($submit['json']['next'] ?? [], ['accepted_answers', 'qa_notes', 'answer', 'branch', 'module', 'user_id', 'email', 'token', 'csrf', 'cookie', 'session_id', 'player_hash']), 'next payload exposed private keys');

    foreach (smoke_selected_ids($flowWatch) as $index => $itemId) {
        if ($index === 0) continue;
        smoke_answer_watch_item($flowWatch, $index, smoke_target_text($itemId));
    }
    $finish = smoke_post('/api/captain-ether/finish-watch.php', ['watch_id' => $flowWatch]);
    smoke_check('finish status', $finish['status'] === 200, 'expected 200, got ' . $finish['status']);
    smoke_check('finish summary', isset($finish['json']['summary']['final_score']), 'final score missing');
    smoke_check('finish recommended level', in_array(($finish['json']['summary']['recommended_level'] ?? ''), ['beginner', 'intermediate', 'advanced'], true), 'recommended level missing or invalid');
    smoke_check('finish next step', smoke_valid_next_step((string) ($finish['json']['summary']['next_step'] ?? '')), 'next step missing or invalid');
    smoke_check('finish recommended watch level parity', ($finish['json']['summary']['recommended_watch']['level'] ?? '') === ($finish['json']['summary']['recommended_level'] ?? ''), 'recommended watch level mismatch');
    smoke_check('finish recommended watch mode', in_array(($finish['json']['summary']['recommended_watch']['mode'] ?? ''), ['mixed', 'focused_branch'], true), 'recommended watch mode missing or invalid');
    smoke_check('finish debrief drivers', count($finish['json']['summary']['debrief']['drivers'] ?? []) >= 1, 'finish debrief drivers missing');
    smoke_check('finish debrief branch map', is_array($finish['json']['summary']['debrief']['pressure_by_branch'] ?? null), 'finish debrief branch map missing');
    smoke_check('finish debrief type map', is_array($finish['json']['summary']['debrief']['pressure_by_type'] ?? null), 'finish debrief type map missing');

    $progress = smoke_get('/api/captain-ether/progress.php');
    smoke_check('progress status', $progress['status'] === 200, 'expected 200, got ' . $progress['status']);
    smoke_check('progress completed', (int) ($progress['json']['progress']['completed_watches'] ?? 0) >= 1, 'completed watch not recorded');
    smoke_check('progress recommended level', in_array(($progress['json']['progress']['recommended_level'] ?? ''), ['beginner', 'intermediate', 'advanced'], true), 'progress recommended level missing or invalid');
    smoke_check('progress next step', smoke_valid_next_step((string) ($progress['json']['progress']['next_step'] ?? '')), 'progress next step missing or invalid');
    smoke_check('progress recommended watch mode', in_array(($progress['json']['progress']['recommended_watch']['mode'] ?? ''), ['mixed', 'focused_branch'], true), 'progress recommended watch mode missing or invalid');
    smoke_check('progress branch summary present', is_array($progress['json']['progress']['weak_points_summary']['by_branch'] ?? null), 'progress branch summary missing');

    $lostWatch = smoke_start_watch('lost oar source watch', ['level' => 'beginner'], 'beginner');
    smoke_answer_watch_item($lostWatch, 0, 'definitely wrong answer');
    $lost = smoke_get('/api/captain-ether/lost-oars.php');
    smoke_check('lost oars status', $lost['status'] === 200, 'expected 200, got ' . $lost['status']);
    smoke_check('lost oars present', count($lost['json']['lost_oars'] ?? []) >= 1, 'lost oar not created');
    smoke_check('lost oars next step', smoke_valid_next_step((string) ($lost['json']['next_step'] ?? '')), 'lost-oars next step missing or invalid');
    smoke_check('lost oars branch key', isset($lost['json']['lost_oars'][0]['branch']), 'lost-oars branch key missing');
    smoke_check('lost oars privacy', smoke_no_public_keys($lost['json'], ['accepted_answers', 'qa_notes', 'email', 'user_id', 'token', 'csrf', 'cookie', 'session_id', 'player_hash']), 'lost-oars payload exposed private keys');

    $answerLog = smoke_get('/api/captain-ether/answer-log.php?limit=20');
    smoke_check('answer log status', $answerLog['status'] === 200, 'expected 200, got ' . $answerLog['status']);
    smoke_check('answer log entries', count($answerLog['json']['entries'] ?? []) >= 1, 'answer log was not written');
    smoke_check('answer log all filter', ($answerLog['json']['summary']['filters']['learner_stream'] ?? '') === CAPTAIN_LEARNER_STREAM_ALL, 'omitted answer-log stream was not all');
    smoke_check('answer log has stream', count(array_filter($answerLog['json']['entries'] ?? [], static fn(array $entry): bool => !isset($entry['learner_stream']))) === 0, 'answer log entry missing stream');
    smoke_check('answer log admin player hash', count(array_filter($answerLog['json']['entries'] ?? [], static fn(array $entry): bool => isset($entry['player_hash']))) >= 1, 'admin answer-log did not include player_hash');
    smoke_check('answer log privacy', smoke_no_public_keys($answerLog['json'], ['email', 'user_id', 'token', 'csrf', 'cookie', 'session_id']), 'answer-log payload exposed private keys');

    $englishAnswerLog = smoke_get('/api/captain-ether/answer-log.php?learner_stream=' . CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE . '&limit=20');
    smoke_check('english answer log status', $englishAnswerLog['status'] === 200, 'expected 200, got ' . $englishAnswerLog['status']);
    smoke_check('english answer log filter', ($englishAnswerLog['json']['summary']['filters']['learner_stream'] ?? '') === CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE, 'English-native answer-log filter mismatch');
    smoke_check('english answer log entries stream', count($englishAnswerLog['json']['entries'] ?? []) >= 1 && count(array_filter($englishAnswerLog['json']['entries'] ?? [], static fn(array $entry): bool => ($entry['learner_stream'] ?? '') !== CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE)) === 0, 'English-native answer-log returned another stream');
    smoke_check('english answer log groups stream', count(array_filter($englishAnswerLog['json']['review_groups'] ?? [], static fn(array $group): bool => ($group['learner_stream'] ?? '') !== CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE)) === 0, 'English-native review group returned another stream');

    $lostItemId = (string) (($lost['json']['lost_oars'][0]['item_id'] ?? ''));
    $resolve = smoke_post('/api/captain-ether/resolve-lost-oar.php', ['item_id' => $lostItemId, 'answer' => smoke_target_text($lostItemId)]);
    smoke_check('resolve lost oar status', $resolve['status'] === 200, 'expected 200, got ' . $resolve['status']);
    smoke_check('resolve lost oar correct', ($resolve['json']['correct'] ?? false) === true, 'lost oar was not resolved');
    smoke_check('resolve lost oar recommended mode', in_array(($resolve['json']['recommended_watch']['mode'] ?? ''), ['mixed', 'focused_branch'], true), 'resolve recommended watch mode missing or invalid');

    smoke_seed_weak_points($adminUserId, []);
    smoke_seed_progress($adminUserId, [
        'completed_watches' => 5,
        'last_level' => 'intermediate',
        'history' => [
            ['watch_id' => 'push_1', 'summary' => ['clean' => 12, 'hint' => 0, 'lost' => 0, 'spelling' => 0], 'finished_at' => gmdate('c')],
            ['watch_id' => 'push_2', 'summary' => ['clean' => 13, 'hint' => 1, 'lost' => 0, 'spelling' => 0], 'finished_at' => gmdate('c')],
            ['watch_id' => 'push_3', 'summary' => ['clean' => 12, 'hint' => 0, 'lost' => 0, 'spelling' => 0], 'finished_at' => gmdate('c')],
        ],
    ]);
    $pushProgress = smoke_get('/api/captain-ether/progress.php');
    smoke_check('push progress pace profile', ($pushProgress['json']['progress']['recommended_watch']['pacing']['profile'] ?? '') === 'push', 'push pacing profile missing in progress');
    smoke_check('push progress pace length', (int) ($pushProgress['json']['progress']['recommended_watch']['length'] ?? 0) === 18, 'push pacing length mismatch in progress');
    $pushWatch = smoke_post('/api/captain-ether/start-watch.php', ['level' => 'intermediate']);
    smoke_check('push watch status', $pushWatch['status'] === 200, 'expected 200, got ' . $pushWatch['status']);
    smoke_check('push watch length', (int) ($pushWatch['json']['watch']['total'] ?? 0) === 18, 'push pacing did not extend intermediate watch');
    smoke_check('push watch profile', ($pushWatch['json']['watch']['pacing']['profile'] ?? '') === 'push', 'push pacing profile missing from watch');
    smoke_check('push hint mode', ($pushWatch['json']['watch']['hint_policy']['mode'] ?? '') === 'sparse', 'push hint mode mismatch');
    smoke_check('push hint reward', abs((float) ($pushWatch['json']['watch']['hint_policy']['reward'] ?? 0) - 0.25) < 0.001, 'push hint reward mismatch');
    smoke_check('push skip mode', ($pushWatch['json']['watch']['skip_policy']['mode'] ?? '') === 'limited', 'push skip mode mismatch');
    $pushWatchId = (string) ($pushWatch['json']['watch']['id'] ?? '');
    $pushFirstItemId = smoke_first_item_id($pushWatchId);
    $pushSubmit = smoke_answer_watch_item($pushWatchId, 0, smoke_target_text($pushFirstItemId), true);
    smoke_check('push submit status', $pushSubmit['status'] === 200, 'expected 200, got ' . $pushSubmit['status']);
    if (($pushWatch['json']['watch']['current']['hint_available'] ?? false) === true) {
        smoke_check('push hint applied', ($pushSubmit['json']['hint_applied'] ?? false) === true, 'push hint was available but not applied');
        smoke_check('push hint points', abs((float) ($pushSubmit['json']['points'] ?? 0) - 0.25) < 0.001, 'push hint points mismatch');
    } else {
        smoke_check('push hint blocked', ($pushSubmit['json']['hint_applied'] ?? true) === false, 'push hint applied despite being unavailable');
        smoke_check('push hint blocked points', abs((float) ($pushSubmit['json']['points'] ?? 0) - 1.0) < 0.001, 'push blocked hint altered scoring');
    }
    if (($pushWatch['json']['watch']['current']['skip_available'] ?? false) === true) {
        $pushSkip = smoke_answer_watch_item($pushWatchId, 0, '', false, true);
        smoke_check('push skip allowed status', $pushSkip['status'] === 200, 'expected 200, got ' . $pushSkip['status']);
        smoke_check('push skip allowed points', abs((float) ($pushSkip['json']['points'] ?? 999) - 0.0) < 0.001, 'push skip points mismatch');
    } else {
        $pushSkip = smoke_answer_watch_item($pushWatchId, 0, '', false, true);
        smoke_check('push skip blocked status', $pushSkip['status'] === 409, 'push skip was not blocked');
        smoke_check('push skip blocked error', ($pushSkip['json']['error'] ?? '') === 'skip_unavailable', 'push skip error mismatch');
    }

    $skip = smoke_post('/api/captain-ether/skip-cleanup.php', []);
    smoke_check('skip cleanup no unresolved status', $skip['status'] === 200, 'expected 200, got ' . $skip['status']);
    smoke_check('skip cleanup no force', ($skip['json']['force_hangar'] ?? true) === false, 'unexpected force_hangar');
} catch (Throwable $error) {
    $failures[] = 'fatal: ' . $error->getMessage();
} finally {
    smoke_stop_server($server);
    smoke_restore_storage($backup);
    if (is_string($serverLog) && is_file($serverLog)) {
        unlink($serverLog);
    }
}

if ($failures) {
    echo 'FAIL captain-ether-api-smoke checks=' . count($checks) . ' failures=' . count($failures) . PHP_EOL;
    foreach ($failures as $failure) {
        echo '- ' . $failure . PHP_EOL;
    }
    exit(1);
}

echo 'PASS captain-ether-api-smoke checks=' . count($checks) . PHP_EOL;
