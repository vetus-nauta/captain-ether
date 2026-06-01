# CE-SPRINT-0080 Local Runtime Parity Check

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Director-Engineer
Scope: Captain Ether only
Status: CLOSED / PARTIAL PASS - LOCAL PHP ENVIRONMENT BLOCKER

## Checked Runtime

```text
README local port 18110: unavailable, address already in use
Fallback local port 18111: PHP dev server started for check only
Local PHP binary: /home/alexey/.local/php-codex/bin/php
System php: not found
```

## Passed Checks

```text
GET /: HTTP 200, text/html, 2443 bytes
GET /games/captain-ether: HTTP 200, text/html, 2443 bytes
GET /assets/app.js: HTTP 200, application/javascript, 91564 bytes
GET /manifest.webmanifest: HTTP 200, application/manifest+json, 945 bytes
GET /api/games/registry.php: HTTP 200, ok=true, captain_ether active
GET /api/auth/me.php: HTTP 200, ok=true, user=null
POST /api/captain-ether/start-watch.php without login: HTTP 401, Login required
PHP lint public/api/**/*.php: PASS
PHP lint private/bootstrap.php: PASS
JS syntax public/assets/app.js: PASS
API smoke: PASS captain-ether-api-smoke checks=334
```

## Blocked Check

```text
POST /api/auth/request-code.php:
Fatal error: Call to undefined function filter_var()
```

The local PHP binary used for the dev server does not load the standard
`filter` extension. Because `private/bootstrap.php` correctly calls
`filter_var()` during auth input validation, the auth-code request cannot be
completed in this local runtime.

This is recorded as a local environment blocker, not as a Captain Ether content
or gameplay regression.

## Current Local Corpus

```text
starter_items=500
grammar_patterns=163
qa_items=500
should_accept=1216
should_reject=1518
dangerous_pairs=116
traffic_collision_items=50
vts_port_control_items=50
onboard_operations_items=50
distress_mayday_items=50
review_minimal_pairs_items=15
urgency_panpan_items=55
```

## Director Decision

Captain Ether local shell, static assets, registry read, session read, auth
guard behavior, syntax checks, and start-watch smoke are coherent after the M3
`500` item corpus target.

Before a complete local-versus-production auth parity check, the local PHP
runtime must be replaced or rebuilt with the standard `filter` extension
available.

No production deploy, Atlas write, auth/platform edit, router/registry edit,
Watch Officer work, Nav Desk work, UI edit, matcher edit, API edit, or playable
content merge was performed in this sprint.
