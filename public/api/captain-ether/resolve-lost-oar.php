<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';
require __DIR__ . '/_learner-streams.php';
require __DIR__ . '/_answer-matching.php';
require __DIR__ . '/_answer-logging.php';

require_method('POST');
$user = current_user();
require_csrf($user);

$input = read_json_body();
$itemId = preg_replace('/[^a-z0-9_-]/i', '', (string) ($input['item_id'] ?? ''));
$answer = trim((string) ($input['answer'] ?? ''));
$learnerStream = captain_learner_stream_from_input($input);
captain_require_learner_stream_access($user, $learnerStream);
$items = captain_stream_items_by_id($learnerStream);
$item = $items[$itemId] ?? null;

if (!is_array($item)) {
    json_response(404, ['ok' => false, 'error' => 'Lost oar not found']);
}

$match = captain_match_answer($answer, $item);
$correct = (bool) $match['correct'];
$reason = $correct ? ((string) $match['match_type'] === 'spelling' ? 'spelling' : 'clean') : 'wrong';

if ($correct) {
    captain_resolve_stream_weak_point($user['id'], $learnerStream, $itemId);
    if (captain_stream_unresolved_count($user['id'], $learnerStream) === 0) {
        captain_mutate_stream_progress($user['id'], $learnerStream, function (array &$progress) {
            $progress['skip_cleanup_count'] = 0;
            $progress['updated_at'] = iso_time();
        });
    }
}

captain_log_answer_event([
    'source' => 'lost_oar',
    'user' => $user,
    'learner_stream' => $learnerStream,
    'item' => $item,
    'answer' => $answer,
    'correct' => $correct,
    'reason' => $reason,
    'match_type' => $match['match_type'],
    'used_hint' => false,
    'skipped' => false,
]);

json_response(200, [
    'ok' => true,
    'learner_stream' => $learnerStream,
    'correct' => $correct,
    'match_type' => $match['match_type'],
    'message' => $correct ? ($match['match_type'] === 'spelling' ? 'Засчитано. Только проверь написание ниже.' : maritime_message('hangar')) : maritime_message('weak'),
    'target_text' => $item['target_text'],
    'remaining' => captain_stream_unresolved_count($user['id'], $learnerStream),
]);
