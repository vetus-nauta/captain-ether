# Director-Engineer Task: TASK-CE-0017 Hidden English-Native Stream Implementation

Date: 2026-05-28

## Role

Director-Engineer / Director Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Mandatory First Read

Before implementation, read:

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-next-summit-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/english-native-hidden-stream-integration-contract-2026-05-27.md
content/captain-ether/roles/qa/reports/english-native-hidden-stream-integration-contract-qa-review-2026-05-27.md
content/captain-ether/roles/director-engineer/reports/batch-006-english-native-seaspeak-pilot-accepted-2026-05-27.md
content/captain-ether/roles/localization-architect/reports/english-native-stream-localization-policy-2026-05-27.md
content/captain-ether/roles/ux-hud-designer/reports/english-native-stream-selector-ux-policy-2026-05-27.md
content/captain-ether/roles/gamification-designer/reports/english-native-batch-006-progression-policy-2026-05-27.md
```

Use these as implementation inputs:

```text
content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/progress.php
public/api/captain-ether/lost-oars.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/answer-log.php
public/api/captain-ether/_answer-logging.php
content/captain-ether/tools/smoke-start-watch-api.php
content/captain-ether/tools/validate-captain-ether.php
```

## Functional Duty

Implement the hidden/admin-only English-native stream for local Beta 1.1
readiness.

Director-Engineer owns runtime/API/tool integration and must preserve the
existing public RU-source flow.

## Mode

Implementation with narrow file edits.

## Allowed Files

You may create or update only:

```text
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/progress.php
public/api/captain-ether/lost-oars.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/answer-log.php
public/api/captain-ether/_answer-logging.php
public/api/captain-ether/_learner-streams.php
content/captain-ether/tools/smoke-start-watch-api.php
content/captain-ether/tools/validate-captain-ether.php
public/assets/app.js
content/captain-ether/roles/director-engineer/reports/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md
```

`public/assets/app.js` is allowed only for hidden/admin query flag plumbing.
Do not add a visible public selector in this task.

## Forbidden Files

Do not edit:

```text
content/captain-ether/starter.json
content/captain-ether/batches/
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/accepted-answer-dictionary.md
content/captain-ether/answer-policy.md
public/api/captain-ether/_answer-matching.php
content/game-registry.json
docs/game-director/
public/api/auth/
public/api/games/
private/config.php
private/config.example.php
```

Do not touch router, registry, Nav Desk, Watch Officer, auth/platform, production
config, deploy/FTP state, `.netrc`, SMTP, cookies, login codes, player email,
raw player identity, API keys, tokens, passwords, or other secrets.

## Exact Task

Implement the Director-approved hidden stream contract.

Required behavior:

1. Add canonical streams:
   - `ru_source`
   - `english_native`
2. Default missing `learner_stream` to `ru_source` everywhere except admin
   `answer-log.php`, where omitted stream means `all`.
3. `start-watch.php` accepts explicit `learner_stream`.
4. `english_native` start is admin-only and returns
   `403 learner_stream_unavailable` for non-admin users with no storage
   mutation.
5. Invalid stream returns `400 invalid_learner_stream` with no storage mutation.
6. `english_native` loads items only from
   `content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json`.
7. Do not merge Batch 006 into `starter.json`.
8. Watch sessions store `learner_stream`.
9. `submit-answer.php` and `finish-watch.php` derive stream from stored
   `watch_id`; client input must not switch stream after watch creation.
10. English-native item lookup uses Batch 006, not `starter.json`.
11. RU-source item lookup keeps current `starter.json` behavior.
12. Progress and Lost Oars stay legacy-compatible for `ru_source`.
13. English-native progress and weak points are stored separately.
14. `progress.php?learner_stream=english_native` reports only English-native
   state.
15. `lost-oars.php?learner_stream=english_native` lists only English-native
   unresolved items.
16. `resolve-lost-oar.php` resolves only the requested stream, defaulting to
   `ru_source`.
17. `skip-cleanup.php` acts on the requested stream, defaulting to `ru_source`.
18. Answer-log entries include `learner_stream`.
19. Answer-log review groups use `learner_stream + item_id`.
20. `answer-log.php` omitted stream returns all streams for admin and marks
   `filters.learner_stream = "all"`.
21. `player_hash` remains allowed only in admin answer-log payloads.
22. Player-facing payloads must not expose `player_hash`, `accepted_answers`,
   `qa_notes`, branch/module internals, raw user id, email, token, CSRF, cookie,
   session id, login code, private config, or secrets.
23. `locale === "en"` and unsupported UI fallback must not select
   `english_native`.

## Required Output

Create:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md
```

The report must include:

- task result: PASS, FAIL, or NEEDS DIRECTOR DECISION;
- files changed;
- implementation summary;
- storage names used;
- privacy decisions;
- localization impact;
- exact commands run and results;
- known warnings;
- next QA gate.

## Required Checks

Run at minimum:

```sh
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/submit-answer.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/finish-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/progress.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/lost-oars.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/resolve-lost-oar.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/skip-cleanup.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/answer-log.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_answer-logging.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_learner-streams.php
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

If `public/assets/app.js` changes:

```sh
node --check public/assets/app.js
node content/captain-ether/tools/check-pwa-i18n.mjs
```

## Required Short Reply

After writing the implementation report, return:

```text
TASK-CE-0017 done
```

or:

```text
TASK-CE-0017 blocked
```

with the report path.

## Next Expected Gate

QA executes:

```text
content/captain-ether/roles/qa/tasks/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md
```

