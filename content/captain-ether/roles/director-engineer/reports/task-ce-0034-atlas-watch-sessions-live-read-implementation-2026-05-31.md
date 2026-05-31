# TASK-CE-0034 Atlas Watch-Sessions Live-Read Implementation

Date: 2026-05-31

## Result

PASS.

The next Captain Ether live-read cutover slice is implemented for legacy
`watch_sessions`.

This slice covers active watch-session reads inside the existing mutation flow
for:

- `start-watch.php`
- `submit-answer.php`
- `finish-watch.php`

JSON remains the canonical write source.

## Files Changed

- `private/bootstrap.php`
- `private/config.example.php`
- `public/api/captain-ether/start-watch.php`
- `public/api/captain-ether/submit-answer.php`
- `public/api/captain-ether/finish-watch.php`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0034-atlas-watch-sessions-live-read-implementation-2026-05-31.md`

## Scope Preserved

Not changed:

- primary writes still go to JSON
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

Added opt-in Atlas live-read support for legacy `watch_sessions`.

Behavior:

1. if live-read is disabled, watch-session reads stay on JSON;
2. if live-read is enabled, watch-session documents are read from Mongo;
3. if Mongo read fails, session flow falls back to JSON;
4. if Mongo data fails parity checks against JSON, session flow falls back to
   JSON;
5. fallback remains internal-only and does not change response shape.

The read cutover is intentionally narrow:

- no primary write-path changed;
- JSON writes still trigger the existing mirror path;
- no auth read changed.

## Live-Read Contract Implemented

New config flag in `private/config.example.php`:

- `atlas_live_read.watch_sessions_enabled`

Implementation details:

- `private/bootstrap.php` now provides:
  - guarded legacy `watch_sessions` store loader
  - Mongo document normalization for `watch_sessions`
  - store-level parity guard
  - dedicated `watch_sessions_mutate()` helper
- `start-watch.php`, `submit-answer.php`, and `finish-watch.php` now mutate
  watch state through the guarded helper.

## Parity Guard

This slice uses a strict parity guard before trusting Mongo `watch_sessions`
documents.

Parity checks compare Mongo vs JSON for:

- session count;
- session id set;
- per-session payload equality.

If parity fails, the runtime reads JSON instead and logs the issue internally.

## Privacy Boundary

No new response fields were added.

The runtime still must not expose:

- Mongo `_id`
- collection names
- URI details
- backend diagnostics
- internal fallback state

Mirror/internal fields are stripped before watch-session data is consumed.

## Localization Impact

`N/A`

No visible copy changes were introduced.

## Commands Run

Syntax:

```sh
$HOME/.local/php-codex/bin/php -l private/bootstrap.php
$HOME/.local/php-codex/bin/php -l private/config.example.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/submit-answer.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/finish-watch.php
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
CAPTAIN_ETHER_ATLAS_LIVE_READ_WATCH_SESSIONS_ENABLED=1
...
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`

Atlas verification after live-read smoke:

- `watch_sessions` count: `17`
- latest mirrored legacy watch-session document present for the smoke admin user

Forced live-read failure smoke with broken Mongo driver path:

```sh
CAPTAIN_ETHER_ATLAS_MIRROR_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_WATCH_SESSIONS_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_DRIVER_PATH='/tmp/does-not-exist-mongodb-driver'
...
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`
- `storage/atlas-live-read-error.log` captured internal read failures
- no player-facing failure surfaced

## Known Warnings

1. This watch-session slice still depends on JSON for parity validation and
   fallback, by design.
2. Live-read currently uses a Node child process and local Mongo driver path,
   not a native PHP Mongo client.
3. Parity-mismatch fallback logic was implemented but not separately forced by a
   synthetic drift fixture in this sprint.
4. `watch_sessions` is the most gameplay-sensitive live-read slice completed so
   far and should not be treated as deploy approval by itself.

## Next Expected Gate

QA review under:

```text
TASK-CE-0035
```
