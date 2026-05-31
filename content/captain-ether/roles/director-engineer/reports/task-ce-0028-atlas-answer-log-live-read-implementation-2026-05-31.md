# TASK-CE-0028 Atlas Answer-Log Live-Read Implementation

Date: 2026-05-31

## Result

PASS.

The first Captain Ether live-read cutover slice is implemented for:

- `public/api/captain-ether/answer-log.php`

Only the admin answer-log endpoint is affected.

## Files Changed

- `private/bootstrap.php`
- `private/config.example.php`
- `public/api/captain-ether/_answer-logging.php`
- `public/api/captain-ether/answer-log.php`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0028-atlas-answer-log-live-read-implementation-2026-05-31.md`

## Scope Preserved

Not changed:

- gameplay runtime endpoints other than admin answer-log read path
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

Added opt-in Atlas live-read support for the admin answer-log endpoint.

Behavior:

1. if live-read is disabled, endpoint stays on JSON;
2. if live-read is enabled, answer-log documents are read from Mongo;
3. if Mongo read fails, endpoint falls back to JSON;
4. if Mongo data fails parity checks against JSON, endpoint falls back to JSON;
5. fallback remains internal-only and does not change response shape.

The live-read slice is intentionally narrow:

- no gameplay loop reads changed;
- no auth read changed;
- no player-facing route changed.

## Live-Read Contract Implemented

New config section in `private/config.example.php`:

- `atlas_live_read.enabled`
- `atlas_live_read.answer_logs_enabled`
- URI / driver / database / timeout / error log fields

Implementation details:

- `private/bootstrap.php` now provides generic Atlas live-read helpers;
- `public/api/captain-ether/_answer-logging.php` now provides:
  - filtered entry helper
  - guarded answer-log store loader
  - Mongo entry normalization
  - parity guard
- `public/api/captain-ether/answer-log.php` now reads through the guarded
  store helper.

## Parity Guard

The first live-read slice uses a strict parity guard before trusting Mongo
answer-log entries.

Parity checks compare Mongo vs JSON for:

- entry count;
- entry id sequence;
- summary aggregate parity.

If parity fails, the endpoint serves JSON instead and logs the issue
internally.

## Privacy Boundary

No new response fields were added.

The endpoint still must not expose:

- Mongo `_id`
- collection names
- URI details
- backend diagnostics
- internal fallback state

Mirror/internal fields are stripped before response assembly.

## Localization Impact

`N/A`

No visible copy changes were introduced.

## Commands Run

Syntax:

```sh
$HOME/.local/php-codex/bin/php -l private/bootstrap.php
$HOME/.local/php-codex/bin/php -l private/config.example.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/_answer-logging.php
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/answer-log.php
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
CAPTAIN_ETHER_ATLAS_LIVE_READ_ANSWER_LOGS_ENABLED=1
...
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`

Atlas verification after live-read smoke:

- `answer_logs` count: `3`
- latest mirrored documents present for both `ru_source` and
  `english_native`

Forced live-read failure smoke with broken Mongo driver path:

```sh
CAPTAIN_ETHER_ATLAS_MIRROR_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_ANSWER_LOGS_ENABLED=1
CAPTAIN_ETHER_ATLAS_LIVE_READ_DRIVER_PATH='/tmp/does-not-exist-mongodb-driver'
...
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`
- `storage/atlas-live-read-error.log` captured internal read failures
- no player-facing failure surfaced

## Known Warnings

1. This first live-read slice still depends on JSON for parity validation and
   fallback, by design.
2. Live-read currently uses a Node child process and local Mongo driver path,
   not a native PHP Mongo client.
3. Parity-mismatch fallback logic was implemented but not separately forced by a
   synthetic drift fixture in this sprint.

## Next Expected Gate

QA review under:

```text
TASK-CE-0029
```
