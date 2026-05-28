<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';
require __DIR__ . '/_learner-streams.php';

require_method('GET');
$user = current_user();
$learnerStream = captain_learner_stream_from_query();
captain_require_learner_stream_access($user, $learnerStream);

$items = captain_stream_items_by_id($learnerStream);
$lost = [];
foreach (captain_stream_unresolved_weak_points($user['id'], $learnerStream) as $point) {
    $item = $items[$point['item_id'] ?? ''] ?? null;
    if (!is_array($item)) continue;
    $lost[] = [
        'item_id' => $item['id'],
        'learner_stream' => $learnerStream,
        'type' => $item['type'],
        'topic' => $item['topic'],
        'prompt' => $item['source_text'],
        'target_text' => $item['target_text'],
        'hint' => $item['hint_beginner'] ?? '',
        'reason' => $point['reason'] ?? 'weak',
        'wrong_count' => $point['wrong_count'] ?? 0,
        'hint_count' => $point['hint_count'] ?? 0,
        'skip_count' => $point['skip_count'] ?? 0,
    ];
}

json_response(200, ['ok' => true, 'learner_stream' => $learnerStream, 'lost_oars' => $lost]);
