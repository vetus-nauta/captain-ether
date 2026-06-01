# TASK-CE-0058 Batch 009 Engineering Gate

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Goal

Verify Batch 009 Onboard Operations after Sea Speak Linguist review before QA
acceptance.

## Target

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

## Required Checks

- Batch status is `linguist_reviewed`.
- Batch has exactly `50` items.
- Batch item IDs are unique and do not overlap playable/regression IDs.
- Batch grammar pattern IDs are unique and do not overlap playable starter.
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

Write engineering gate report and route Batch 009 to QA acceptance.
