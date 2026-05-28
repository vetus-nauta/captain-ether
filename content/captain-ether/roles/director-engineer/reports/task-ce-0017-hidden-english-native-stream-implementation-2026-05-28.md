# TASK-CE-0017 Hidden English-Native Stream Implementation

Date: 2026-05-28
Role: Director-Engineer / Director Ether
Mode: implementation

## Result

PASS FOR QA.

Implemented hidden/admin-only English-native stream support for local Beta 1.1
readiness. No public selector, production deploy, router/registry change,
auth/platform change, Watch Officer/Nav Desk work, or Batch 006 merge was
performed.

## Files Changed

- `public/api/captain-ether/_learner-streams.php`
- `public/api/captain-ether/start-watch.php`
- `public/api/captain-ether/submit-answer.php`
- `public/api/captain-ether/finish-watch.php`
- `public/api/captain-ether/progress.php`
- `public/api/captain-ether/lost-oars.php`
- `public/api/captain-ether/resolve-lost-oar.php`
- `public/api/captain-ether/skip-cleanup.php`
- `public/api/captain-ether/answer-log.php`
- `public/api/captain-ether/_answer-logging.php`
- `content/captain-ether/tools/smoke-start-watch-api.php`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md`

Existing sprint-prep files from the Director decision remain part of this work
set:

- `content/captain-ether/roles/director-engineer/reports/director-analysis-next-summit-2026-05-28.md`
- `content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-2026-05-28.md`
- `content/captain-ether/roles/director-engineer/tasks/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md`
- `content/captain-ether/roles/qa/tasks/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md`

## Implementation Summary

Added stream helper:

```text
public/api/captain-ether/_learner-streams.php
```

Canonical streams:

- `ru_source`
- `english_native`

Implemented behavior:

- Missing `learner_stream` defaults to `ru_source` for player endpoints.
- `answer-log.php` omitted `learner_stream` defaults to admin-only `all`.
- `english_native` start is admin-only.
- Non-admin `english_native` start returns `403 learner_stream_unavailable`
  with no storage mutation.
- Invalid stream returns `400 invalid_learner_stream` with no storage mutation.
- English-native content loads from
  `content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json`.
- Batch 006 remains separate from `starter.json`.
- `EN-B006-REV-*` items are excluded from first-pilot selection.
- Watch sessions store `learner_stream`.
- `submit-answer.php` and `finish-watch.php` use the stored watch stream, not
  client input.
- `resolve-lost-oar.php` and `answer-log.php` now accept hyphenated Batch 006
  item IDs.
- Answer-log entries and review groups include `learner_stream`.
- Answer-log review group key is stream plus item id.

## Storage Model

Legacy `ru_source` preserves existing storage:

- `progress`
- `weak_points`

English-native stream uses separate storage:

- `captain_ether_stream_progress`
- `captain_ether_stream_weak_points`

Shared storage still used:

- `watch_sessions`, now with `learner_stream` per watch.
- `captain_answer_logs`, now with `learner_stream` per logged event.

## Privacy Decisions

Preserved:

- No `accepted_answers` or `qa_notes` in player-facing payloads.
- No raw user id, email, token, CSRF, cookie, session id, login code, private
  config, SMTP data, or secrets in player/API payloads.
- `player_hash` remains allowed only in admin answer-log payloads.
- Player-facing payloads must not expose `player_hash`.

## Localization Impact

No visible UI copy changed.

`public/assets/app.js` was not changed. UI locale still sends only the selected
watch level and does not infer `english_native` from `locale === "en"` or
unsupported-locale English fallback.

English-native stream is accessible only through explicit internal/admin API
payload in this implementation.

## Verification

PHP syntax:

```text
No syntax errors detected in public/api/captain-ether/start-watch.php
No syntax errors detected in public/api/captain-ether/submit-answer.php
No syntax errors detected in public/api/captain-ether/finish-watch.php
No syntax errors detected in public/api/captain-ether/progress.php
No syntax errors detected in public/api/captain-ether/lost-oars.php
No syntax errors detected in public/api/captain-ether/resolve-lost-oar.php
No syntax errors detected in public/api/captain-ether/skip-cleanup.php
No syntax errors detected in public/api/captain-ether/answer-log.php
No syntax errors detected in public/api/captain-ether/_answer-logging.php
No syntax errors detected in public/api/captain-ether/_learner-streams.php
No syntax errors detected in content/captain-ether/tools/smoke-start-watch-api.php
```

Validator:

```text
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
PASS
```

Validator summary:

- starter items: `255`;
- regression QA items: `255`;
- Batch 006 items: `35`;
- Batch 006 status: `draft_internal`;
- Batch 006 should-accept rows: `105`;
- Batch 006 should-reject rows: `167`.

Known non-blocking validator warnings remain:

```text
WARN (9) duplicate accepted_answers after normalization
```

API smoke:

```text
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
PASS captain-ether-api-smoke checks=271
```

PWA static checks:

```text
node --check public/assets/app.js
node content/captain-ether/tools/check-pwa-i18n.mjs
PWA i18n ok: 7 locales, 143 UI keys, 3 games, 15 detection cases.
```

## Smoke Coverage Added

The local API smoke now covers:

- admin and non-admin test sessions;
- invalid stream no-mutation path;
- non-admin English-native `403` no-mutation path;
- admin English-native beginner and advanced watch starts;
- Batch 006-only English-native item selection;
- Batch 006 absence from `starter.json`;
- `EN-B006-REV-*` exclusion;
- source prompt as answer remains wrong;
- dangerous natural-English reject remains wrong;
- client-supplied stream cannot override stored watch stream on submit/finish;
- English-native Lost Oars stay out of legacy RU-source Lost Oars;
- English-native progress is stream-scoped;
- answer-log omitted stream is `all`;
- answer-log English-native filter returns only English-native entries/groups;
- `player_hash` is present only in admin answer-log checks;
- storage backup/restore includes new stream storage files.

## Scope Preserved

Not changed:

- `content/captain-ether/starter.json`
- `content/captain-ether/batches/`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `public/api/captain-ether/_answer-matching.php`
- `public/assets/app.js`
- router/registry
- auth/platform
- Watch Officer
- Nav Desk
- production config
- deploy/FTP state
- private config
- secrets

## Next QA Gate

Activate QA on:

```text
content/captain-ether/roles/qa/tasks/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md
```

Expected short reply after QA:

```text
TASK-CE-0018 done
```

