# TASK-CE-0052 Batch 008 Engineering Gate

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Goal

Verify Batch 008 VTS / Port Control after Sea Speak Linguist review before QA
acceptance.

## Target

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## Required Checks

- Batch status is `linguist_reviewed`.
- Batch has exactly `50` items.
- Batch item IDs are unique.
- Batch item IDs do not overlap playable `starter.json`.
- Batch item IDs do not overlap `accept-reject-qa-pairs.json`.
- Batch grammar pattern IDs are unique.
- Batch grammar pattern IDs do not overlap playable `starter.json`.
- Required item and `qa_notes` fields are present.
- Dangerous-pair groups are executable by the validator.
- Full Captain Ether validator passes with the batch loaded.
- API smoke passes.

## Forbidden

- Merge into `starter.json`
- Edit `accept-reject-qa-pairs.json`
- Matcher/API/UI/runtime code changes
- Production deploy
- Atlas config or data writes
- Auth/platform
- Router/registry
- Watch Officer
- Nav Desk
- Secrets, sessions, cookies, CSRF, SMTP, player email, player identity data

## Output

Write engineering gate report and route Batch 008 to QA acceptance.
