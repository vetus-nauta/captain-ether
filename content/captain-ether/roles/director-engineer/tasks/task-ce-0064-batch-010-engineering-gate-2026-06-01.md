# TASK-CE-0064 Batch 010 Engineering Gate

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Goal

Run the engineering gate for Batch 010 Distress / Mayday after Sea Speak
Linguist review and before QA acceptance.

## Target

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

## Required Checks

- Batch status is `linguist_reviewed`.
- Batch has `50` items.
- Batch item IDs do not overlap playable `starter.json`.
- Batch item IDs do not overlap `accept-reject-qa-pairs.json`.
- Batch grammar pattern IDs do not overlap playable grammar patterns.
- Item-local `qa_notes` are present.
- Dangerous minimal-pair groups are internally resolvable.
- Full validator passes with known starter warnings only.
- API smoke passes.
- JS syntax guard passes.

## Forbidden

- Merge into `starter.json`
- Edit accept/reject regression
- Matcher/API/UI/runtime changes
- Production deploy
- Atlas config or data writes
- Auth/platform
- Router/registry
- Watch Officer
- Nav Desk
- Secrets, sessions, cookies, CSRF, SMTP, player email, player identity data

## Next Gate

QA acceptance before playable merge.
