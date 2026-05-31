# TASK-CE-0031 Atlas Progress Live-Read QA

Date: 2026-05-31
Role: QA
Mode: report-only

## Result

PASS.

The Captain Ether legacy `progress` live-read cutover slice is accepted for the
current local scope.

This QA PASS does not approve deploy and does not approve a wider read cutover.

## Scope

Report-only output created:

- `content/captain-ether/roles/qa/reports/task-ce-0031-atlas-progress-live-read-qa-2026-05-31.md`

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
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_learner-streams.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/progress.php
```

Result: PASS.

Baseline smoke:

- `PASS captain-ether-api-smoke checks=271`

Live-read smoke with Atlas enabled for legacy `progress`:

- `PASS captain-ether-api-smoke checks=271`

Forced live-read failure smoke:

- `PASS captain-ether-api-smoke checks=271`

## PASS / FAIL By Block

### 1. Baseline behavior

PASS.

Expected:

- existing smoke remains green without live-read enabled.

Actual:

- smoke remained PASS.

### 2. Live-read enabled behavior

PASS.

Expected:

- legacy `progress` reads can route through Atlas without breaking smoke.

Actual:

- smoke remained PASS;
- Atlas `progress` smoke collection contained the mirrored legacy progress
  document for the smoke admin user.

### 3. Forced read failure fallback

PASS.

Expected:

- broken live-read path falls back to JSON and does not break smoke.

Actual:

- smoke remained PASS;
- internal live-read error log captured the backend failure;
- no player-facing failure surfaced in smoke.

### 4. Privacy

PASS.

Expected:

- no Mongo/internal details leak into progress payloads.

Actual:

- response shape stayed stable in smoke checks;
- no new private/backend fields were exposed.

### 5. Scope isolation

PASS.

Expected:

- only legacy `progress` read path changes.

Actual:

- no evidence of scope widening into `captain_ether_stream_progress`,
  weak-points, watch-sessions, or auth.

## Residual Note

Parity-mismatch fallback logic was not forced through a synthetic drift fixture
in this sprint. This is not a blocker for the current narrow slice.

## Implementation Readiness Decision

The legacy `progress` live-read slice is accepted.

Ready state reached only for:

- legacy `progress` live-read with JSON fallback

Not widened beyond that slice.
