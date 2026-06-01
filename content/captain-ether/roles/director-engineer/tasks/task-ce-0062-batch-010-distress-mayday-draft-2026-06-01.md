# TASK-CE-0062 Batch 010 Distress / Mayday Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: DONE

## Goal

Create the next M3 corpus-growth draft batch for the `distress_mayday`
branch.

## Target

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

## Required Shape

- `50` draft items.
- Branch: `distress_mayday`.
- Modules:
  - `distress_signal`
  - `identity_position`
  - `nature_of_distress`
  - `assistance_required`
  - `persons_abandoning`
  - `distress_readback`
  - `distress_relay`
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
