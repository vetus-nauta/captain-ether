# CE-SPRINT-0153 Production Runtime And UX Edge Smoke

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether production runtime and UX edge smoke
Status: PASS / RUNTIME_UX_SMOKE_CLEAN

## Baseline

```text
git_status=clean
github_sync=0 0
production=https://game.brkovic.ltd/games/captain-ether
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
validator_warn_count=0
no_production_deploy=true
```

## Route And Static Asset HTTP Smoke

```text
/games/captain-ether -> HTTP 200, bytes=2443
/assets/app.js -> HTTP 200, bytes=91564
/assets/app.css -> HTTP 200, bytes=20386
/service-worker.js -> HTTP 200, bytes=1028
/manifest.webmanifest -> HTTP 200, bytes=945
/api/games/registry.php -> HTTP 200, bytes=2201
/assets/brand/logo-header-inline-light.png -> HTTP 200, bytes=128328
/assets/brand/logo-header-inline-light.webp -> HTTP 200, bytes=64572
/assets/icons/icon.svg -> HTTP 200, bytes=540
/assets/icons/icon-192.png -> HTTP 200, bytes=6337
/assets/icons/icon-512.png -> HTTP 200, bytes=18246
```

## Hash Parity

Production static assets match local/GitHub for the checked runtime shell files.

```text
app.js=f7decab6bb90bc0b733f8171bc3c45aa7f4d5f0f8d9916582182412ab0e5b399
app.css=9f1f0e5acb7934cb6019745c72dceb4e4a4f622d83e1b20748b6d0f30b0de982
service-worker.js=5ac703505a5025e1e41f76dd2396313bb6c1e40f07f05669359e6b8686c8a7f1
manifest.webmanifest=20e1a441cc62b7b7b0d8efd53d2d4389cc51c10feacf4c9fb9e0a85f20f07184
logo-header-inline-light.png=df47aeec01b2b2f6199534533f4aea919e1efc90b89a320c717a61181c4ec530
logo-header-inline-light.webp=67b1c22609795d268cf2169c2ca536f5e4f9770200db4b2b2b3e14d0dd1be580
icon.svg=bad25e4139c462105e7ca75f9f751525a3716fec2e7f1f48edb7113471ca894b
icon-192.png=91a7230d2e80e5035d247960bd78ab741268b3878aab2939ba047b24bc0c520a
icon-512.png=607431fe13adb3e67d72f74f3c80977ff81ef0e21e3ad93112d9491cf5a61456
```

## Service Worker And Manifest

```text
service_worker_cache=brkovic-games-shell-v7
service_worker_api_policy=/api/ requests bypass cache
service_worker_offline_fallback=/index.html for non-API requests
manifest_shortcut=/games/captain-ether
manifest_icons=192,512,svg
```

## Public Payload Privacy And API Error Shape

Anonymous public and protected endpoint checks did not expose player identity,
email inbox data, session identifiers, cookies, bearer tokens, private keys, or
secret values.

```text
GET /api/auth/me.php -> HTTP 200 {"ok":true,"user":null}
GET /api/captain-ether/progress.php -> HTTP 401 {"ok":false,"error":"Login required"}
GET /api/captain-ether/answer-log.php -> HTTP 401 {"ok":false,"error":"Login required"}
POST /api/captain-ether/start-watch.php -> HTTP 401 {"ok":false,"error":"Login required"}
POST /api/captain-ether/submit-answer.php -> HTTP 401 {"ok":false,"error":"Login required"}
POST /api/captain-ether/finish-watch.php -> HTTP 401 {"ok":false,"error":"Login required"}
POST /api/captain-ether/skip-cleanup.php -> HTTP 401 {"ok":false,"error":"Login required"}
POST /api/captain-ether/lost-oars.php -> HTTP 405 {"ok":false,"error":"Method not allowed"}
POST /api/captain-ether/resolve-lost-oar.php -> HTTP 401 {"ok":false,"error":"Login required"}
```

The `dev_code` string exists only as client UI handling for non-production API
responses. No production `dev_code` value was observed.

## Basic UX Risk Inventory

```text
route_title=Brkovic Maritime Games
route_description=Captain Ether Sea Speak and maritime radio training
registry_captain_ether_status=active
login_copy_present=true
email_code_flow_present=true
runtime_error_surface=JSON error message rendered to status text
known_auth_blocker_from_CE_0152=production request-code email delivery still required for authenticated playthrough
```

UX risk to carry forward: authenticated browser playthrough remains blocked by
production email-code delivery or missing QA session. That is covered by CE-0152
and is not a runtime shell/static parity failure.

## Result

```text
PASS / RUNTIME_UX_SMOKE_CLEAN
next_task=CE-0154 M5 Content Expansion Scope Design
```

## Scope Preserved

No content, runtime code, UI code, Atlas, auth implementation, router, registry,
Watch Officer, Nav Desk, production config, deploy/FTP state, secrets, sessions,
cookies, CSRF behavior, player email, player identity data, WebStorm DB console,
WebStorm datasource, or foreign database was changed.
