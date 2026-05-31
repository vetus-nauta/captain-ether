# TASK-CE-0023 Atlas Runtime Mirror Validation Gate

Date: 2026-05-31
Role: Validation Steward
Mode: report-only gate card

## Result

PASS.

The reproducible local validation gate for Captain Ether Atlas runtime mirror
Slice A is ready.

QA remains the independent acceptance owner. This card defines the command
gate, environment assumptions, Atlas-side verification steps, failure
classification, and PASS/BLOCKED criteria for the future implementation under
`TASK-CE-0024`.

## Scope

Allowed file created:

- `content/captain-ether/roles/validation-steward/reports/task-ce-0023-atlas-runtime-mirror-validation-gate-2026-05-31.md`

Preserved scope:

- runtime/API not changed;
- content JSON not changed;
- matcher not changed;
- UI/router/auth/platform not changed;
- Game Director docs not changed;
- production config, deploy/FTP state, secrets, private config, cookies,
  sessions, CSRF values, login codes, SMTP data, player email, player identity
  data, and Atlas credentials not touched or pasted.

## Source Documents

- `docs/game-director/mandatory-chat-operating-rules.md`
- `docs/game-director/chat-reporting-rules.md`
- `content/captain-ether/role-command-protocol.md`
- `content/captain-ether/captain-ether-handoff-2026-05-26.md`
- `content/captain-ether/roles/README.md`
- `content/captain-ether/roles/office-manifest.md`
- `content/captain-ether/roles/validation-steward/rules.md`
- `content/captain-ether/roles/validation-steward/handoff.md`
- `content/captain-ether/roles/director-engineer/reports/atlas-runtime-bootstrap-and-captain-ether-import-2026-05-31.md`
- `content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md`

## Environment Note

Working directory:

```text
/home/alexey/WebstormProjects/captain-ether
```

Current shell does not provide system `php`.

Use the user-local PHP CLI for all reproducible local checks:

```text
$HOME/.local/php-codex/bin/php
```

Confirmed runtime:

```text
PHP 8.5.6 (cli)
```

Atlas verification in this environment can use the already prepared local Node
driver path:

```text
/tmp/mongo-atlas-setup/node_modules/mongodb
```

## Current Captain Ether Write Surfaces In Scope

Slice A mirror validation must cover runtime writes triggered by:

- `public/api/captain-ether/start-watch.php`
- `public/api/captain-ether/submit-answer.php`
- `public/api/captain-ether/finish-watch.php`
- `public/api/captain-ether/resolve-lost-oar.php`
- `public/api/captain-ether/skip-cleanup.php`
- `public/api/captain-ether/_answer-logging.php`

Current JSON mutation targets behind these flows:

- `watch_sessions`
- `progress`
- `weak_points`
- `captain_answer_logs`

## Commands Run

```sh
$HOME/.local/php-codex/bin/php -v
```

Result: PASS. Local PHP CLI available.

```sh
$HOME/.local/php-codex/bin/php -l private/bootstrap.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/submit-answer.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/finish-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/resolve-lost-oar.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/skip-cleanup.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_answer-logging.php
```

Result: PASS. No syntax errors detected.

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result: PASS.

Summary:

- `PASS captain-ether-api-smoke checks=180`

This confirms the current JSON-backed Captain Ether runtime baseline is healthy
before Slice A implementation starts.

## Required Validation Commands For TASK-CE-0024

Minimum required local gate after implementation:

```sh
$HOME/.local/php-codex/bin/php -l private/bootstrap.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/submit-answer.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/finish-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/resolve-lost-oar.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/skip-cleanup.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_answer-logging.php
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Recommended additional read-only validator:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php
```

Expected result:

- validator final status remains `PASS`;
- existing duplicate-normalization warnings may remain if unchanged;
- no new validator failure may appear from Slice A.

## Required Static Contract Checks

After implementation, confirm by source review and smoke responses that:

- player-facing payloads do not expose Mongo `_id`;
- player-facing payloads do not expose collection names, URI fragments, stack
  traces, or storage backend diagnostics;
- auth/session/login-code endpoints were not widened into Slice A;
- no new player-facing message key or raw visible copy was added.

Owner route if failed:

- privacy exposure -> Director-Engineer;
- unexpected player-visible copy -> Director-Engineer with localization note;
- auth scope widening -> Director-Engineer.

## Atlas-Side Verification Steps

Atlas verification is required after the future implementation, not for this
report-only gate.

Use a read-only count comparison around a local smoke action.

### Step A: capture baseline counts

Check these collections:

- `captain_ether.watch_sessions`
- `captain_ether.progress`
- `captain_ether.weak_points`
- `captain_ether.answer_logs`

Recommended command pattern:

```sh
node <read-only-count-script>
```

using the local official driver at:

```text
/tmp/mongo-atlas-setup/node_modules/mongodb
```

### Step B: perform one local runtime action

Use the local smoke flow or a narrow fixture path that triggers:

- watch creation;
- at least one answer submission with weak-point effect;
- watch finish;
- one Lost Oars resolution or skip-cleanup effect.

### Step C: capture post-action counts and document delta

Expected Atlas-side invariants for a healthy mirror implementation:

- JSON-backed request still returns success;
- at least one affected Atlas collection count or updated document timestamp
  changes in line with the triggered action;
- no duplicate explosive growth appears from one single action;
- no auth collections are touched by Slice A:
  - `game_identity.users`
  - `game_identity.sessions`
  - `game_identity.login_codes`

## PASS Criteria For TASK-CE-0024

Validation gate can mark the implementation ready for QA only if all are true:

- all syntax checks pass;
- local Captain Ether smoke remains PASS;
- JSON-backed request flow remains operational;
- no player-facing payload privacy regression is observed;
- no new player-visible copy or localization drift is introduced;
- Atlas verification can confirm mirror-side writes for runtime collections in
  scope;
- auth collections remain untouched by Slice A behavior;
- Atlas mirror failure, if simulated or observed, does not break successful
  JSON-backed request handling.

## BLOCKED Criteria For TASK-CE-0024

Mark BLOCKED and route to Director-Engineer if any of these occur:

- local PHP CLI missing or cannot run;
- any syntax check fails;
- Captain Ether smoke fails;
- Atlas mirror behavior requires live Mongo reads in player flow;
- Atlas mirror failure breaks JSON canonical request success;
- player-facing payload exposes Mongo internals or backend diagnostics;
- implementation touches auth/session/login-code behavior;
- implementation introduces new player-visible copy;
- Atlas verification cannot distinguish whether runtime collections were
  mirrored at all.

## Failure Classification

Use these owner routes after implementation:

- environment blocker -> Validation Steward / Director Ether
- JSON canonical runtime regression -> Director-Engineer
- Atlas mirror regression -> Director-Engineer
- privacy regression -> Director-Engineer
- QA-only acceptance question -> QA

## Localization Gate

Expected localization impact for Slice A is:

```text
N/A
```

Reason:

- this slice should add no new player-facing messages;
- any new visible copy is a contract violation and should block acceptance.

## Next Expected Gate

Director-Engineer implementation under:

```text
TASK-CE-0024
```
