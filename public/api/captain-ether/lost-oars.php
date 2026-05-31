<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';
require __DIR__ . '/_learner-streams.php';

require_method('GET');
$user = current_user();
$learnerStream = captain_learner_stream_from_query();
captain_require_learner_stream_access($user, $learnerStream);

$items = captain_stream_items_by_id($learnerStream);
$progress = captain_stream_user_progress($user['id'], $learnerStream);
$unresolvedWeakPoints = captain_stream_unresolved_weak_points($user['id'], $learnerStream);
$progressSummary = captain_progress_summary($progress + ['learner_stream' => $learnerStream], $unresolvedWeakPoints, $items);
$recommendedBranch = (string) ($progressSummary['recommended_branch'] ?? '');
$lost = [];
foreach ($unresolvedWeakPoints as $point) {
    $item = $items[$point['item_id'] ?? ''] ?? null;
    if (!is_array($item)) continue;
    $branch = trim((string) ($item['branch'] ?? ''));
    $reason = (string) ($point['reason'] ?? 'weak');
    $priority = 0;
    if ($recommendedBranch !== '' && $branch === $recommendedBranch) {
        $priority += 1000;
    }
    $priority += match ($reason) {
        'wrong' => 300,
        'skip' => 220,
        'hint' => 140,
        default => 80,
    };
    $priority += ((int) ($point['wrong_count'] ?? 0) * 10)
        + ((int) ($point['skip_count'] ?? 0) * 8)
        + ((int) ($point['hint_count'] ?? 0) * 6);

    $lost[] = [
        'item_id' => $item['id'],
        'learner_stream' => $learnerStream,
        'type' => $item['type'],
        'branch' => $branch,
        'topic' => $item['topic'],
        'prompt' => $item['source_text'],
        'target_text' => $item['target_text'],
        'hint' => $item['hint_beginner'] ?? '',
        'reason' => $reason,
        'wrong_count' => $point['wrong_count'] ?? 0,
        'hint_count' => $point['hint_count'] ?? 0,
        'skip_count' => $point['skip_count'] ?? 0,
        'focus_match' => $recommendedBranch !== '' && $branch === $recommendedBranch,
        'priority' => $priority,
    ];
}

usort($lost, static function (array $left, array $right): int {
    $priorityCompare = ((int) ($right['priority'] ?? 0)) <=> ((int) ($left['priority'] ?? 0));
    if ($priorityCompare !== 0) {
        return $priorityCompare;
    }

    $branchCompare = strcmp((string) ($left['branch'] ?? ''), (string) ($right['branch'] ?? ''));
    if ($branchCompare !== 0) {
        return $branchCompare;
    }

    return strcmp((string) ($left['prompt'] ?? ''), (string) ($right['prompt'] ?? ''));
});

json_response(200, [
    'ok' => true,
    'learner_stream' => $learnerStream,
    'recommended_level' => $progressSummary['recommended_level'],
    'recommended_branch' => $progressSummary['recommended_branch'],
    'recommended_watch' => $progressSummary['recommended_watch'],
    'next_step' => $progressSummary['next_step'],
    'lost_oars' => array_map(static function (array $item): array {
        unset($item['priority']);
        return $item;
    }, $lost),
]);
