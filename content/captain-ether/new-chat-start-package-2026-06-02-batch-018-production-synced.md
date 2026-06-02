# Captain Ether New Chat Start Package

Date: 2026-06-02T23:52:35+02:00
Role: Director Ether / Captain Ether Director
Repository: `/home/alexey/WebstormProjects/captain-ether`
GitHub: `git@github.com:vetus-nauta/captain-ether.git`
Production: `https://game.brkovic.ltd/games/captain-ether`
Canonical status: Batch 018 production synced

## 1. Read This First

This file is the canonical start point for the next chat.

It supersedes older start handoff sections that still mention the pre-production
parity state, `500` local items, or production drift. Those sections are
historical context only.

The attached WebStorm DB console file path, if present, is IDE context only:

```text
/home/alexey/.var/app/com.jetbrains.WebStorm/config/JetBrains/WebStorm2026.1/consoles/db/5ab18e59-79c1-4271-8a91-1c33f72072f1/console.js
```

Do not treat that `console.js` file as Captain Ether source code or as the
source of truth for product state.

## 2. Where We Are

Captain Ether Batch 018 is fully closed through production sync.

Current aligned baseline:

```text
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
batch_018_status=merged
```

Batch 018 production visibility:

```text
prod_batch018_items_visible=25/25
prod_batch018_qa_visible=25/25
prod_batch018_grammar_visible=23/23
prod_batch018_dangerous_pairs_visible=6/6
```

Latest product baseline commit before this start package:

```text
3d7740e captain-ether: sync batch 018 to production
```

Production sync report:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0128-batch-018-production-sync-2026-06-02.md
```

## 3. GitHub State

Verified on 2026-06-02 after Batch 018 production sync:

```text
branch: main
local/GitHub sync: 0 0
latest product commit: 3d7740e captain-ether: sync batch 018 to production
```

Command to verify in a new chat:

```sh
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
git log -5 --oneline
```

Expected after this start package is committed:

```text
working tree clean
0 0
latest commit may be the start-package documentation commit
product baseline remains 3d7740e
```

## 4. WebStorm State

Open project root in WebStorm:

```text
/home/alexey/WebstormProjects/captain-ether
```

Use this repository as the source of truth.

Important WebStorm rule:

```text
The WebStorm DB console attachment is not a source file.
Do not edit it for Captain Ether work unless the user explicitly asks for DB console work.
```

The current WebStorm workspace should match Git `main`. If uncertain, verify via
terminal inside the project root:

```sh
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
```

## 5. Local Server State

Local CLI gates passed:

```text
validator PASS
batch validator PASS
API smoke PASS captain-ether-api-smoke checks=334
known WARN (9) duplicate accepted_answers after normalization
```

Local corpus counts:

```text
local_starter_items=650
local_grammar_patterns=237
local_qa_items=650
local_dangerous_pairs=152
batch_018_status=merged
```

Temporary local HTTP server smoke passed:

```text
local_route_root=200
local_route_captain_ether=200
local_asset_app_js=200
local_registry=200
local_start_watch_anon=401 Login required
```

Command to reproduce local HTTP smoke:

```sh
port=8765
$HOME/.local/php-codex/bin/php -S 127.0.0.1:$port -t public
```

Then in another terminal:

```sh
curl -L -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8765/
curl -L -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8765/games/captain-ether
curl -L -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8765/assets/app.js
curl -L -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8765/api/games/registry.php
curl -sS -o /tmp/ce-local-start.json -w '%{http_code}\n' \
  -H 'Content-Type: application/json' \
  -d '{"level":"beginner"}' \
  http://127.0.0.1:8765/api/captain-ether/start-watch.php
cat /tmp/ce-local-start.json
```

Expected anonymous start-watch result:

```text
HTTP 401
{"ok":false,"error":"Login required"}
```

## 6. Production State

Production is synced to local/GitHub for Captain Ether Batch 018 narrow scope.

Production verified state:

```text
prod_starter_items=650
prod_grammar_patterns=237
prod_qa_items=650
prod_dangerous_pairs=152
route=https://game.brkovic.ltd/games/captain-ether -> HTTP 200
anonymous start-watch -> HTTP 401 Login required
```

FTP read-back parity passed for:

```text
public/assets/app.js
public/assets/app.css
public/service-worker.js
public/manifest.webmanifest
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
```

Production Atlas ping passed:

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

Production registry was intentionally preserved as production-specific shared
platform state:

```text
captain_ether: active, /games/captain-ether
watch_officer: prototype, /games/watch-officer
wind_rider: planned, /games/wind-rider
mystic_boatswain: planned, /games/mystic-boatswain
```

Do not overwrite production registry unless a separate platform/router task is
opened.

## 7. What Is Done

Closed sequence through Batch 018:

```text
Batch 013 production sync: PASS
Batch 014 production sync: PASS
Batch 015 production sync: PASS
Batch 016 production sync: PASS
Batch 017 production sync: PASS
Batch 018 draft/review/gate/QA/merge/post-merge-QA/production-sync: PASS
```

Latest closed tasks:

```text
CE-0126 Batch 018 Merge Preparation: MERGED LOCALLY / PASS
CE-0127 Batch 018 Post-Merge QA: ACCEPTED FOR NEXT GATE / PASS
CE-0128 Batch 018 Production Sync: PASS / PRODUCTION_SYNCED
```

Important reports:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0126-batch-018-merge-preparation-2026-06-02.md
content/captain-ether/roles/qa/reports/sprint-ce-0127-batch-018-post-merge-qa-2026-06-02.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0128-batch-018-production-sync-2026-06-02.md
```

## 8. What Is Not Done

Remaining known work:

```text
authenticated production watch smoke was not run
no production test login/session is available in the current sprint context
known validator WARN (9) duplicate accepted_answers remain in older corpus
M4 1000+ item content target is not complete
```

The current product is usable as a public training MVP, but it is not final.

Practical product completion estimate:

```text
current release cycle Batch 018: 100%
whole Captain Ether product: about 85-90%
```

## 9. Next Logical Sprint

Recommended next 2-hour sprint:

```text
CE-0129 Corpus Warning Cleanup / Duplicate Accepted Answers
```

Goal:

```text
Remove or normalize the known WARN (9) duplicate accepted_answers without
changing intended matcher behavior, then run validator/API/local HTTP smoke.
```

Suggested acceptance checks:

```text
validator PASS with WARN reduced from 9 to 0, or every remaining WARN documented
API smoke PASS captain-ether-api-smoke checks=334
Batch 018 validator PASS
local HTTP route/API guard PASS
no production deploy unless the sprint explicitly includes production sync
```

Alternative next sprint if authenticated credentials become available:

```text
Authenticated Production Watch Smoke
```

Goal:

```text
Use a real production test login/session to prove start-watch -> submit-answer ->
finish-watch -> progress/answer-log path on production.
```

## 10. Hard Boundaries

Do not touch without explicit task:

```text
Watch Officer
Nav Desk
shared hub/router/platform registry
platform auth design
production config
Atlas secret file
Atlas driver
SMTP
sessions/cookies/CSRF behavior
player email or identity data
WebStorm DB console
foreign databases/projects
```

Production files that must remain protected unless a deploy task says otherwise:

```text
/home/brkovic/game.brkovic.ltd/content/game-registry.json
/home/brkovic/game.brkovic.ltd/private/config.php
/home/brkovic/private/captain-ether-atlas.php
/home/brkovic/game.brkovic.ltd/private/node_modules/mongodb
```

Approved production deploy script for Captain Ether controlled sync:

```sh
tools/captain-ether-production-deploy.sh
```

Only use it in an explicit production sync task.

## 11. Standard Check Commands

Local validation:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php \
  --batch=content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php \
  $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Production Atlas ping:

```sh
tools/captain-ether-production-atlas-ping.sh
```

Production route/API smoke:

```sh
curl -L -sS -o /dev/null -w '%{http_code}\n' \
  --resolve game.brkovic.ltd:443:162.0.217.114 \
  https://game.brkovic.ltd/games/captain-ether

curl -sS -o /tmp/ce-start.json -w '%{http_code}\n' \
  --resolve game.brkovic.ltd:443:162.0.217.114 \
  -H 'Content-Type: application/json' \
  -d '{"level":"beginner"}' \
  https://game.brkovic.ltd/api/captain-ether/start-watch.php
cat /tmp/ce-start.json
```

Expected anonymous production guard:

```text
HTTP 401
{"ok":false,"error":"Login required"}
```
