# CE-SPRINT-0160 Batch 024 Production Sync

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether Batch 024 production sync
Status: CLOSED / PASS / PRODUCTION_SYNCED

## Source State

```text
local/GitHub commit before deploy: 7c95fd0
github_sync=0 0
starter_items=865
grammar_patterns=446
qa_items=865
dangerous_pairs=201
validator_warn_count=0
batch_024_status=merged
```

## Pre-Deploy Gates

```text
Local validator: PASS, runs=120
Local API smoke: PASS captain-ether-api-smoke checks=334
Atlas ping: PASS
GitHub sync: 0 0
```

Pre-deploy production FTP read-back:

```text
prod_starter_items=830
prod_grammar_patterns=411
prod_qa_items=830
prod_dangerous_pairs=193
starter_hash_match_local=false
qa_hash_match_local=false
```

## Deploy Decision

```text
decision=SYNC_TO_PRODUCTION
reason=local/GitHub 865 baseline passed post-merge QA and production was intentionally 35 items behind
```

## Deploy Command

Executed:

```text
tools/captain-ether-production-deploy.sh
```

Deploy backup root:

```text
/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T082346Z
```

Deploy script result:

```text
public shell/assets/content/API were verified by FTP round-trip compare
production registry not touched
production config not touched
production secret file not touched
production Atlas driver not touched
```

## Post-Deploy Content Verification

Independent FTP read-back matched local:

```text
starter_hash_match=PASS
qa_hash_match=PASS
prod_starter_items=865
prod_grammar_patterns=446
prod_qa_items=865
prod_dangerous_pairs=201
```

## Post-Deploy HTTP Smoke

```text
GET /games/captain-ether -> HTTP 200
GET /assets/app.js -> HTTP 200, hash=f7decab6bb90bc0b733f8171bc3c45aa7f4d5f0f8d9916582182412ab0e5b399
GET /assets/app.css -> HTTP 200, hash=9f1f0e5acb7934cb6019745c72dceb4e4a4f622d83e1b20748b6d0f30b0de982
GET /service-worker.js -> HTTP 200, hash=5ac703505a5025e1e41f76dd2396313bb6c1e40f07f05669359e6b8686c8a7f1
GET /manifest.webmanifest -> HTTP 200, hash=20e1a441cc62b7b7b0d8efd53d2d4389cc51c10feacf4c9fb9e0a85f20f07184
GET /api/games/registry.php -> HTTP 200
GET /api/auth/me.php -> HTTP 200, {"ok":true,"user":null}
GET /api/captain-ether/progress.php anonymous -> HTTP 401 Login required
POST /api/captain-ether/start-watch.php anonymous JSON -> HTTP 401 Login required
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

## Final Production State

```text
local_github_production_starter_items=865
local_github_production_grammar_patterns=446
local_github_production_qa_items=865
local_github_production_dangerous_pairs=201
production_delta_items=0
validator_warn_count=0
```

## Scope Preserved

No Watch Officer, Nav Desk, platform registry, production config, Atlas secret
file, Atlas driver, SMTP, sessions/cookies/CSRF behavior, player email, player
identity data, WebStorm DB console, WebStorm datasource, or foreign database was
changed.

## Next Gate

Open and run release-readiness QA for the 865-item Batch 024 production baseline.
