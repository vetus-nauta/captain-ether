# CE-SPRINT-0147 Batch 021-023 Production Sync

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether production sync for Set B only
Status: CLOSED / PASS / PRODUCTION_SYNCED

## Source State

```text
local/GitHub commit before deploy: 9c6e06e
GitHub sync: 0 0
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
batch_021_status=merged
batch_022_status=merged
batch_023_status=merged
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

FTP read-back before deploy showed production was still on Batch 020 baseline:

```text
prod_starter_items=730
prod_grammar_patterns=311
prod_qa_items=730
prod_dangerous_pairs=173
prod_set_b_samples_visible=false
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
/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T055505Z
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
prod_starter_items=830
prod_grammar_patterns=411
prod_qa_items=830
prod_should_accept=1773
prod_should_reject=2522
prod_dangerous_pairs=193
prod_danger_must_accept=642
prod_danger_must_reject=1404
prod_batch021_items_visible=35/35
prod_batch021_qa_visible=35/35
prod_batch022_items_visible=35/35
prod_batch022_qa_visible=35/35
prod_batch023_items_visible=30/30
prod_batch023_qa_visible=30/30
```

Production targeted matcher using FTP read-back content:

```text
PASS production_set_b_targeted items=100 accept=139 reject=301
```

Local corpus:

```text
local_starter_items=830
local_grammar_patterns=411
local_qa_items=830
local_dangerous_pairs=193
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

Open a release-readiness/final product QA task for Captain Ether Batch 019-023
production baseline, or continue the next content expansion batch series.
