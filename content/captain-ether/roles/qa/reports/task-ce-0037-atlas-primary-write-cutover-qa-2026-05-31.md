# TASK-CE-0037 Atlas Primary-Write Cutover QA

Date: 2026-05-31
Role: QA
Mode: report-only

## Result

PASS.

The guarded Atlas primary-write cutover for Captain Ether runtime storage is
accepted for the current local scope.

This QA PASS does not approve deploy and does not approve JSON fallback removal.

## Scope

Report-only output created:

- `content/captain-ether/roles/qa/reports/task-ce-0037-atlas-primary-write-cutover-qa-2026-05-31.md`

Preserved scope:

- runtime/API/UI/tool code not edited by QA;
- content JSON not edited;
- matcher not edited;
- auth/platform, router, registry, Watch Officer, Nav Desk not touched;
- no secrets or credentials pasted.

## Checks Used

Syntax checks reviewed:

```sh
$HOME/.local/php-codex/bin/php -l private/bootstrap.php
$HOME/.local/php-codex/bin/php -l private/config.example.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_answer-logging.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/submit-answer.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/finish-watch.php
```

Result: PASS.

Baseline smoke:

- `PASS captain-ether-api-smoke checks=271`

Primary-write smoke with Atlas enabled:

- `PASS captain-ether-api-smoke checks=271`

Forced primary-write failure smoke:

- `PASS captain-ether-api-smoke checks=271`

## PASS / FAIL By Block

### 1. Baseline behavior

PASS.

Expected:

- existing smoke remains green without primary-write enabled.

Actual:

- smoke remained PASS.

### 2. Primary-write enabled behavior

PASS.

Expected:

- runtime writes can route to Atlas first without breaking smoke.

Actual:

- smoke remained PASS;
- Atlas primary smoke database received runtime documents in:
  - `watch_sessions`
  - `progress`
  - `weak_points`
  - `answer_logs`

### 3. Forced primary-write failure fallback

PASS.

Expected:

- broken primary-write path falls back safely and does not break smoke.

Actual:

- smoke remained PASS;
- internal read and primary-write error logs captured backend failure paths;
- no player-facing failure surfaced in smoke.

### 4. Privacy

PASS.

Expected:

- no Mongo/internal details leak into gameplay or admin payloads.

Actual:

- response shapes stayed stable in smoke checks;
- no new private/backend fields were exposed.

### 5. Scope isolation

PASS.

Expected:

- cutover stays limited to Captain Ether runtime storage.

Actual:

- no evidence of scope widening into auth/platform, router, registry,
  Watch Officer, or non-Captain Ether runtime.

## Residual Note

This sprint still depends on JSON shadow copy for parity and rollback. That is
not a blocker for the current guarded cutover.

## Implementation Readiness Decision

The guarded Atlas primary-write cutover is accepted.

Ready state reached only for:

- Atlas-first runtime writes with JSON shadow/fallback

Not widened beyond that scope.
