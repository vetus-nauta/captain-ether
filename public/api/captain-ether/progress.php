<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';
require __DIR__ . '/_learner-streams.php';

require_method('GET');
$user = current_user();
$learnerStream = captain_learner_stream_from_query();
captain_require_learner_stream_access($user, $learnerStream);
$progress = captain_stream_user_progress($user['id'], $learnerStream);

json_response(200, [
    'ok' => true,
    'progress' => [
        'learner_stream' => $learnerStream,
        'completed_watches' => $progress['completed_watches'] ?? 0,
        'last_level' => $progress['last_level'] ?? 'beginner',
        'skip_cleanup_count' => $progress['skip_cleanup_count'] ?? 0,
        'unresolved_lost_oars' => captain_stream_unresolved_count($user['id'], $learnerStream),
        'history' => $progress['history'] ?? [],
    ],
]);
