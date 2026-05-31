# TASK-CE-0032 Atlas Weak-Points Live-Read Implementation

Date: 2026-05-31

## Result

PASS.

The next Captain Ether live-read cutover slice is implemented for legacy
`weak_points`.

This slice covers read access routed through `unresolved_weak_points()` and
therefore affects the existing default-stream lost-oar surface without changing
JSON writes.

## Files Changed

- `private/bootstrap.php`
- `private/config.example.php`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0032-atlas-weak-points-live-read-implementation-2026-05-31.md`

## Scope Preserved

Not changed:

- primary writes still go to JSON
- `captain_ether_stream_weak_points` for `english_native`
- watch-session live-read
- content JSON
- matcher rules
- auth/platform
- router/registry
- Watch Officer
- Nav Desk
- production config
- deploy state
- private config

No secrets, Atlas credentials, sessions, cookies, CSRF values, login codes,
player email, or player identity were written to repository files.

## Implementation Summary

Added opt-in Atlas live-read support for legacy `weak_points`.

Behavior:

1. if live-read is disabled, reads stay on JSON;
2. if live-read is enabled, `weak_points` documents are read from Mongo;
3. if Mongo read fails, reads fall back to JSON;
4. if Mongo data fails parity checks against JSON, reads fall back to JSON;
5. fallback remains internal-only and does not change response shape.

The read cutover is intentionally narrow:

- no primary write-path changed;
- no stream weak-point live-read added for `english_native`;
- no auth read changed.

## Live-Read Contract Implemented

New config flag in `private/config.example.php`:

- `atlas_live_read.weak_points_enabled`

Implementation details:

- `private/bootstrap.php` now provides:
  - guarded legacy `weak_points` store loader
  - Mongo document normalization for `weak_points`
  - store-level parity guard
- `unresolved_weak_points()` now reads through the guarded `weak_points` store
  helper.

## Parity Guard

This slice uses a strict parity guard before trusting Mongo `weak_points`
documents.

Parity checks compare Mongo vs JSON for:

- user count;
- user id set;
- per-user item id set;
- per-item weak-point payload equality.

If parity fails, the runtime reads JSON instead and logs the issue internally.

## Privacy Boundary

No new response fields were added.

The runtime still must not expose:

- Mongo `_id`
- collection names
- URI details
- backend diagnostics
- internal fallback state

Mirror/internal fields are stripped before weak-point data is consumed.

## Localization Impact

`N/A`

No visible copy changes were introduced.

## Commands Run

Syntax:

```sh
$HOME/.local/php-codex/bin/php -l private/bootstrap.php
$HOME/.local/php-codex/bin/php -l private/config.example.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_learner-streams.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/lost-oars.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/resolve-lost-oar.php
```

Result: PASS.

Baseline smoke:

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`

Isolated live-read smoke with mirror + live-read enabled against
`captain_ether_smoke`:

```sh
CAPTAIN_ETHER_ATLAS_MIRROR_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_WEAK_POINTS_ENABLED=1
...
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`

Atlas verification after live-read smoke:

- `weak_points` count: `1`
- latest mirrored legacy weak-point document present for the smoke admin user

Forced live-read failure smoke with broken Mongo driver path:

```sh
CAPTAIN_ETHER_ATLAS_MIRROR_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_WEAK_POINTS_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_DRIVER_PATH='/tmp/does-not-exist-mongodb-driver'
...
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`
- `storage/atlas-live-read-error.log` captured internal read failures
- no player-facing failure surfaced

## Known Warnings

1. This weak-point slice still depends on JSON for parity validation and
   fallback, by design.
2. Live-read currently uses a Node child process and local Mongo driver path,
   not a native PHP Mongo client.
3. Parity-mismatch fallback logic was implemented but not separately forced by a
   synthetic drift fixture in this sprint.
4. `captain_ether_stream_weak_points` remains outside this slice.

## Next Expected Gate

QA review under:

```text
TASK-CE-0033
```
