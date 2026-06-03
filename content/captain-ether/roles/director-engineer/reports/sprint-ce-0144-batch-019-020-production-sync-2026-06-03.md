# CE-SPRINT-0144 Batch 019-020 Production Sync

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether production sync for Set A only
Status: CLOSED / PASS / PRODUCTION_SYNCED

## Source State

```text
local/GitHub commit before deploy: 91c5ffe
GitHub sync: 0 0
starter_items=730
grammar_patterns=311
qa_items=730
dangerous_pairs=173
batch_019_status=merged
batch_020_status=merged
```

## Pre-Deploy Local Gates

```text
Local validator: PASS with known starter WARN (9), runs=60
Local API smoke: PASS captain-ether-api-smoke checks=334
Atlas ping: PASS
```

Pre-deploy Atlas gate:

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

## Pre-Deploy Production State

FTP read-back before deploy showed production was still on Batch 018 baseline:

```text
prod_starter_items=650
prod_grammar_patterns=237
prod_qa_items=650
prod_dangerous_pairs=152
prod_batch019_visible_count=0
prod_batch020_visible_count=0
```

Pre-deploy HTTP smoke:

```text
GET /games/captain-ether -> HTTP 200
GET /api/games/registry.php -> HTTP 200
GET /api/auth/me.php -> HTTP 200, {"ok":true,"user":null}
POST /api/captain-ether/start-watch.php anonymous JSON -> HTTP 401, Login required
```

## Deploy Command

Executed:

```text
tools/captain-ether-production-deploy.sh
```

Deploy backup root:

```text
/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T054217Z
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
GET /manifest.webmanifest -> HTTP 200, hash matches local
GET /api/games/registry.php -> HTTP 200
GET /api/auth/me.php -> HTTP 200, {"ok":true,"user":null}
POST /api/captain-ether/start-watch.php anonymous JSON -> HTTP 401, Login required
GET /api/captain-ether/progress.php anonymous JSON -> HTTP 401, Login required
```

## Content Hash And Count Check

FTP read-back hashes matched local:

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
```

Production corpus after deploy:

```text
prod_starter_items=730
prod_grammar_patterns=311
prod_qa_items=730
prod_should_accept=1634
prod_should_reject=2221
prod_dangerous_pairs=173
prod_danger_must_accept=542
prod_danger_must_reject=1203
prod_batch019_items_visible=30/30
prod_batch019_qa_visible=30/30
prod_batch020_items_visible=50/50
prod_batch020_qa_visible=50/50
```

Production targeted matcher using FTP read-back content:

```text
PASS production_set_a_targeted items=80 accept=153 reject=240
```

Local corpus:

```text
local_starter_items=730
local_grammar_patterns=311
local_qa_items=730
local_dangerous_pairs=173
```

## Registry Boundary

Production registry was preserved and still returns HTTP 200. Deploy script did
not upload `/game.brkovic.ltd/content/game-registry.json`.

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

## Scope Preserved

No Watch Officer, Nav Desk, platform registry, production config, Atlas secret
file, Atlas driver, SMTP, sessions/cookies/CSRF behavior, player email, player
identity data, WebStorm DB console, WebStorm datasource, or foreign database was
changed.

## Next Gate

Open `TASK-CE-0145 Batch 021-023 Merge Set B` after this production sync is
committed and GitHub is clean.
