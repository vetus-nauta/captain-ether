<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';
require __DIR__ . '/_learner-streams.php';

require_method('POST');
$user = current_user();
require_csrf($user);

$input = read_json_body();
$sessionId = preg_replace('/[^a-z0-9_]/i', '', (string) ($input['watch_id'] ?? ''));

$watchResult = storage_mutate('watch_sessions', watch_sessions_default(), function (array &$store) use ($sessionId, $user) {
    $watch = $store['sessions'][$sessionId] ?? null;
    if (!is_array($watch) || ($watch['user_id'] ?? '') !== $user['id']) {
        return ['error' => 'Watch not found', 'status' => 404];
    }

    $learnerStream = captain_watch_learner_stream($watch);
    if ($learnerStream === CAPTAIN_LEARNER_STREAM_ENGLISH_NATIVE && ($user['role'] ?? 'player') !== 'admin') {
        return ['error' => 'learner_stream_unavailable', 'status' => 403];
    }

    $clean = 0;
    $hint = 0;
    $spelling = 0;
    $lost = 0;
    $points = 0.0;
    foreach ($watch['questions'] ?? [] as $question) {
        $result = $question['result'] ?? null;
        if (!is_array($result)) continue;
        $points += (float) ($result['points'] ?? 0);
        if (in_array($result['reason'] ?? '', ['clean', 'spelling'], true)) $clean++;
        if (($result['reason'] ?? '') === 'hint') $hint++;
        if (($result['reason'] ?? '') === 'spelling') $spelling++;
        if (in_array($result['reason'] ?? '', ['wrong', 'skip'], true)) $lost++;
    }

    $watch['status'] = 'finished';
    $watch['finished_at'] = iso_time();
    $watch['summary'] = [
        'clean' => $clean,
        'hint' => $hint,
        'spelling' => $spelling,
        'lost' => $lost,
        'base_score' => $points,
    ];
    $store['sessions'][$sessionId] = $watch;

    return [
        'learner_stream' => $learnerStream,
        'summary' => $watch['summary'],
    ];
});

if (!empty($watchResult['error'])) {
    json_response((int) ($watchResult['status'] ?? 400), ['ok' => false, 'error' => $watchResult['error']]);
}

$learnerStream = (string) ($watchResult['learner_stream'] ?? CAPTAIN_LEARNER_STREAM_RU);
$summary = is_array($watchResult['summary'] ?? null) ? $watchResult['summary'] : [];
$unresolved = captain_stream_unresolved_count($user['id'], $learnerStream);
$progress = captain_stream_user_progress($user['id'], $learnerStream);
$multiplier = match ((int) ($progress['skip_cleanup_count'] ?? 0)) {
    1 => 0.8,
    2 => 0.6,
    default => 1.0,
};

captain_mutate_stream_progress($user['id'], $learnerStream, function (array &$progress) use ($summary, $sessionId, $learnerStream) {
    $progress['completed_watches'] = (int) ($progress['completed_watches'] ?? 0) + 1;
    $progress['history'][] = [
        'watch_id' => $sessionId,
        'learner_stream' => $learnerStream,
        'summary' => $summary,
        'finished_at' => iso_time(),
    ];
    $progress['history'] = array_slice($progress['history'], -20);
    $progress['updated_at'] = iso_time();
});

json_response(200, [
    'ok' => true,
    'summary' => $summary + [
        'learner_stream' => $learnerStream,
        'unresolved_lost_oars' => $unresolved,
        'reward_multiplier' => $multiplier,
        'final_score' => round(((float) $summary['base_score']) * $multiplier - ($unresolved * 0.1), 2),
    ],
]);
