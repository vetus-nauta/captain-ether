# TASK-CE-0151 Big Sprint Production Hardening And Expansion Plan

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether sprint organization only
Status: DONE / ORGANIZED

## Baseline

Started after:

```text
CE-0148 Release Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
CE-0149 Starter Duplicate Accepted Answers Cleanup: PASS
CE-0150 Starter Duplicate Accepted Answers Production Sync: PASS / PRODUCTION_SYNCED
```

Current local/GitHub/production baseline:

```text
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
validator_warn_count=0
github_sync=0 0
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

## Big Sprint Goal

Move Captain Ether from content-synced release-ready state to product-confidence
state, then prepare the next expansion wave without breaking production parity.

## Sprint Order

```text
1. CE-0152 Authenticated Browser / Manual Playthrough Smoke
2. CE-0153 Production Runtime And UX Edge Smoke
3. CE-0154 M5 Content Expansion Scope Design
4. CE-0155 Batch 024 Draft Gate
5. CE-0156 Batch 024 Linguist / Engineering Gate
6. CE-0157 Batch 024 Acceptance QA / Merge Decision
```

## Operating Rules

```text
checks do not require user confirmation
no production deploy except inside explicit production-sync task
commit and push each completed gate
keep local/GitHub/production parity visible in every handoff
if authenticated browser smoke lacks credentials, mark AUTH_BLOCKED and continue with non-auth hardening gates
```

## Result

Big sprint package created. Next executable task:

```text
TASK-CE-0152 Authenticated Browser / Manual Playthrough Smoke
```
