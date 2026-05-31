# TASK-CE-0033 Atlas Weak-Points Live-Read QA

Date: 2026-05-31
Role: QA
Mode: report-only

## Result

PASS.

The Captain Ether legacy `weak_points` live-read cutover slice is accepted for
the current local scope.

This QA PASS does not approve deploy and does not approve a wider read cutover.

## Scope

Report-only output created:

- `content/captain-ether/roles/qa/reports/task-ce-0033-atlas-weak-points-live-read-qa-2026-05-31.md`

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
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/lost-oars.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/resolve-lost-oar.php
```

Result: PASS.

Baseline smoke:

- `PASS captain-ether-api-smoke checks=271`

Live-read smoke with Atlas enabled for legacy `weak_points`:

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

- legacy `weak_points` reads can route through Atlas without breaking smoke.

Actual:

- smoke remained PASS;
- Atlas `weak_points` smoke collection contained the mirrored legacy weak-point
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

- no Mongo/internal details leak into lost-oar or progress payloads.

Actual:

- response shapes stayed stable in smoke checks;
- no new private/backend fields were exposed.

### 5. Scope isolation

PASS.

Expected:

- only legacy `weak_points` read path changes.

Actual:

- no evidence of scope widening into `captain_ether_stream_weak_points`,
  watch-sessions, progress writes, or auth.

## Residual Note

Parity-mismatch fallback logic was not forced through a synthetic drift fixture
in this sprint. This is not a blocker for the current narrow slice.

## Implementation Readiness Decision

The legacy `weak_points` live-read slice is accepted.

Ready state reached only for:

- legacy `weak_points` live-read with JSON fallback

Not widened beyond that slice.
