# CE-SPRINT-0167 Batch 025 Production Sync

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether Batch 025 controlled production sync
Status: CLOSED / PASS / PRODUCTION_SYNCED

## Source State

```text
local/GitHub commit before deploy: 37aaaa2
github_sync=0 0
starter_items=900
grammar_patterns=481
qa_items=900
dangerous_pairs=208
validator_warn_count=0
batch_025_status=merged
```

## Pre-Deploy Gates

```text
Local validator: PASS, runs=120
Local API smoke: PASS captain-ether-api-smoke checks=334
Atlas ping: PASS
GitHub sync: 0 0
secret_scan=PASS
```

Pre-deploy production FTP read-back:

```text
prod_starter_items=865
prod_grammar_patterns=446
prod_qa_items=865
prod_dangerous_pairs=201
production_delta_items=-35
```

Pre-deploy production HTTP smoke:

```text
GET /games/captain-ether -> HTTP 200
GET /api/games/registry.php -> HTTP 200
GET /api/auth/me.php anonymous -> HTTP 200 {"ok":true,"user":null}
POST /api/captain-ether/start-watch.php anonymous JSON -> HTTP 401 Login required
```

## Deploy Decision

```text
decision=SYNC_TO_PRODUCTION
reason=local/GitHub 900 baseline passed post-merge QA and production was intentionally 35 items behind
```

## Deploy Command

Executed:

```sh
tools/captain-ether-production-deploy.sh
```

Deploy backup root:

```text
/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T092630Z
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
starter_hash=44aedb0939823bf205ca381a98d42965e72edf6b1c1fe51136bd03928ef35851
qa_hash_match=PASS
qa_hash=5e6b3a58733935ec25d509bdbd37625b46b2fcc7fd7d7b44d766ffb6865cc271
prod_starter_items=900
prod_grammar_patterns=481
prod_qa_items=900
prod_dangerous_pairs=208
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
GET /api/captain-ether/answer-log.php anonymous -> HTTP 401 Login required
POST /api/captain-ether/start-watch.php anonymous JSON -> HTTP 401 Login required
POST /api/captain-ether/submit-answer.php anonymous JSON -> HTTP 401 Login required
POST /api/captain-ether/finish-watch.php anonymous JSON -> HTTP 401 Login required
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

## Runtime Privacy

Production public/anonymous payload scan passed. Only expected public UI/runtime
strings were observed:

```text
X-CSRF-Token header name in client code
dev_code client UI branch for non-production API responses
```

No real session id, cookie value, bearer token, private key, player email,
player identity data, or production secret value was observed in public/anonymous
payloads.

## Final Production State

```text
local_github_production_starter_items=900
local_github_production_grammar_patterns=481
local_github_production_qa_items=900
local_github_production_dangerous_pairs=208
production_delta_items=0
validator_warn_count=0
```

## Scope Preserved

No Watch Officer, Nav Desk, platform registry, production config, Atlas secret
file, Atlas driver, SMTP, sessions/cookies/CSRF behavior, player email, player
identity data, WebStorm DB console, WebStorm datasource, or foreign database was
changed.

## Next Gate

Open and run release-readiness QA for the 900-item Batch 025 production baseline.
