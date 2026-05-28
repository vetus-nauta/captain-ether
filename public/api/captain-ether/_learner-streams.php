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

