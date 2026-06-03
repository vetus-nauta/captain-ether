# TASK-CE-0189B Authenticated Browser Watch Smoke

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether authenticated production watch smoke
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0189A Batch 028 Production Release-Readiness QA: PASS / RELEASE_READY_FOR_1000_ITEM_SCOPE
```

## Input

```text
https://game.brkovic.ltd/games/captain-ether
public/api/auth/request-code.php
public/api/auth/verify-code.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/progress.php
public/api/captain-ether/lost-oars.php
```

## Required Work

```text
use an approved production QA account/session only
start an authenticated beginner watch
submit at least one correct answer and one wrong answer
finish the watch
verify progress endpoint responds for authenticated user
verify Lost Oars path remains reachable for wrong/skipped items
write only non-secret evidence to the report
```

## Hard Boundaries

```text
no auth bypass
no login code, cookie, session, CSRF value, player email, or player identity in reports
no production deploy
no production config changes
no Atlas/auth/session/router/registry changes
no Watch Officer or Nav Desk changes
```

Expected output:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0189b-authenticated-browser-watch-smoke-2026-06-03.md
status PASS_AUTHENTICATED_WATCH_SMOKE, AUTH_BLOCKED_WITH_NEXT_STEPS, or CHANGES_REQUIRED
```
