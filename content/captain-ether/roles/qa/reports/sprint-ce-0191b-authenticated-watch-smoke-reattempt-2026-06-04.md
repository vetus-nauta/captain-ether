# CE-SPRINT-0191B Authenticated Watch Smoke Reattempt

Date: 2026-06-04
Owner: QA / Director-Engineer
Scope: Captain Ether authenticated production watch smoke reattempt
Status: AUTH_BLOCKED_RECONFIRMED

## Purpose

Reattempt the only remaining release-blocking gate after CE-0191A internally
closed Captain Ether main-course content and runtime/API/production parity.

Required authenticated checks remain:

```text
start authenticated beginner watch
submit at least one correct answer
submit at least one wrong answer
finish the watch
verify authenticated progress endpoint
verify Lost Oars path after wrong/skipped item
write only non-secret evidence
```

## Access Boundary

Approved method exists by Platform/Auth decision:

```text
dedicated production QA mailbox/test account
one-time production login code
account identifier and code delivered only through approved private channel
```

Current execution context:

```text
approved_qa_account_identifier_available=false
approved_one_time_code_available=false
approved_session_cookie_available=false
auth_bypass_allowed=false
```

No private QA account identifier, one-time code, session cookie, CSRF value, or
player identity data was available in this context. None was requested, printed,
read from browser storage, read from an inbox, or written to repository files.

## Safe Checks Run

Production target:

```text
https://game.brkovic.ltd/games/captain-ether
```

Read-only / invalid-input checks:

```text
GET /games/captain-ether -> HTTP 200 bytes=2443
GET /api/auth/me.php anonymous -> HTTP 200 {"ok":true,"user":null}
POST /api/auth/request-code.php invalid email -> HTTP 422 Enter a valid email
POST /api/auth/verify-code.php invalid synthetic code -> HTTP 401 Code is invalid or expired
POST /api/captain-ether/start-watch.php anonymous -> HTTP 401 Login required
POST /api/captain-ether/submit-answer.php anonymous -> HTTP 401 Login required
POST /api/captain-ether/finish-watch.php anonymous -> HTTP 401 Login required
POST /api/captain-ether/resolve-lost-oar.php anonymous -> HTTP 401 Login required
POST /api/captain-ether/skip-cleanup.php anonymous -> HTTP 401 Login required
GET /api/captain-ether/progress.php anonymous -> HTTP 401 Login required
GET /api/captain-ether/answer-log.php anonymous -> HTTP 401 Login required
GET /api/captain-ether/lost-oars.php anonymous -> HTTP 401 Login required
```

Local regression reconfirmation:

```text
validator=PASS
starter_items=1000
grammar_patterns=581
qa_items=1000
dangerous_pairs=243
api_smoke=PASS captain-ether-api-smoke checks=334
```

Production Atlas gate:

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

## Dev-Code Boundary

`public/api/auth/request-code.php` includes a `dev_code` response only when:

```text
app_env != production
```

This reattempt did not expose a production `dev_code` and did not use a dev-code
or any production auth bypass.

## Decision

```text
authenticated_browser_watch_smoke=AUTH_BLOCKED_RECONFIRMED
blocker_owner=production_auth_access_channel
content_blocker=false
runtime_api_blocker=false
production_parity_blocker=false
```

The remaining gate is still blocked by lack of approved private QA access in the
current context, not by a discovered Captain Ether content, matcher, API,
runtime, Atlas, or production parity defect.

## Required Next Step

To close this gate as `PASS_AUTHENTICATED_WATCH_SMOKE`, provide one approved
access path through a private channel outside repository files/reports/logs/chat:

```text
1. approved QA account identifier plus fresh one-time login code;
2. short-lived already-authenticated production QA session/cookie;
3. restored approved private QA inbox/code channel;
4. separate reviewed Platform/Auth protected QA-code facility.
```

After that, rerun only the authenticated watch path and report non-secret
evidence.

## Scope Preserved

No production deploy, content mutation, matcher change, API/runtime change,
UI/assets change, Atlas data mutation, auth behavior change, router/registry
change, Watch Officer, Nav Desk, production config, secrets, sessions, cookies,
CSRF, SMTP, player email, player identity data, WebStorm DB console, WebStorm
datasource, or foreign database was changed.
