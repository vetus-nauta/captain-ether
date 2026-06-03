# TASK-CE-0152 Authenticated Browser / Manual Playthrough Smoke

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether production user-flow QA
Status: OPEN

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
