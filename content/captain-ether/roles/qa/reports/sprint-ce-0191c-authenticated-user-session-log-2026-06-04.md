# CE-SPRINT-0191C Authenticated User Session Log

Date: 2026-06-04
Owner: QA / Director-Engineer
Scope: Captain Ether authenticated production user-session smoke log
Status: SESSION_PREPARED / WAITING_FOR_USER_LOGIN

## Purpose

Prepare a non-secret log for an authenticated production Captain Ether smoke
session initiated by the Director using a Director-provided email address.

Production URL:

```text
https://game.brkovic.ltd/games/captain-ether
```

## Privacy Boundary

The Director provided an email address for login, but the address is not recorded
in this repository log.

```text
qa_identity_reference=director_provided_email_redacted
email_recorded=false
login_code_recorded=false
cookie_recorded=false
session_recorded=false
csrf_recorded=false
player_identity_recorded=false
```

Do not paste or store:

```text
email address
one-time login code
cookie
session id
CSRF value
player id
player email
raw private browser storage
```

## Session Preparation

```text
start_page_opened=true
open_method=xdg-open
prepared_at=2026-06-04T12:14:22+02:00
production_deploy=false
runtime_code_changed=false
storage_schema_changed=false
```

## User Login Checklist

The Director should complete login through the production UI only:

```text
1. Open https://game.brkovic.ltd/games/captain-ether
2. Enter the Director-provided email address in the login form
3. Request the one-time code through the UI
4. Read the code privately from the mailbox
5. Enter the code in the UI
6. Do not paste the code into repository files, reports, logs, screenshots, or chat
```

## Authenticated Smoke Checklist

After login is complete, the smoke evidence should be recorded only as non-secret
PASS/BLOCKED observations:

```text
auth_me_user_present=not_checked_yet
start_watch=not_checked_yet
submit_correct_answer=not_checked_yet
submit_wrong_answer=not_checked_yet
finish_watch=not_checked_yet
progress_endpoint=not_checked_yet
lost_oars_endpoint=not_checked_yet
privacy_observed=not_checked_yet
```

Required non-secret evidence:

```text
route opens
profile/auth indicator visible without exposing identity
watch starts
one correct answer accepted
one wrong answer creates/reaches Lost Oars
watch finishes
progress updates
Lost Oars reachable
no email/code/session/cookie/CSRF/player identity captured in report
```

## Current Decision

```text
SESSION_PREPARED / WAITING_FOR_USER_LOGIN
```

The authenticated smoke is not yet closed. It can be completed after the Director
logs in through the production UI and the session is available for observation
without exposing secret values.

## Scope Preserved

No production deploy, content mutation, matcher change, API/runtime change,
UI/assets change, Atlas data mutation, auth behavior change, router/registry
change, Watch Officer, Nav Desk, production config, secrets, sessions, cookies,
CSRF, SMTP, player email, player identity data, WebStorm DB console, WebStorm
datasource, or foreign database was changed.
