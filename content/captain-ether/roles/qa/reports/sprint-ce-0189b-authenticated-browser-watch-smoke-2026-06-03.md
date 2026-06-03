# CE-SPRINT-0189B Authenticated Browser Watch Smoke

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether authenticated production watch smoke
Status: AUTH_BLOCKED_WITH_NEXT_STEPS

## Baseline

```text
local_github_production_starter_items=1000
local_github_production_grammar_patterns=581
local_github_production_qa_items=1000
local_github_production_dangerous_pairs=243
production_release_readiness_qa=PASS
production_route=HTTP 200
github_sync=0 0
```

## Checks Run

```text
GET /api/auth/me.php without approved QA session -> HTTP 200, ok=true, user=null
POST /api/auth/request-code.php invalid email -> HTTP 422 Enter a valid email
POST /api/captain-ether/start-watch.php without session -> HTTP 401 Login required
Atlas ping=PASS
```

## Blocker

Authenticated production watch smoke cannot be completed from this environment
because the task requires an approved production QA account/session and none is
available in the current secure context.

This task did not request or expose a login code, cookie, session, CSRF value,
player email, or player identity. It did not read runtime storage or bypass auth.

The older CE-0152 blocker remains relevant: production authenticated watch smoke
requires one of these controlled access paths:

```text
1. working production email delivery for /api/auth/request-code.php;
2. approved QA inbox access through a secure channel;
3. short-lived QA session/cookie through an approved secure channel;
4. explicit protected production QA-code channel as a separate auth/platform task.
```

## Non-Blocked Findings

```text
production 1000-item content/runtime baseline is release-ready
anonymous protected endpoints remain protected
invalid email validation works
Atlas remains healthy
no content, matcher, API runtime, deploy, or production parity blocker was found
```

## Decision

```text
AUTH_BLOCKED_WITH_NEXT_STEPS
```

The blocker is access/auth-channel only. Main-course technical closure audit may
continue as long as it records authenticated watch smoke as not passed.

## Scope Preserved

No production deploy, matcher, API/runtime, UI/assets, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, secrets, sessions, cookies,
CSRF, SMTP, player email, player identity data, WebStorm DB console, WebStorm
datasource, or foreign database was changed by CE-0189B.
