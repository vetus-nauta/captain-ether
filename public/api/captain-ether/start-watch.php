<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';

require_method('POST');
$user = current_user();
require_csrf($user);

function captain_watch_length(string $level): int {
    return match ($level) {
        'advanced' => 20,
        'intermediate' => 16,
        default => 12,
    };
}

function captain_allowed_levels(string $level): array {
    if ($level === 'advanced') return ['beginner', 'intermediate', 'advanced'];
    if ($level === 'intermediate') return ['beginner', 'intermediate'];
    return ['beginner'];
}

function captain_item_type_order(array $item): int {
    return match ((string) ($item['type'] ?? 'phrase')) {
        'word' => 0,
        'short_expression' => 1,
        default => 2,
    };
}

function captain_item_length_score(array $item): int {
    return count(explode(' ', normalize_answer((string) ($item['target_text'] ?? ''))));
}

function captain_sort_progressive_items(array &$items): void {
    usort($items, static function (array $a, array $b): int {
        return captain_item_type_order($a) <=> captain_item_type_order($b)
            ?: captain_item_length_score($a) <=> captain_item_length_score($b)
            ?: (int) ($a['difficulty_score'] ?? 0) <=> (int) ($b['difficulty_score'] ?? 0)
            ?: strcmp((string) ($a['id'] ?? ''), (string) ($b['id'] ?? ''));
    });
}

function captain_weak_item_quota(int $watchLength): int {
    return max(2, (int) floor($watchLength * 0.35));
}

function captain_focus_quota(int $watchLength): int {
    return match ($watchLength) {
        20 => 15,
        16 => 12,
        default => 9,
    };
}

function captain_valid_branches(): array {
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

function captain_filter_error(string $error, string $reason, int $status = 400): never {
    json_response($status, [
        'ok' => false,
        'error' => $error,
        'reason' => $reason,
        'required_mode' => 'mixed',
    ]);
}

function captain_focused_branch_enabled(string $branch, string $level): bool {
    if (in_array($branch, ['core_radio', 'marina_harbour', 'navigation_reports'], true)) {
        return true;
    }
    return $branch === 'safety_securite' && in_array($level, ['intermediate', 'advanced'], true);
}

function captain_selection_pool(array $items, string $level): array {
    $preferred = [];
    $other = [];
    foreach ($items as $item) {
        if (($item['level'] ?? '') === $level) {
            $preferred[] = $item;
        } else {
            $other[] = $item;
        }
    }
    shuffle($preferred);
    shuffle($other);
    return array_merge($preferred, $other);
}

function captain_select_watch_items(array $items, array $weakItemIds, int $watchLength, string $level): array {
    $byId = [];
    foreach ($items as $item) {
        if (is_array($item) && isset($item['id'])) {
            $byId[(string) $item['id']] = $item;
        }
    }

    $selected = [];
    $weakPool = [];
    foreach ($weakItemIds as $weakItemId) {
        if (isset($byId[$weakItemId])) {
            $weakPool[] = $byId[$weakItemId];
        }
    }

    foreach (captain_selection_pool($weakPool, $level) as $item) {
        if (count($selected) >= captain_weak_item_quota($watchLength)) {
            break;
        }
        $selected[(string) $item['id']] = $item;
    }

    $groups = ['word' => [], 'short_expression' => [], 'phrase' => []];
    foreach ($byId as $id => $item) {
        if (isset($selected[$id])) continue;
        $type = (string) ($item['type'] ?? 'phrase');
        if (!isset($groups[$type])) $type = 'phrase';
        $groups[$type][$id] = $item;
    }

    $quotas = [
        'word' => max(2, (int) floor($watchLength * 0.30)),
        'short_expression' => max(3, (int) floor($watchLength * 0.32)),
        'phrase' => $watchLength,
    ];

    foreach (['word', 'short_expression', 'phrase'] as $type) {
        $pool = captain_selection_pool(array_values($groups[$type]), $level);
        foreach ($pool as $item) {
            if (count($selected) >= $watchLength || count(array_filter($selected, static fn($selectedItem) => ($selectedItem['type'] ?? 'phrase') === $type)) >= $quotas[$type]) {
                break;
            }
            $selected[(string) $item['id']] = $item;
        }
    }

    $remaining = captain_selection_pool(
        array_values(array_filter($byId, static fn($item) => !isset($selected[(string) $item['id']]))),
        $level
    );
    foreach ($remaining as $item) {
        if (count($selected) >= $watchLength) break;
        $selected[(string) $item['id']] = $item;
    }

    $result = array_values($selected);
    captain_sort_progressive_items($result);
    return array_slice($result, 0, $watchLength);
}

function captain_select_focused_branch_items(array $items, array $weakItemIds, int $watchLength, string $level, string $branch): array {
    if (!captain_focused_branch_enabled($branch, $level)) {
        return [];
    }

    $byId = [];
    foreach ($items as $item) {
        if (is_array($item) && isset($item['id'])) {
            $byId[(string) $item['id']] = $item;
        }
    }

    $focusQuota = captain_focus_quota($watchLength);
    $weakQuota = captain_weak_item_quota($watchLength);
    $selected = [];

    $branchWeakPool = [];
    foreach ($weakItemIds as $weakItemId) {
        if (isset($byId[$weakItemId]) && ($byId[$weakItemId]['branch'] ?? '') === $branch) {
            $branchWeakPool[] = $byId[$weakItemId];
        }
    }

    foreach (captain_selection_pool($branchWeakPool, $level) as $item) {
        if (count($selected) >= $weakQuota || count($selected) >= $focusQuota) {
            break;
        }
        $selected[(string) $item['id']] = $item;
    }

    $branchPool = array_values(array_filter($byId, static function ($item) use ($branch, $selected) {
        return ($item['branch'] ?? '') === $branch && !isset($selected[(string) $item['id']]);
    }));

    foreach (captain_selection_pool($branchPool, $level) as $item) {
        if (count($selected) >= $focusQuota) {
            break;
        }
        $selected[(string) $item['id']] = $item;
    }

    if (count($selected) < $focusQuota) {
        return [];
    }

    $reviewQuota = $watchLength - count($selected);
    $reviewSelected = [];
    $crossBranchWeakPool = [];
    foreach ($weakItemIds as $weakItemId) {
        if (
            isset($byId[$weakItemId])
            && ($byId[$weakItemId]['branch'] ?? '') !== $branch
            && !isset($selected[$weakItemId])
        ) {
            $crossBranchWeakPool[] = $byId[$weakItemId];
        }
    }

    foreach (captain_selection_pool($crossBranchWeakPool, $level) as $item) {
        $weakSelectedCount = count(array_filter($selected + $reviewSelected, static function ($selectedItem) use ($weakItemIds): bool {
            return in_array((string) ($selectedItem['id'] ?? ''), $weakItemIds, true);
        }));
        if (count($reviewSelected) >= $reviewQuota || $weakSelectedCount >= $weakQuota) {
            break;
        }
        $reviewSelected[(string) $item['id']] = $item;
    }

    $reviewPool = array_values(array_filter($byId, static function ($item) use ($selected, $reviewSelected) {
        $id = (string) ($item['id'] ?? '');
        return $id !== '' && !isset($selected[$id]) && !isset($reviewSelected[$id]);
    }));

    foreach (captain_selection_pool($reviewPool, $level) as $item) {
        if (count($reviewSelected) >= $reviewQuota) {
            break;
        }
        $reviewSelected[(string) $item['id']] = $item;
    }

    $result = array_values($selected + $reviewSelected);
    if (count($result) !== $watchLength) {
        return [];
    }

    captain_sort_progressive_items($result);
    return $result;
}

$input = read_json_body();
$level = is_string($input['level'] ?? null) ? $input['level'] : 'beginner';
if (!in_array($level, ['beginner', 'intermediate', 'advanced'], true)) {
    $level = 'beginner';
}

$mode = 'mixed';
if (array_key_exists('mode', $input)) {
    if (!is_string($input['mode']) || !in_array($input['mode'], ['mixed', 'focused_branch', 'focused_module'], true)) {
        captain_filter_error('invalid_watch_mode', 'Watch mode is not available');
    }
    $mode = $input['mode'];
}

if ($mode === 'focused_module') {
    captain_filter_error('focused_module_unavailable', 'Focused module watches are not enabled', 409);
}

$branch = '';
if ($mode === 'focused_branch') {
    if (!array_key_exists('branch', $input) || $input['branch'] === null || $input['branch'] === '') {
        captain_filter_error('missing_branch', 'Focused branch watches require a branch');
    }
    if (!is_string($input['branch']) || !in_array($input['branch'], captain_valid_branches(), true)) {
        captain_filter_error('invalid_branch', 'Focused branch is not available');
    }
    $branch = $input['branch'];
}

$content = captain_content();
$items = array_values(array_filter($content['items'] ?? [], static function ($item) use ($level) {
    if (!is_array($item)) return false;
    return in_array($item['level'] ?? '', captain_allowed_levels($level), true);
}));

$byId = captain_items_by_id();
$weak = unresolved_weak_points($user['id']);

if (!$items) {
    json_response(500, ['ok' => false, 'error' => 'Captain Ether content is empty']);
}

$watchLength = captain_watch_length($level);
if ($mode === 'focused_branch') {
    $items = captain_select_focused_branch_items($items, array_keys($weak), $watchLength, $level, $branch);
    if (!$items) {
        captain_filter_error('branch_watch_unavailable', 'Focused watch pool is below threshold', 409);
    }
} else {
    $items = captain_select_watch_items($items, array_keys($weak), $watchLength, $level);
}

$questions = [];
foreach ($items as $i => $item) {
    $questions[] = [
        'index' => $i,
        'item_id' => $item['id'],
        'level' => $level,
    ];
}

$sessionId = 'watch_' . bin2hex(random_bytes(8));
storage_mutate('watch_sessions', watch_sessions_default(), function (array &$store) use ($sessionId, $user, $level, $questions) {
    $store['sessions'][$sessionId] = [
        'id' => $sessionId,
        'user_id' => $user['id'],
        'game' => 'captain_ether',
        'level' => $level,
        'status' => 'active',
        'created_at' => iso_time(),
        'finished_at' => null,
        'questions' => $questions,
    ];
});

storage_mutate('progress', progress_default(), function (array &$store) use ($user, $level) {
    $store['users'][$user['id']] = array_replace(user_progress($user['id']), [
        'last_level' => $level,
        'updated_at' => iso_time(),
    ]);
});

json_response(200, [
    'ok' => true,
    'watch' => [
        'id' => $sessionId,
        'level' => $level,
        'total' => count($questions),
        'current' => visible_question($questions[0], $byId[$questions[0]['item_id']]),
    ],
]);
