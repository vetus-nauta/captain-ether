# Sprint Plan: CE-SPRINT-0017 Hidden English-Native Stream

Date: 2026-05-28
Owner: Director Ether / Captain Ether
Sprint type: local implementation plus QA gate

## Sprint Goal

Make the English-native Batch 006 pilot usable as a hidden/admin-only local
stream without disturbing the existing public RU-source Captain Ether flow.

## Summit

```text
CE-BETA-1.1-INT-EN-STREAM
```

The summit is an internal technical/product summit, not a public release.

## Entry Criteria

Accepted inputs:

- Batch 006 English-native draft accepted for hidden integration.
- Hidden stream integration contract written.
- QA contract review complete with two Director decisions now resolved.
- Branch-filter API smoke accepted as PASS.
- Current local validator PASS with known `WARN (9)`.

Director decisions for this sprint:

- `answer-log.php` omitted `learner_stream` means admin-only `all`.
- `player_hash` is allowed only in admin answer-log as a pseudonymous
  correlation field.

## Work Packages

| Task | Owner | Mode | Output |
| --- | --- | --- | --- |
| `TASK-CE-0017` | Director-Engineer | implementation | Hidden English-native stream runtime/API/tool patch and implementation report |
| `TASK-CE-0018` | QA | report-only | Local QA report accepting or blocking the hidden stream implementation |

## Implementation Scope

Allowed implementation scope for `TASK-CE-0017`:

- stream helper for `ru_source` and `english_native`;
- `start-watch.php` explicit stream selection and admin gate;
- watch session `learner_stream`;
- stream-aware item lookup for submit, finish, Lost Oars, and answer logs;
- separate progress and weak-point storage for English-native;
- admin answer-log filter and grouping by `learner_stream + item_id`;
- local smoke fixture expansion;
- validator batch check if needed;
- hidden admin query plumbing in `public/assets/app.js` only if required.

## Explicit Non-Goals

Do not do these in this sprint:

- public stream selector;
- production deploy;
- router or registry change;
- auth/platform change;
- `starter.json` merge for Batch 006;
- Batch 006 content edit;
- matcher expansion;
- Watch Officer;
- Nav Desk;
- production config;
- FTP/deploy state;
- private config, secrets, cookies, sessions, CSRF values, login codes,
  player email, or raw player identity exposure.

## QA Gate

`TASK-CE-0018` must verify at minimum:

- legacy mixed RU-source watch behavior;
- `mode=mixed` and focused branch behavior still passes existing smoke;
- invalid stream `400` with no mutation;
- non-admin English-native `403` with no mutation;
- admin English-native watch success;
- Batch 006-only selection for English-native;
- source prompt rejects remain wrong;
- dangerous natural-English rejects remain wrong;
- stream cannot be changed by `submit-answer` or `finish-watch` client input;
- progress, Lost Oars, resolve, skip cleanup, finish, and answer logs are
  stream-scoped;
- answer-log omitted stream returns admin `all`;
- `player_hash` appears only where allowed;
- player payloads expose no internal/private fields;
- storage backup/restore remains clean in the smoke tool.

## Required Commands

Implementation and QA should use the local PHP CLI:

```sh
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/submit-answer.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/finish-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/progress.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/lost-oars.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/resolve-lost-oar.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/answer-log.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_answer-logging.php
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

If `public/assets/app.js` changes:

```sh
node --check public/assets/app.js
node content/captain-ether/tools/check-pwa-i18n.mjs
```

## Acceptance Standard

Sprint can close only after:

- `TASK-CE-0017` implementation report exists;
- `TASK-CE-0018` QA report returns PASS;
- Git worktree contains only intended files;
- no production deploy occurred;
- no secrets or player identity data were written to reports.

## Follow-Up After Sprint

If this sprint passes, the next Director decision is one of:

- keep English-native internal and gather admin QA logs;
- prepare a public stream selector UX/API contract;
- assign Answer Log Analyst after enough English-native evidence exists.

