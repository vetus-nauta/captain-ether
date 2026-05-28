<?php
declare(strict_types=1);

require __DIR__ . '/../../../private/bootstrap.php';
require __DIR__ . '/_learner-streams.php';

require_method('POST');
$user = current_user();
require_csrf($user);

$input = read_json_body();
$learnerStream = captain_learner_stream_from_input($input);
captain_require_learner_stream_access($user, $learnerStream);

$unresolved = captain_stream_unresolved_count($user['id'], $learnerStream);
if ($unresolved === 0) {
    json_response(200, ['ok' => true, 'learner_stream' => $learnerStream, 'force_hangar' => false, 'message' => 'Пока вёсла на месте.', 'skip_count' => 0]);
}

$progress = captain_mutate_stream_progress($user['id'], $learnerStream, function (array &$progress) {
    $progress['skip_cleanup_count'] = min(3, (int) ($progress['skip_cleanup_count'] ?? 0) + 1);
    $progress['updated_at'] = iso_time();
    return $progress;
});

$count = (int) ($progress['skip_cleanup_count'] ?? 0);
$message = match ($count) {
    1 => 'Ладно, капитан. Пару вёсел оставили за бортом, но пока идём.',
    2 => 'Так-так. Вёсла уже не просто плавают, они начинают жить своей жизнью.',
    default => 'Всё, капитан. Дальше без вёсел не пустим. Пора в ангар.',
};

json_response(200, [
    'ok' => true,
    'learner_stream' => $learnerStream,
    'skip_count' => $count,
    'reward_multiplier' => $count === 1 ? 0.8 : ($count === 2 ? 0.6 : 0),
    'force_hangar' => $count >= 3,
    'message' => $message,
]);
