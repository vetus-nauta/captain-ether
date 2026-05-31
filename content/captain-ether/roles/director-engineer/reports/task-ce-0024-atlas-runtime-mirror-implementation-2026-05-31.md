# TASK-CE-0024 Atlas Runtime Mirror Implementation

Date: 2026-05-31

## Result

PASS.

Captain Ether Atlas runtime mirror Slice A is implemented with JSON storage
preserved as the live canonical source.

No live Mongo reads were added to the player runtime flow.

## Files Changed

- `private/bootstrap.php`
- `private/config.example.php`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0024-atlas-runtime-mirror-implementation-2026-05-31.md`

## Scope Preserved

Not changed:

- `public/api/auth/`
- `public/api/games/`
- `public/api/admin/`
- `public/assets/`
- `content/captain-ether/starter.json`
- `content/captain-ether/batches/`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/game-registry.json`
- `docs/game-director/`
- `private/config.php`

No router, registry, Nav Desk, Watch Officer, auth/platform behavior,
production config, deploy/FTP state, `.netrc`, SMTP, cookies, login codes,
sessions, player email, player identity, API keys, tokens, passwords, or other
secrets were changed or written into repository files.

## Implementation Summary

Slice A was implemented inside the shared storage mutation path so the runtime
endpoints kept their current request/response contracts.

Implemented behavior:

1. JSON storage remains the canonical read/write source for Captain Ether
   runtime behavior.
2. After a successful JSON mutation, a mirror sync is attempted only for these
   stores:
   - `watch_sessions`
   - `progress`
   - `weak_points`
   - `captain_answer_logs`
3. Mirror sync replaces the matching Mongo collection contents with the current
   canonical JSON state for that store.
4. The runtime uses no Mongo reads in player flow.
5. Auth collections remain out of scope and are not mirrored:
   - `users`
   - `sessions`
   - `login_codes`
6. Mirror failures are contained and logged internally instead of surfacing to
   the player.

## Mirror Storage Contract

Atlas mirror config is now described in `private/config.example.php` through
environment-driven fields:

- `CAPTAIN_ETHER_ATLAS_MIRROR_ENABLED`
- `CAPTAIN_ETHER_ATLAS_MIRROR_URI`
- `CAPTAIN_ETHER_ATLAS_MIRROR_NODE_BIN`
- `CAPTAIN_ETHER_ATLAS_MIRROR_DRIVER_PATH`
- `CAPTAIN_ETHER_ATLAS_MIRROR_DATABASE`
- `CAPTAIN_ETHER_ATLAS_MIRROR_TIMEOUT_MS`
- `CAPTAIN_ETHER_ATLAS_MIRROR_ERROR_LOG`

Internal mirror log target:

```text
storage/atlas-mirror-error.log
```

Mirrored collections:

- `captain_ether.watch_sessions`
- `captain_ether.progress`
- `captain_ether.weak_points`
- `captain_ether.answer_logs`

Each mirrored document now carries internal-only:

- `mirrored_at`

This is for verification and does not appear in player-facing payloads.

## Failure Handling

If Atlas mirror config is disabled, incomplete, or the child mirror process
fails:

- JSON-backed Captain Ether behavior still succeeds;
- the player receives the existing runtime response, unchanged;
- the failure is recorded only in the internal mirror log path.

This preserves the rollback rule for Slice A:

- disable mirror;
- keep JSON runtime alive;
- no live gameplay cutover needed.

## Privacy Boundary Confirmation

No player-facing payload now exposes:

- Mongo `_id`
- collection names
- URI details
- backend diagnostics
- mirror process output
- storage backend error internals

No new player-facing copy was introduced.

## Localization Impact

`N/A`

Reason:

- no new visible player copy;
- no UI or locale logic changes;
- no new player-facing API error strings.

## Commands Run

Syntax checks:

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

Atlas smoke verification summary after the isolated mirror run:

- `watch_sessions`: `17`
- `progress`: `1`
- `weak_points`: `1`
- `answer_logs`: `3`

All four target collections received mirrored documents with `mirrored_at`
timestamps.

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
- internal mirror log file created at `storage/atlas-mirror-error.log`
- no player-facing storage error surfaced during the smoke run

## Known Warnings

1. Slice A mirror is synchronous and increases local smoke duration compared to
   pure JSON runtime.
2. The current mirror implementation uses a Node child process plus the local
   MongoDB driver path instead of a native PHP Mongo driver. This is acceptable
   for Slice A mirror mode but should be revisited before any broader runtime
   cutover.
3. Mirror failure logging is intentionally internal, but repeated mirror
   failures can generate a noisy log file because each affected runtime write
   records its own failure entry.
4. Validation and smoke were confirmed against an isolated Atlas smoke database
   to avoid touching the working Captain Ether baseline.

## Next Expected Gate

QA review under:

```text
TASK-CE-0025
```
