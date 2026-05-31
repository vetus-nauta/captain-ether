# Director-Engineer Task: TASK-CE-0024 Atlas Runtime Mirror Implementation

Date: 2026-05-31

## Role

Director-Engineer / Director Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after this report exists:

```text
content/captain-ether/roles/validation-steward/reports/task-ce-0023-atlas-runtime-mirror-validation-gate-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/atlas-runtime-bootstrap-and-captain-ether-import-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md
content/captain-ether/roles/validation-steward/reports/task-ce-0023-atlas-runtime-mirror-validation-gate-2026-05-31.md
```

Read implementation surfaces:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/_answer-logging.php
content/captain-ether/tools/smoke-start-watch-api.php
```

## Functional Duty

Implement Captain Ether Atlas runtime mirror Slice A.

This is not a live Mongo read cutover.

## Mode

Implementation with narrow file edits.

## Allowed Files

You may create or update only:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/_answer-logging.php
content/captain-ether/tools/smoke-start-watch-api.php
content/captain-ether/roles/director-engineer/reports/task-ce-0024-atlas-runtime-mirror-implementation-2026-05-31.md
```

## Forbidden Scope

Do not edit:

```text
public/api/auth/
public/api/games/
public/api/admin/
public/assets/
content/captain-ether/starter.json
content/captain-ether/batches/
content/captain-ether/accept-reject-qa-pairs.json
content/game-registry.json
docs/game-director/
private/config.php
```

Do not touch router, registry, Nav Desk, Watch Officer, auth/platform
behavior, production config, deploy/FTP state, `.netrc`, SMTP, cookies, login
codes, sessions, player email, player identity, API keys, tokens, passwords,
or other secrets.

## Exact Task

Implement mirror mode for Captain Ether runtime state only.

Required behavior:

1. JSON remains the canonical runtime storage for reads and successful request
   flow.
2. When Atlas mirror configuration is available, the runtime mirrors writes for:
   - `watch_sessions`
   - `progress`
   - `weak_points`
   - `answer_logs`
3. No live Mongo reads are introduced in player-facing runtime flow in this
   slice.
4. No auth collections are read or written by this slice:
   - `users`
   - `sessions`
   - `login_codes`
5. If Atlas mirror write fails, Captain Ether must preserve current JSON-backed
   gameplay behavior and must not expose storage internals to the player.
6. Mirror failure must be internally observable through a controlled internal
   log/reporting path, not player-facing payloads.
7. Existing API response shapes and current error strings must remain stable.
8. No Mongo `_id`, collection name, URI detail, or internal storage error may
   appear in player-visible payloads.
9. No new player-facing copy should be added. Localization impact is expected
   to remain `N/A`.
10. `private/config.example.php` may document non-secret Atlas mirror config
    shape only. Do not place live credentials in repository files.

## Required Output

Create:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0024-atlas-runtime-mirror-implementation-2026-05-31.md
```

The report must include:

- PASS, FAIL, or NEEDS DIRECTOR DECISION;
- files changed;
- mirror storage contract implemented;
- failure handling behavior;
- privacy boundary confirmation;
- localization impact;
- exact commands run and results;
- known warnings;
- next QA gate.

## Required Checks

Run at minimum:

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

Run any additional validation commands required by the `TASK-CE-0023` gate.

## Required Short Reply

After writing the implementation report, return:

```text
TASK-CE-0024 done
```

or:

```text
TASK-CE-0024 blocked
```

with the report path.

## Next Expected Gate

QA review under `TASK-CE-0025`.
