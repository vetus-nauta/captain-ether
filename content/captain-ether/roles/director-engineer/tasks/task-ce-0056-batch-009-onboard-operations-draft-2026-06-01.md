# TASK-CE-0056 Batch 009 Onboard Operations Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: DONE

## Goal

Create the next M3 corpus-growth draft batch for the `onboard_operations`
branch.

## Target

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

## Required Shape

- `50` draft items.
- Branch: `onboard_operations`.
- Modules:
  - `watch_handover`
  - `helm_orders`
  - `anchor_handling`
  - `mooring_stations`
  - `safety_checks`
  - `emergency_actions_aboard`
- Include item-local `qa_notes`.
- Include executable dangerous minimal-pair groups.
- Keep status `draft`.

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

Sea Speak Linguist risk review before engineering gate, QA acceptance, or any
playable merge.
