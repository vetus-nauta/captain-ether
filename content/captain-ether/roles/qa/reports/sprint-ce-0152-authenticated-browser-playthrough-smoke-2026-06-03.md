# CE-SPRINT-0152 Authenticated Browser / Manual Playthrough Smoke

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether production authenticated-flow QA
Status: AUTH_BLOCKED_WITH_NEXT_STEPS

## Baseline

```text
git_status=clean
github_sync=0 0
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
validator_warn_count=0
production_route=HTTP 200
```

## Checks Run

```text
GET /games/captain-ether -> HTTP 200
GET /api/auth/me.php without session -> HTTP 200, {"ok":true,"user":null}
POST /api/captain-ether/start-watch.php without session -> HTTP 401 Login required
GET /api/captain-ether/progress.php without session -> HTTP 401 Login required
POST /api/auth/verify-code.php with bad code -> HTTP 401 Code is invalid or expired
POST /api/auth/logout.php anonymous -> HTTP 200
POST /api/auth/request-code.php invalid email -> HTTP 422 Enter a valid email
POST /api/auth/request-code.php QA email -> HTTP 500 Could not send login code
```

## Blocker

Authenticated production playthrough cannot be completed from this environment
because production login requires a real email code and `request-code` fails with:

```text
HTTP 500 {"ok":false,"error":"Could not send login code"}
```

Production does not return `dev_code` because `app_env=production`, so there is
no safe way to create an authenticated browser/API session without either working
email delivery or a pre-provisioned QA session.

## Result

```text
AUTH_BLOCKED_WITH_NEXT_STEPS
```

## Required Next Steps To Unblock

One of these is required:

```text
1. Repair production SMTP/email delivery for /api/auth/request-code.php.
2. Provide a temporary QA-access email inbox where the login code can be read.
3. Provide a short-lived QA session/cookie through an approved secure channel.
4. Add an explicit, protected production QA-code channel as a separate platform/auth task.
```

## Non-Blocked Findings

```text
anonymous protected endpoints remain protected
invalid email validation works
invalid code rejection works
anonymous logout is harmless and returns ok
route loads
```

## Scope Preserved

No content, runtime, UI, Atlas, auth implementation, router, registry, Watch
Officer, Nav Desk, production config, deploy/FTP state, secrets, sessions,
cookies, CSRF behavior, player email, player identity data, WebStorm DB console,
WebStorm datasource, or foreign database was changed.
