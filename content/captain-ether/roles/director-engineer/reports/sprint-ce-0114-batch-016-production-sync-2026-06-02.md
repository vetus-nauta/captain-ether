# CE-SPRINT-0114 Batch 016 Production Sync

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether production sync after local M4 Batch 016 merge
Status: CLOSED / PASS / PRODUCTION_SYNCED

## Source State

```text
local/GitHub commit before deploy: b241f10
GitHub sync: 0 0
starter_items=600
grammar_patterns=204
qa_items=600
dangerous_pairs=140
batch_016_status=merged
```

## Pre-Deploy Local Gates

```text
Local validator: PASS with known starter WARN (9)
Local API smoke: PASS captain-ether-api-smoke checks=334
```

## Pre-Deploy Production State

FTP read-back before deploy showed production was still on Batch 015 baseline:

```text
prod_starter_items=575
prod_grammar_patterns=194
prod_qa_items=575
prod_dangerous_pairs=134
```

Pre-deploy HTTP smoke:

```text
GET /games/captain-ether -> HTTP 200
GET /api/games/registry.php -> HTTP 200
GET /api/auth/me.php -> HTTP 200, {"ok":true,"user":null}
POST /api/captain-ether/start-watch.php anonymous JSON -> HTTP 401, Login required
```

## Pre-Deploy Atlas Gate

```text
ok=true
mirror_enabled=true
live_read_enabled=true
primary_write_enabled=true
node_probe.node_exists=true
node_probe.driver_exists=true
node_probe.proc_open_exists=true
node_probe.ping_ok=true
exit_code=0
```

## Deploy Command

Executed:

```text
tools/captain-ether-production-deploy.sh
```

Deploy backup root:

```text
/game.brkovic.ltd/_deploy-backups/captain-ether/20260602T175425Z
```

Deploy script result:

```text
public shell/assets/content/API were verified by FTP round-trip compare
production registry not touched
production config not touched
production secret file not touched
production Atlas driver not touched
```

## Post-Deploy HTTP Smoke

```text
GET /games/captain-ether -> HTTP 200
GET /assets/app.js -> HTTP 200, hash matches local
GET /assets/app.css -> HTTP 200, hash matches local
GET /service-worker.js -> HTTP 200, hash matches local
GET /manifest.webmanifest -> HTTP 200
GET /api/games/registry.php -> HTTP 200
GET /api/auth/me.php -> HTTP 200, {"ok":true,"user":null}
POST /api/captain-ether/start-watch.php JSON anonymous -> HTTP 401, Login required
GET /api/captain-ether/progress.php JSON anonymous -> HTTP 401, Login required
```

## Content Hash And Count Check

FTP read-back hashes matched local:

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
```

Production corpus after deploy:

```text
prod_starter_items=600
prod_grammar_patterns=204
prod_qa_items=600
prod_dangerous_pairs=140
batch016_weather_visible=true
```

Local corpus:

```text
local_starter_items=600
local_grammar_patterns=204
local_qa_items=600
local_dangerous_pairs=140
```

## Registry Boundary

Production registry was preserved and still includes:

```text
captain_ether: active, /games/captain-ether
watch_officer: prototype, /games/watch-officer
wind_rider: planned, /games/wind-rider
mystic_boatswain: planned, /games/mystic-boatswain
```

## Post-Deploy Atlas Gate

```text
ok=true
mirror_enabled=true
live_read_enabled=true
primary_write_enabled=true
node_probe.node_exists=true
node_probe.driver_exists=true
node_probe.proc_open_exists=true
node_probe.ping_ok=true
exit_code=0
```

## Not Run

Authenticated production watch smoke was not run because no production test login
code/session was available in this sprint. Anonymous JSON guard smoke passed.

## Final State

```text
local/GitHub/production are aligned for Captain Ether M4 Batch 016 narrow scope.
Production registry remains intentionally production-specific shared state.
```

## Scope Preserved

No production registry, production config, Atlas secret, Atlas driver, auth,
Watch Officer, Nav Desk, hub/router, SMTP, sessions, cookies, CSRF, player
email, player identity data, WebStorm DB console, or WebStorm datasource was
changed.
