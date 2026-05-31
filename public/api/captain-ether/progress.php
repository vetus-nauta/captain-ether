<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';
require __DIR__ . '/_learner-streams.php';

require_method('GET');
$user = current_user();
$learnerStream = captain_learner_stream_from_query();
captain_require_learner_stream_access($user, $learnerStream);
$progress = captain_stream_user_progress($user['id'], $learnerStream);
$unresolvedWeakPoints = captain_stream_unresolved_weak_points($user['id'], $learnerStream);
$itemsById = captain_stream_items_by_id($learnerStream);

json_response(200, [
    'ok' => true,
    'progress' => captain_progress_summary($progress + ['learner_stream' => $learnerStream], $unresolvedWeakPoints, $itemsById),
]);
