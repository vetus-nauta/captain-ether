# CE-SPRINT-0149 Starter Duplicate Accepted Answers Cleanup

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether starter hardening only
Status: PASS / READY_FOR_PRODUCTION_SYNC

## Cleanup

Removed `9` redundant accepted-answer entries from `starter.json` where the
product PHP `normalize_answer` produced an identical key.

Removed duplicates:

```text
phrase_pan_pan_001: pan-pan pan-pan pan-pan
phrase_core_radio_check_over_001: radio check, over
phrase_core_correction_channel_one_three_001: correction, channel one three
phrase_core_question_underway_001: question, are you underway
phrase_core_answer_affirmative_001: answer, affirmative
phrase_core_answer_negative_001: answer, negative
expr_urgency_panpan_001: Pan Pan
phrase_urgency_panpan_three_times_001: Pan Pan Pan Pan Pan Pan
phrase_urgency_read_back_details_001: Read back Pan Pan details
```

`securite` / `sécurité` variants were not removed because the PHP matcher does
not normalize those as duplicates.

## Checks

```text
Full validator: PASS, runs=80
Known starter WARN count: 0
PHP-normalized duplicate accepted_answers: 0
API smoke: PASS captain-ether-api-smoke checks=334
```

## Production Boundary

Production was not changed in this cleanup sprint. Open a separate sync task if
this hardening change should be pushed to production.

## Scope Preserved

No matcher/runtime, API, UI, Atlas, auth, router, registry, Watch Officer, Nav
Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
