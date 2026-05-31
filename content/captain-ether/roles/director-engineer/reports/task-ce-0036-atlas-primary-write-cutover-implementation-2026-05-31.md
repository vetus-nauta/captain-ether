# TASK-CE-0036 Atlas Primary-Write Cutover Implementation

Date: 2026-05-31

## Result

PASS.

Atlas primary-write mode is implemented for the Captain Ether runtime stores:

- `watch_sessions`
- `progress`
- `weak_points`
- `captain_answer_logs`

Mongo is now the first write target when the new mode is enabled. JSON remains
as the shadow/fallback copy in this sprint.

## Files Changed

- `private/bootstrap.php`
- `private/config.example.php`
- `public/api/captain-ether/_answer-logging.php`
- `public/api/captain-ether/start-watch.php`
- `public/api/captain-ether/submit-answer.php`
- `public/api/captain-ether/finish-watch.php`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0036-atlas-primary-write-cutover-implementation-2026-05-31.md`

## Scope Preserved

Not changed:

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

Added guarded Atlas primary-write support to the shared runtime storage layer.

Behavior:

1. when primary-write mode is disabled, runtime storage stays JSON-first;
2. when primary-write mode is enabled, Mongo becomes the first write target for
   the supported Captain Ether runtime stores;
3. JSON is still written as a shadow copy after successful Mongo writes;
4. if Mongo write fails, runtime falls back to JSON write path;
5. read-side continues to use the existing guarded Mongo parity checks and JSON
   fallback.

This cutover intentionally keeps JSON alive for the soak period.

## Primary-Write Contract Implemented

New config section in `private/config.example.php`:

- `atlas_primary_write.enabled`
- `atlas_primary_write.answer_logs_enabled`
- `atlas_primary_write.progress_enabled`
- `atlas_primary_write.weak_points_enabled`
- `atlas_primary_write.watch_sessions_enabled`
- `atlas_primary_write.json_shadow_enabled`
- URI / driver / database / timeout / error log fields

Implementation details:

- `private/bootstrap.php` now provides:
  - primary-write config helpers
  - store-level primary-write enablement
  - generic primary-write sync to Mongo
  - JSON shadow/fallback persistence path
  - mutation source selection that prefers guarded Mongo-backed store views
    when primary-write mode is enabled
- `watch_sessions_mutate()` now uses the shared primary-write persistence path
- `captain_answer_logs_store()` now treats primary-write mode as Mongo-backed
  read intent too

## Safety Boundary

The write cutover stays guarded:

- write failure falls back to JSON
- read drift falls back to JSON
- backend errors stay internal-only
- JSON shadow copy remains available for parity and rollback

## Localization Impact

`N/A`

No visible copy changes were introduced.

## Commands Run

Syntax:

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

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`

Primary-write smoke against `captain_ether_primary_smoke`:

```sh
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_ANSWER_LOGS_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_PROGRESS_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_WEAK_POINTS_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_WATCH_SESSIONS_ENABLED=1
...
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`

Atlas verification after primary-write smoke:

- `watch_sessions`: `17`
- `progress`: `1`
- `weak_points`: `1`
- `answer_logs`: `3`

Forced primary-write failure smoke with broken Mongo driver path:

```sh
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_ANSWER_LOGS_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_PROGRESS_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_WEAK_POINTS_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_WATCH_SESSIONS_ENABLED=1
CAPTAIN_ETHER_ATLAS_PRIMARY_WRITE_DRIVER_PATH='/tmp/does-not-exist-mongodb-driver'
...
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

- `PASS captain-ether-api-smoke checks=271`
- `storage/atlas-live-read-error.log` captured guarded read fallback activity
- `storage/atlas-primary-write-error.log` captured primary-write failures
- no player-facing failure surfaced

## Known Warnings

1. Primary-write currently replaces full target collections per write cycle
   through a Node child process, not a native PHP Mongo client.
2. JSON shadow copy is still required in this sprint for parity and rollback.
3. This sprint does not include production soak or JSON fallback freeze.

## Next Expected Gate

QA review under:

```text
TASK-CE-0037
```
