# TASK-CE-0082 Production Parity / Deploy Scope Decision

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether production parity planning only
Timebox: 2 hours
Status: OPEN

## Objective

Reach a safe intermediate decision for Captain Ether production parity after the
M3 `500` playable item baseline.

The goal of this task is not to deploy. The goal is to define the exact deploy
scope needed to make production match local/GitHub for Captain Ether without
breaking Watch Officer, hub registry, platform auth, Atlas secrets, or
production-only files.

## Current Starting Point

Local and GitHub are current and synchronized at:

```text
269e345 captain-ether: add new director start handoff
```

GitHub sync status at handoff:

```text
0 0
```

Production is reachable but currently divergent from local/GitHub:

```text
/games/captain-ether shell html differs
/assets/app.js differs
/api/games/registry.php response differs
```

Known registry difference:

```text
local games: captain_ether, wind_rider, mystic_boatswain
prod games: captain_ether, watch_officer, wind_rider, mystic_boatswain
```

## Two-Hour Target

By the end of this two-hour block, produce one report with a concrete
intermediate decision:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0082-production-parity-deploy-scope-decision-2026-06-02.md
```

The report must answer:

1. Which local/GitHub files are required for Captain Ether M3 production parity.
2. Which production files differ and whether each difference is expected,
   dangerous, or must be overwritten.
3. Which files must not be touched because they belong to Watch Officer, hub,
   platform auth, Atlas secrets, or production-only configuration.
4. Whether the existing deploy script is safe enough, needs a patch, or must be
   replaced for this parity deploy.
5. What exact command sequence is allowed for the next sprint if production
   deploy is approved.
6. What validation must pass before and after any deploy.

## Allowed Work

Read-only checks are allowed against local, GitHub, and production:

```text
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
git log -5 --oneline
node --check public/assets/app.js
find public/api -maxdepth 2 -type f -name '*.php' -print | sort | xargs -n1 $HOME/.local/php-codex/bin/php -l
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
curl read-only smoke for production route/assets/registry/auth/me
```

Local temporary files under `/tmp` may be used for downloaded production
responses and checksums.

## Allowed File Changes

You may create or update only Captain Ether planning/reporting files:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0082-production-parity-deploy-scope-decision-2026-06-02.md
```

If a deploy-script patch is clearly required, do not implement it in this task.
Record the proposed patch scope in the report and make it the next task.

## Explicitly Not Authorized

Do not perform any production deploy in this task.

Do not change:

```text
Watch Officer
Nav Desk
hub/router behavior
platform auth
production config
Atlas secrets
/home/brkovic/private/captain-ether-atlas.php
/home/brkovic/game.brkovic.ltd/private/node_modules/mongodb
public/api/games/registry.php unless a separate deploy-scope decision approves it
```

Do not run:

```text
tools/captain-ether-production-deploy.sh
```

Do not upload files to production.
Do not overwrite production-only files.
Do not claim production parity until post-deploy checks pass in a separate
approved deploy sprint.

## Investigation Checklist

1. Confirm local/GitHub sync and record current commit.
2. Re-run local validation, PHP lint, JS syntax, API smoke, and local auth
   parity if practical within the timebox.
3. Download production shell HTML, `app.js`, registry JSON, and auth/me response
   read-only.
4. Compare production sizes/hashes with local equivalents.
5. Inspect current deploy script and list every file it uploads.
6. Build a proposed Captain Ether M3 deploy manifest.
7. Mark every manifest item as one of:
   - safe Captain Ether scope;
   - shared platform scope requiring approval;
   - production-only / forbidden;
   - unknown requiring owner decision.
8. Write the report and stop.

## Logical Intermediate Result

This task is complete when there is a written deploy-scope decision that lets
the owner choose one of these next actions:

```text
A. Approve a narrow Captain Ether production parity deploy.
B. Approve a deploy-script patch first, then deploy in a later sprint.
C. Keep production as-is and continue only local/GitHub work.
D. Escalate shared registry/hub/platform differences before any Captain Ether deploy.
```

## Next Expected Gate

If the decision is `A`, next task is a controlled production parity deploy with
pre/post smoke checks.

If the decision is `B`, next task is a deploy-script patch with no production
upload.

If the decision is `D`, next task belongs to the shared platform/Game Director
scope, not Captain Ether alone.
