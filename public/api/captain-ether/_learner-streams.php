<?php
declare(strict_types=1);

const CAPTAIN_LEARNER_STREAM_RU = 'ru_source';
const CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE = 'english_native';
const CAPTAIN_LEARNER_STREAM_ALL = 'all';
const CAPTAIN_ENGLISH_NATIVE_BATCH_ID = 'batch-006-english-native-seaspeak-pilot';
const CAPTAIN_ENGLISH_NATIVE_BATCH_FILE = CONTENT_DIR . '/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json';

function captain_valid_learner_streams(bool $allowAll = false): array {
    $streams = [CAPTAIN_LEARNER_STREAM_RU, CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE];
    if ($allowAll) {
        $streams[] = CAPTAIN_LEARNER_STREAM_ALL;
    }
    return $streams;
}

function captain_learner_stream_from_value(mixed $value, bool $allowAll = false): ?string {
    if (!is_string($value)) return null;
    $stream = trim($value);
    return in_array($stream, captain_valid_learner_streams($allowAll), true) ? $stream : null;
}

function captain_learner_stream_from_input(array $input, string $default = CAPTAIN_LEARNER_STREAM_RU, bool $allowAll = false): string {
    if (!array_key_exists('learner_stream', $input) || $input['learner_stream'] === null || $input['learner_stream'] === '') {
        return $default;
    }

    $stream = captain_learner_stream_from_value($input['learner_stream'], $allowAll);
    if ($stream === null) {
        json_response(400, ['ok' => false, 'error' => 'invalid_learner_stream']);
    }
    return $stream;
}

function captain_learner_stream_from_query(string $default = CAPTAIN_LEARNER_STREAM_RU, bool $allowAll = false): string {
    if (!array_key_exists('learner_stream', $_GET) || $_GET['learner_stream'] === null || $_GET['learner_stream'] === '') {
        return $default;
    }

    $stream = captain_learner_stream_from_value($_GET['learner_stream'], $allowAll);
    if ($stream === null) {
        json_response(400, ['ok' => false, 'error' => 'invalid_learner_stream']);
    }
    return $stream;
}

function captain_require_learner_stream_access(array $user, string $stream): void {
    if ($stream === CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE && ($user['role'] ?? 'player') !== 'admin') {
        json_response(403, ['ok' => false, 'error' => 'learner_stream_unavailable']);
    }
}

function captain_load_english_native_batch(): array {
    static $batch = null;
    if (is_array($batch)) return $batch;

    $data = json_decode((string) file_get_contents(CAPTAIN_ENGLISH_NATIVE_BATCH_FILE), true);
    if (!is_array($data)) {
        json_response(500, ['ok' => false, 'error' => 'English-native content unavailable']);
    }
    if (($data['batch_id'] ?? '') !== CAPTAIN_ENGLISH_NATIVE_BATCH_ID || ($data['status'] ?? '') !== 'draft_internal') {
        json_response(500, ['ok' => false, 'error' => 'English-native content contract mismatch']);
    }

    $items = [];
    foreach ($data['items'] ?? [] as $item) {
        if (!is_array($item)) continue;
        $id = (string) ($item['id'] ?? '');
        if (str_starts_with($id, 'EN-B006-REV-')) continue;
        if (
            ($item['learner_stream'] ?? '') !== CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE
            || ($item['source_language'] ?? '') !== 'en'
            || ($item['target_language'] ?? '') !== 'en'
        ) {
            json_response(500, ['ok' => false, 'error' => 'English-native item contract mismatch']);
        }
        $items[] = $item;
    }

    if (!$items) {
        json_response(500, ['ok' => false, 'error' => 'English-native content is empty']);
    }

    $data['items'] = $items;
    $batch = $data;
    return $batch;
}

function captain_stream_content(string $stream): array {
    if ($stream === CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE) {
        return captain_load_english_native_batch();
    }
    return captain_content();
}

function captain_stream_items(string $stream): array {
    return array_values(array_filter(captain_stream_content($stream)['items'] ?? [], 'is_array'));
}

function captain_stream_items_by_id(string $stream): array {
    $items = [];
    foreach (captain_stream_items($stream) as $item) {
        if (isset($item['id'])) {
            $items[(string) $item['id']] = $item;
        }
    }
    return $items;
}

function captain_watch_learner_stream(array $watch): string {
    $stream = captain_learner_stream_from_value($watch['learner_stream'] ?? CAPTAIN_LEARNER_STREAM_RU);
    return $stream ?? CAPTAIN_LEARNER_STREAM_RU;
}

function captain_stream_progress_default(): array {
    return [
        'skip_cleanup_count' => 0,
        'completed_watches' => 0,
        'last_level' => 'beginner',
        'history' => [],
    ];
}

function captain_stream_progress_store_default(): array {
    return ['users' => []];
}

function captain_stream_weak_points_store_default(): array {
    return ['users' => []];
}

function captain_stream_user_progress(string $userId, string $stream): array {
    if ($stream === CAPTAIN_LEARNER_STREAM_RU) {
        return user_progress($userId);
    }

    $store = storage_read('captain_ether_stream_progress', captain_stream_progress_store_default());
    $progress = $store['users'][$userId][$stream] ?? [];
    return array_replace(captain_stream_progress_default(), is_array($progress) ? $progress : []);
}

function captain_mutate_stream_progress(string $userId, string $stream, callable $callback): mixed {
    if ($stream === CAPTAIN_LEARNER_STREAM_RU) {
        return storage_mutate('progress', progress_default(), function (array &$store) use ($userId, $stream, $callback) {
            $progress = array_replace(captain_stream_progress_default(), is_array($store['users'][$userId] ?? null) ? $store['users'][$userId] : []);
            $result = $callback($progress);
            $store['users'][$userId] = $progress;
            return $result === null ? $progress : $result;
        });
    }

    return storage_mutate('captain_ether_stream_progress', captain_stream_progress_store_default(), function (array &$store) use ($userId, $stream, $callback) {
        $store['users'][$userId] = is_array($store['users'][$userId] ?? null) ? $store['users'][$userId] : [];
        $progress = array_replace(captain_stream_progress_default(), is_array($store['users'][$userId][$stream] ?? null) ? $store['users'][$userId][$stream] : []);
        $progress['learner_stream'] = $stream;
        $result = $callback($progress);
        $progress['learner_stream'] = $stream;
        $store['users'][$userId][$stream] = $progress;
        return $result === null ? $progress : $result;
    });
}

function captain_stream_unresolved_weak_points(string $userId, string $stream): array {
    if ($stream === CAPTAIN_LEARNER_STREAM_RU) {
        return unresolved_weak_points($userId);
    }

    $store = storage_read('captain_ether_stream_weak_points', captain_stream_weak_points_store_default());
    $points = $store['users'][$userId][$stream] ?? [];
    if (!is_array($points)) return [];
    return array_filter($points, static fn($point) => is_array($point) && empty($point['resolved_at']));
}

function captain_mark_stream_weak_point(string $userId, string $stream, array $item, string $reason, string $answer): void {
    if ($stream === CAPTAIN_LEARNER_STREAM_RU) {
        mark_weak_point($userId, $item, $reason, $answer);
        return;
    }

    storage_mutate('captain_ether_stream_weak_points', captain_stream_weak_points_store_default(), function (array &$store) use ($userId, $stream, $item, $reason, $answer) {
        $store['users'][$userId] = is_array($store['users'][$userId] ?? null) ? $store['users'][$userId] : [];
        $store['users'][$userId][$stream] = is_array($store['users'][$userId][$stream] ?? null) ? $store['users'][$userId][$stream] : [];
        $existing = $store['users'][$userId][$stream][$item['id']] ?? [];
        $store['users'][$userId][$stream][$item['id']] = [
            'item_id' => $item['id'],
            'learner_stream' => $stream,
            'reason' => $reason,
            'last_answer' => $answer,
            'wrong_count' => (int) ($existing['wrong_count'] ?? 0) + ($reason === 'wrong' ? 1 : 0),
            'hint_count' => (int) ($existing['hint_count'] ?? 0) + ($reason === 'hint' ? 1 : 0),
            'skip_count' => (int) ($existing['skip_count'] ?? 0) + ($reason === 'skip' ? 1 : 0),
            'created_at' => $existing['created_at'] ?? iso_time(),
            'updated_at' => iso_time(),
            'resolved_at' => null,
        ];
    });
}

function captain_resolve_stream_weak_point(string $userId, string $stream, string $itemId): void {
    if ($stream === CAPTAIN_LEARNER_STREAM_RU) {
        resolve_weak_point($userId, $itemId);
        return;
    }

    storage_mutate('captain_ether_stream_weak_points', captain_stream_weak_points_store_default(), function (array &$store) use ($userId, $stream, $itemId) {
        if (isset($store['users'][$userId][$stream][$itemId])) {
            $store['users'][$userId][$stream][$itemId]['resolved_at'] = iso_time();
            $store['users'][$userId][$stream][$itemId]['updated_at'] = iso_time();
        }
    });
}

function captain_stream_unresolved_count(string $userId, string $stream): int {
    return count(captain_stream_unresolved_weak_points($userId, $stream));
}

function captain_progress_valid_branches(): array {
    return [
        'core_radio',
        'marina_harbour',
        'navigation_reports',
        'traffic_collision',
        'safety_securite',
        'urgency_panpan',
        'distress_mayday',
        'onboard_operations',
        'vts_port_control',
        'review_minimal_pairs',
    ];
}

function captain_progress_focused_branch_enabled(string $branch, string $level): bool {
    if (in_array($branch, ['core_radio', 'marina_harbour'], true)) {
        return true;
    }
    return in_array($branch, ['navigation_reports', 'safety_securite'], true)
        && in_array($level, ['intermediate', 'advanced'], true);
}

function captain_progress_recommended_level(array $progress, int $unresolved): string {
    $completed = (int) ($progress['completed_watches'] ?? 0);
    $lastLevel = (string) ($progress['last_level'] ?? 'beginner');

    if ($unresolved >= 5) {
        return 'beginner';
    }
    if ($lastLevel === 'advanced') {
        return 'advanced';
    }
    if ($completed >= 8 && $unresolved <= 2) {
        return 'advanced';
    }
    if ($completed >= 3 && $unresolved <= 4) {
        return 'intermediate';
    }
    return 'beginner';
}

function captain_base_watch_length(string $level): int {
    return match ($level) {
        'advanced' => 20,
        'intermediate' => 16,
        default => 12,
    };
}

function captain_watch_length_bounds(string $level): array {
    return match ($level) {
        'advanced' => ['min' => 17, 'max' => 22],
        'intermediate' => ['min' => 13, 'max' => 18],
        default => ['min' => 10, 'max' => 14],
    };
}

function captain_recent_watch_metrics(array $progress, int $limit = 3): array {
    $history = is_array($progress['history'] ?? null) ? $progress['history'] : [];
    if (!$history) {
        return [
            'count' => 0,
            'avg_clean' => 0.0,
            'avg_hint' => 0.0,
            'avg_lost' => 0.0,
            'avg_spelling' => 0.0,
        ];
    }

    $recent = array_slice($history, -$limit);
    $count = 0;
    $clean = 0.0;
    $hint = 0.0;
    $lost = 0.0;
    $spelling = 0.0;
    foreach ($recent as $entry) {
        if (!is_array($entry)) continue;
        $summary = is_array($entry['summary'] ?? null) ? $entry['summary'] : [];
        $count++;
        $clean += (float) ($summary['clean'] ?? 0);
        $hint += (float) ($summary['hint'] ?? 0);
        $lost += (float) ($summary['lost'] ?? 0);
        $spelling += (float) ($summary['spelling'] ?? 0);
    }

    if ($count === 0) {
        return [
            'count' => 0,
            'avg_clean' => 0.0,
            'avg_hint' => 0.0,
            'avg_lost' => 0.0,
            'avg_spelling' => 0.0,
        ];
    }

    return [
        'count' => $count,
        'avg_clean' => round($clean / $count, 2),
        'avg_hint' => round($hint / $count, 2),
        'avg_lost' => round($lost / $count, 2),
        'avg_spelling' => round($spelling / $count, 2),
    ];
}

function captain_watch_pacing(string $level, array $progress, int $unresolved): array {
    $baseLength = captain_base_watch_length($level);
    $bounds = captain_watch_length_bounds($level);
    $metrics = captain_recent_watch_metrics($progress);
    $completed = (int) ($progress['completed_watches'] ?? 0);

    $profile = 'steady';
    $intensity = 'standard';
    $targetLength = $baseLength;

    if (
        $unresolved >= 4
        || ($metrics['count'] >= 1 && ((float) $metrics['avg_lost'] >= 2.0 || (float) $metrics['avg_hint'] >= 3.0))
    ) {
        $profile = 'recovery';
        $intensity = 'lighter';
        $targetLength = $baseLength - ($level === 'beginner' ? 2 : 3);
    } elseif (
        $completed >= 3
        && $unresolved <= 1
        && (float) $metrics['avg_lost'] <= 0.34
        && (float) $metrics['avg_hint'] <= 1.0
        && (float) $metrics['avg_clean'] >= max(6, (int) floor($baseLength * 0.55))
    ) {
        $profile = 'push';
        $intensity = 'denser';
        $targetLength = $baseLength + 2;
    }

    $targetLength = max($bounds['min'], min($bounds['max'], $targetLength));

    return [
        'profile' => $profile,
        'intensity' => $intensity,
        'target_length' => $targetLength,
        'base_length' => $baseLength,
        'recent_metrics' => $metrics,
    ];
}

function captain_hint_policy(array $pacing, string $level): array {
    $profile = (string) ($pacing['profile'] ?? 'steady');
    return match ($profile) {
        'recovery' => [
            'mode' => 'supportive',
            'reward' => 0.75,
            'hint_level' => 'beginner',
            'label' => 'supportive',
        ],
        'push' => [
            'mode' => 'sparse',
            'reward' => 0.25,
            'hint_level' => $level === 'advanced' ? 'intermediate' : $level,
            'label' => 'sparse',
        ],
        default => [
            'mode' => 'standard',
            'reward' => 0.5,
            'hint_level' => $level,
            'label' => 'standard',
        ],
    };
}

function captain_skip_policy(array $pacing, array $item): array {
    $profile = (string) ($pacing['profile'] ?? 'steady');
    $type = (string) ($item['type'] ?? 'phrase');

    return match ($profile) {
        'recovery' => [
            'mode' => 'supportive',
            'reward' => 0.25,
            'available' => true,
            'label' => 'supportive',
        ],
        'push' => [
            'mode' => 'limited',
            'reward' => 0.0,
            'available' => $type === 'phrase',
            'label' => 'limited',
        ],
        default => [
            'mode' => 'standard',
            'reward' => 0.0,
            'available' => true,
            'label' => 'standard',
        ],
    };
}

function captain_progress_recommended_branch(array $branchCounts, string $recommendedLevel): string {
    foreach ($branchCounts as $branch => $count) {
        if (!is_string($branch) || !is_int($count) && !is_numeric($count)) continue;
        if (!in_array($branch, captain_progress_valid_branches(), true)) continue;
        if (!captain_progress_focused_branch_enabled($branch, $recommendedLevel)) continue;
        return $branch;
    }
    return '';
}

function captain_progress_next_step(array $progress, int $unresolved, string $recommendedLevel): string {
    $completed = (int) ($progress['completed_watches'] ?? 0);
    $lastLevel = (string) ($progress['last_level'] ?? 'beginner');

    if ($unresolved >= 5) {
        return 'clear_revision';
    }
    if ($completed < 3) {
        return 'build_rhythm';
    }
    if ($recommendedLevel !== $lastLevel && $unresolved <= 2) {
        return 'step_up';
    }
    return 'hold_course';
}

function captain_recent_watch_summary(array $progress): ?array {
    $history = $progress['history'] ?? [];
    if (!is_array($history) || !$history) {
        return null;
    }

    $recent = end($history);
    if (!is_array($recent)) {
        return null;
    }

    $summary = is_array($recent['summary'] ?? null) ? $recent['summary'] : [];
    return [
        'watch_id' => (string) ($recent['watch_id'] ?? ''),
        'finished_at' => (string) ($recent['finished_at'] ?? ''),
        'clean' => (int) ($summary['clean'] ?? 0),
        'hint' => (int) ($summary['hint'] ?? 0),
        'lost' => (int) ($summary['lost'] ?? 0),
        'spelling' => (int) ($summary['spelling'] ?? 0),
    ];
}

function captain_progress_summary(array $progress, array $unresolvedWeakPoints, array $itemsById): array {
    $weakByType = [];
    $weakByTopic = [];
    $weakByReason = [];
    $weakByBranch = [];

    foreach ($unresolvedWeakPoints as $point) {
        if (!is_array($point)) continue;

        $reason = (string) ($point['reason'] ?? 'weak');
        $weakByReason[$reason] = (int) ($weakByReason[$reason] ?? 0) + 1;

        $item = $itemsById[(string) ($point['item_id'] ?? '')] ?? null;
        if (!is_array($item)) continue;

        $type = (string) ($item['type'] ?? 'phrase');
        $topic = trim((string) ($item['topic'] ?? ''));
        $branch = trim((string) ($item['branch'] ?? ''));

        $weakByType[$type] = (int) ($weakByType[$type] ?? 0) + 1;
        if ($topic !== '') {
            $weakByTopic[$topic] = (int) ($weakByTopic[$topic] ?? 0) + 1;
        }
        if ($branch !== '') {
            $weakByBranch[$branch] = (int) ($weakByBranch[$branch] ?? 0) + 1;
        }
    }

    arsort($weakByTopic);
    arsort($weakByBranch);

    $unresolved = count($unresolvedWeakPoints);
    $recommendedLevel = captain_progress_recommended_level($progress, $unresolved);
    $recommendedPacing = captain_watch_pacing($recommendedLevel, $progress, $unresolved);
    $recommendedBranch = captain_progress_recommended_branch($weakByBranch, $recommendedLevel);
    $recommendedWatch = [
        'level' => $recommendedLevel,
        'mode' => $recommendedBranch !== '' ? 'focused_branch' : 'mixed',
        'length' => $recommendedPacing['target_length'],
        'pacing' => $recommendedPacing,
    ];
    if ($recommendedBranch !== '') {
        $recommendedWatch['branch'] = $recommendedBranch;
    }

    return [
        'learner_stream' => (string) ($progress['learner_stream'] ?? CAPTAIN_LEARNER_STREAM_RU),
        'completed_watches' => (int) ($progress['completed_watches'] ?? 0),
        'last_level' => (string) ($progress['last_level'] ?? 'beginner'),
        'skip_cleanup_count' => (int) ($progress['skip_cleanup_count'] ?? 0),
        'unresolved_lost_oars' => $unresolved,
        'recommended_level' => $recommendedLevel,
        'recommended_branch' => $recommendedBranch,
        'recommended_watch' => $recommendedWatch,
        'next_step' => captain_progress_next_step($progress, $unresolved, $recommendedLevel),
        'recent_watch' => captain_recent_watch_summary($progress),
        'weak_points_summary' => [
            'by_type' => $weakByType,
            'by_reason' => $weakByReason,
            'by_branch' => $weakByBranch,
            'top_topics' => array_slice($weakByTopic, 0, 3, true),
        ],
        'history' => is_array($progress['history'] ?? null) ? $progress['history'] : [],
    ];
}

function captain_watch_pressure_summary(array $questions, array $itemsById): array {
    $pressureByBranch = [];
    $pressureByType = [];
    $pressureByReason = [];

    foreach ($questions as $question) {
        if (!is_array($question)) continue;
        $result = $question['result'] ?? null;
        if (!is_array($result)) continue;

        $reason = (string) ($result['reason'] ?? '');
        if ($reason === '' || $reason === 'clean') {
            continue;
        }

        $pressureByReason[$reason] = (int) ($pressureByReason[$reason] ?? 0) + 1;

        $item = $itemsById[(string) ($question['item_id'] ?? '')] ?? null;
        if (!is_array($item)) continue;

        $branch = trim((string) ($item['branch'] ?? ''));
        $type = trim((string) ($item['type'] ?? 'phrase'));
        if ($branch !== '') {
            $pressureByBranch[$branch] = (int) ($pressureByBranch[$branch] ?? 0) + 1;
        }
        if ($type !== '') {
            $pressureByType[$type] = (int) ($pressureByType[$type] ?? 0) + 1;
        }
    }

    arsort($pressureByBranch);
    arsort($pressureByType);
    arsort($pressureByReason);

    return [
        'by_branch' => array_slice($pressureByBranch, 0, 3, true),
        'by_type' => array_slice($pressureByType, 0, 3, true),
        'by_reason' => array_slice($pressureByReason, 0, 3, true),
    ];
}

function captain_watch_debrief_drivers(array $summary, array $progressSummary, array $pressureSummary): array {
    $drivers = [];
    $recommendedBranch = (string) ($progressSummary['recommended_branch'] ?? '');
    $recommendedLevel = (string) ($progressSummary['recommended_level'] ?? 'beginner');
    $nextStep = (string) ($progressSummary['next_step'] ?? '');
    $unresolved = (int) ($progressSummary['unresolved_lost_oars'] ?? 0);
    $completed = (int) ($progressSummary['completed_watches'] ?? 0);
    $clean = (int) ($summary['clean'] ?? 0);
    $hint = (int) ($summary['hint'] ?? 0);
    $spelling = (int) ($summary['spelling'] ?? 0);
    $lost = (int) ($summary['lost'] ?? 0);

    if ($unresolved >= 5) {
        $drivers[] = ['kind' => 'revision_load', 'count' => $unresolved];
    }

    if ($recommendedBranch !== '') {
        $branchPressure = (int) (($pressureSummary['by_branch'][$recommendedBranch] ?? 0));
        if ($branchPressure > 0) {
            $drivers[] = ['kind' => 'branch_pressure', 'branch' => $recommendedBranch, 'count' => $branchPressure];
        }
    }

    if ($drivers === [] && $pressureSummary['by_branch'] !== []) {
        $branch = (string) array_key_first($pressureSummary['by_branch']);
        $drivers[] = ['kind' => 'branch_pressure', 'branch' => $branch, 'count' => (int) ($pressureSummary['by_branch'][$branch] ?? 0)];
    }

    if ($pressureSummary['by_type'] !== []) {
        $type = (string) array_key_first($pressureSummary['by_type']);
        $drivers[] = ['kind' => 'type_pressure', 'type' => $type, 'count' => (int) ($pressureSummary['by_type'][$type] ?? 0)];
    }

    if ($hint > 0) {
        $drivers[] = ['kind' => 'hint_load', 'count' => $hint];
    }

    if ($spelling > 0) {
        $drivers[] = ['kind' => 'spelling_load', 'count' => $spelling];
    }

    if ($nextStep === 'build_rhythm') {
        $drivers[] = ['kind' => 'rhythm_build', 'count' => $completed];
    } elseif ($nextStep === 'step_up') {
        $drivers[] = ['kind' => 'step_up_ready', 'level' => $recommendedLevel, 'count' => $clean];
    } elseif ($lost > 0 && $unresolved < 5) {
        $drivers[] = ['kind' => 'watch_errors', 'count' => $lost];
    }

    if ($drivers === []) {
        $drivers[] = ['kind' => 'consistency', 'count' => $clean];
    }

    return array_slice($drivers, 0, 3);
}

function captain_watch_debrief(array $summary, array $questions, array $itemsById, array $progressSummary): array {
    $pressureSummary = captain_watch_pressure_summary($questions, $itemsById);
    return [
        'drivers' => captain_watch_debrief_drivers($summary, $progressSummary, $pressureSummary),
        'pressure_by_branch' => $pressureSummary['by_branch'],
        'pressure_by_type' => $pressureSummary['by_type'],
        'pressure_by_reason' => $pressureSummary['by_reason'],
    ];
}
