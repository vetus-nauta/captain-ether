# TASK-CE-0025 Atlas Runtime Mirror QA

Date: 2026-05-31
Role: QA
Mode: report-only

## Result

PASS.

The Captain Ether Atlas runtime mirror Slice A implementation is accepted for
the current scope.

This QA PASS confirms local behavioral stability and privacy safety for mirror
mode only. It does not approve production deploy and does not approve live
Mongo read cutover.

## Scope

Report-only output created:

- `content/captain-ether/roles/qa/reports/task-ce-0025-atlas-runtime-mirror-qa-2026-05-31.md`

Preserved scope:

- runtime/API/UI/tool code not edited by QA;
- content JSON not edited;
- matcher not edited;
- router, registry, auth/platform, Watch Officer, Nav Desk not touched;
- private config, secrets, sessions, cookies, CSRF, login codes, player email,
  player identity, and Atlas credentials not pasted into the report.

## Sources Reviewed

- `content/captain-ether/role-command-protocol.md`
- `content/captain-ether/captain-ether-handoff-2026-05-26.md`
- `content/captain-ether/roles/README.md`
- `content/captain-ether/roles/office-manifest.md`
- `content/captain-ether/roles/qa/rules.md`
- `content/captain-ether/roles/qa/handoff.md`
- `content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md`
- `content/captain-ether/roles/validation-steward/reports/task-ce-0023-atlas-runtime-mirror-validation-gate-2026-05-31.md`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0024-atlas-runtime-mirror-implementation-2026-05-31.md`

## Commands / Checks Used

Syntax checks reviewed from implementation gate:

```sh
$HOME/.local/php-codex/bin/php -l private/bootstrap.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/submit-answer.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/finish-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/resolve-lost-oar.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/skip-cleanup.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_answer-logging.php
```

Result: PASS.

Local JSON baseline smoke:

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`

Isolated Atlas mirror smoke:

```sh
CAPTAIN_ETHER_ATLAS_MIRROR_ENABLED=1 \
CAPTAIN_ETHER_ATLAS_MIRROR_URI='<redacted>' \
CAPTAIN_ETHER_ATLAS_MIRROR_DRIVER_PATH='/tmp/mongo-atlas-setup/node_modules/mongodb' \
CAPTAIN_ETHER_ATLAS_MIRROR_DATABASE='captain_ether_smoke' \
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php \
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`

Atlas smoke verification summary reproduced:

- `watch_sessions`: `17`
- `progress`: `1`
- `weak_points`: `1`
- `answer_logs`: `3`

Forced mirror-failure smoke:

```sh
CAPTAIN_ETHER_ATLAS_MIRROR_ENABLED=1 \
CAPTAIN_ETHER_ATLAS_MIRROR_URI='<redacted>' \
CAPTAIN_ETHER_ATLAS_MIRROR_DRIVER_PATH='/tmp/does-not-exist-mongodb-driver' \
CAPTAIN_ETHER_ATLAS_MIRROR_DATABASE='captain_ether_smoke' \
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php \
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`
- internal mirror error log produced
- no player-facing failure observed

## PASS / FAIL By Block

### 1. JSON-backed gameplay path

PASS.

Observed behavior:

- local watch start still works;
- answer submission path still works;
- finish-watch path still works;
- weak-point mutation path still works inside the smoke flow.

Expected:

- JSON canonical runtime remains alive.

Actual:

- smoke stayed green in baseline, mirror-enabled, and forced-failure runs.

### 2. No new player-facing storage error

PASS.

Expected:

- mirror/storage internals stay invisible to the player.

Actual:

- no player-facing storage error surfaced in the mirror-enabled run;
- forced mirror failure still produced a passing smoke result.

### 3. Payload privacy

PASS.

Expected:

- no Mongo `_id`, collection names, URI fragments, or backend diagnostics in
  player payloads.

Actual:

- source review shows mirror fields stay internal to Mongo docs only;
- QA saw no evidence of player-facing mirror/backend fields in smoke outputs.

### 4. Localization

PASS.

Expected:

- no player-visible copy change for Slice A.

Actual:

- no new player-facing copy was introduced;
- localization impact remains `N/A`.

### 5. Atlas mirror verification reproducibility

PASS.

Expected:

- validation gate from `TASK-CE-0023` should be reproducible.

Actual:

- isolated Atlas smoke database received mirrored documents in all four target
  runtime collections.

### 6. Mirror failure resilience

PASS.

Expected:

- broken mirror path must not break the JSON gameplay path.

Actual:

- intentionally broken driver path still produced
  `PASS captain-ether-api-smoke checks=271`;
- mirror failures were routed into an internal log file instead of the player
  response path.

### 7. Auth/session/login-code scope control

PASS.

Expected:

- Slice A must not widen auth behavior.

Actual:

- implementation hooks only the runtime stores:
  - `watch_sessions`
  - `progress`
  - `weak_points`
  - `captain_answer_logs`
- no auth collection mirror path was added.

## Privacy Findings

No blocker found.

Residual note:

- internal error logging can become noisy if mirror repeatedly fails, but this
  remained inside the internal log boundary and did not leak to the player.

## Reproduction Notes For Future Failure Triage

If QA later sees a regression, first separate it into:

- JSON canonical gameplay failure;
- Atlas mirror verification failure;
- internal observability/logging issue;
- privacy exposure.

Current owner route for any new failure in this slice:

- Director-Engineer

## Implementation Readiness Decision

Slice A is accepted for the current local scope and is ready for Director Ether
acceptance.

Future live-read cutover planning may proceed only as a separate explicit
director task.
