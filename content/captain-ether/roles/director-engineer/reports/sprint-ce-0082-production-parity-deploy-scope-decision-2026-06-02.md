# CE-SPRINT-0082 Production Parity / Deploy Scope Decision

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether production parity path
Status: BLOCKED BEFORE DEPLOY - PRODUCTION ATLAS AUTH FAILURE

## Five Sequential Sprints

### Sprint 1: CE-0082 Scope / Drift Decision

Status: DONE

Purpose: define what production parity means for Captain Ether without damaging
shared platform scope.

Decision:

- local/GitHub is current at `269e345`;
- production is live but divergent;
- production registry is shared scope and must not be overwritten from local;
- production config is production-only and must not be overwritten from local;
- Captain Ether parity must be deployed through a narrow manifest.

### Sprint 2: CE-0083 Deploy Script Safety Patch

Status: DONE LOCALLY / NOT DEPLOYED

Purpose: make the deploy command safe enough for Captain Ether parity.

Local patch prepared in:

```text
tools/captain-ether-production-deploy.sh
```

The patched script:

- backs up each remote file before overwrite;
- uploads only the narrow Captain Ether manifest;
- verifies every upload through FTP round-trip `cmp`;
- excludes `private/config.php`;
- excludes `content/game-registry.json`;
- excludes Watch Officer, auth/platform APIs, hub/router, Atlas secret, and
  Atlas driver.

### Sprint 3: CE-0084 Local Preflight Validation

Status: PASS

Checks performed:

```text
git rev-list --left-right --count HEAD...origin/main -> 0 0
node --check public/assets/app.js -> PASS
PHP lint public/api/**/*.php -> PASS
PHP lint private/bootstrap.php -> PASS
validator -> PASS, 500 items
API smoke -> PASS captain-ether-api-smoke checks=334
```

Current corpus confirmed:

```text
starter_items=500
grammar_patterns=163
scenarios=2
qa_items=500
should_accept=1216
should_reject=1518
dangerous_pairs=116
```

### Sprint 4: CE-0085 Controlled Production Deploy

Status: BLOCKED BEFORE UPLOAD

The deploy was not started.

Before running upload, production Atlas ping was executed as the mandatory
production gate.

Result:

```text
ok=true
mirror_enabled=true
live_read_enabled=true
primary_write_enabled=true
node_probe.node_exists=true
node_probe.driver_exists=true
node_probe.proc_open_exists=true
node_probe.ping_ok=false
failure_class=MongoDB authentication failed
```

According to:

```text
docs/game-director/captain-ether-atlas-production-deploy-rule-2026-05-31.md
```

`node_probe.ping_ok=false` is a hard stop. Do not continue product work or
production deploy until Atlas auth is repaired or a separate owner decision
changes the gate.

### Sprint 5: CE-0086 Post-Deploy Closure / GitHub Sync

Status: NOT STARTED

This sprint must wait until Sprint 4 is unblocked and production upload/post
smoke are complete.

Expected checks after a successful deploy:

```text
route smoke /games/captain-ether -> HTTP 200
/assets/app.js size/hash matches local
/assets/app.css size/hash matches local
/api/games/registry.php still includes watch_officer and captain_ether
/api/auth/me.php -> ok=true,user=null for anonymous session
production Atlas ping -> ping_ok=true
production Captain Ether authenticated watch smoke if test access is available
```

## Production Drift Evidence

Read-only production checks showed:

```text
production /games/captain-ether html: 2545 bytes
local public/index.html: 2443 bytes

production /assets/app.js: 32995 bytes
local public/assets/app.js: 91564 bytes

production /assets/app.css: 19150 bytes
local public/assets/app.css: 20386 bytes

production content/captain-ether/starter.json: 198888 bytes
local content/captain-ether/starter.json: 385776 bytes

production content/captain-ether/accept-reject-qa-pairs.json: 131175 bytes
local content/captain-ether/accept-reject-qa-pairs.json: 293046 bytes
```

Registry difference remains intentionally excluded from narrow Captain Ether
deploy:

```text
local registry: captain_ether, wind_rider, mystic_boatswain
production registry: captain_ether, watch_officer, wind_rider, mystic_boatswain
```

The production registry is not a Captain Ether-only file. Overwriting it from
local would remove the production Watch Officer entry.

## Approved Narrow Manifest After Atlas Is Fixed

When Atlas ping is healthy, the prepared deploy script may upload:

```text
private/bootstrap.php
public/index.html
public/assets/app.js
public/assets/app.css
public/manifest.webmanifest
public/service-worker.js
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
public/api/captain-ether/_answer-logging.php
public/api/captain-ether/_answer-matching.php
public/api/captain-ether/_learner-streams.php
public/api/captain-ether/answer-log.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/lost-oars.php
public/api/captain-ether/progress.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
```

## Explicitly Not Touched

No production deploy was performed.

No upload was performed.

These were not changed:

```text
production private/config.php
production Atlas secret file
production Atlas driver
production game registry
Watch Officer
Nav Desk
hub/router
platform auth
```

## Next Required Task

Before production deploy, resolve:

```text
CE-SPRINT-0085A Production Atlas Credential Repair / Gate Decision
```

Goal:

```text
Make tools/captain-ether-production-atlas-ping.sh return node_probe.ping_ok=true,
or record an explicit owner-approved exception to deploy static/API/content
without the Atlas gate.
```

Recommended path: repair Atlas credentials in the server-only secret file, then
rerun the Atlas ping. Do not overwrite the production secret from local.
