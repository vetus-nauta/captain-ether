# TASK-CE-0152 Authenticated Browser / Manual Playthrough Smoke

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether production user-flow QA
Status: DONE / AUTH_BLOCKED_WITH_NEXT_STEPS

## Activation Condition

Started after:

```text
TASK-CE-0151 Big Sprint Production Hardening And Expansion Plan: DONE / ORGANIZED
```

## Target

Run or prepare an authenticated live-game smoke for Captain Ether production.

Expected baseline:

```text
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
validator_warn_count=0
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

## Required Checks

```text
git status clean
github sync 0 0
production route HTTP 200
anonymous protected endpoints remain HTTP 401
if authenticated session is available: start watch, submit accepted answer, submit rejected answer, finish/cleanup behavior
if authenticated session is unavailable: mark AUTH_BLOCKED and document exact missing access path
```

No production deploy is authorized by this task.

## Result

```text
git_status=clean
github_sync=0 0
production_route=HTTP 200
auth_me_anonymous=HTTP 200 user null
anonymous_start_watch=HTTP 401 Login required
anonymous_progress=HTTP 401 Login required
request_code_invalid_email=HTTP 422
request_code_qa_email=HTTP 500 Could not send login code
verify_bad_code=HTTP 401
logout_anonymous=HTTP 200
authenticated_playthrough=AUTH_BLOCKED
blocker=production email-code delivery unavailable and no QA session present
next_task=CE-0153 Production Runtime And UX Edge Smoke
```
