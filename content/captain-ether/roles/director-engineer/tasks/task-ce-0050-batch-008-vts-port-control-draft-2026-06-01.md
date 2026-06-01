# TASK-CE-0050 Batch 008 VTS / Port Control Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: DONE

## Goal

Create the next M3 corpus-growth draft batch for the `vts_port_control` branch.

## Target

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## Required Shape

- `50` draft items.
- Branch: `vts_port_control`.
- Modules:
  - `reporting_points`
  - `vts_instructions`
  - `traffic_information`
  - `pilot_request`
  - `port_entry_departure`
  - `tug_assistance`
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
