# TASK-CE-0051 Batch 008 VTS / Port Control Risk Review

Date: 2026-06-01
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: DONE

## Target

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## Assignment

Review Batch 008 VTS / Port Control for station identity, authority language,
pilot/tug boundaries, port-entry/departure permissions, exact channel numbers,
traffic-direction contrasts, and port-area/reporting-point boundaries.

## Allowed

- Patch assigned batch content only.
- Update assigned batch metadata.
- Write linguist task/report.
- Update role handoff.

## Forbidden

- Playable `starter.json`
- `accept-reject-qa-pairs.json`
- Matcher/API/UI/runtime
- Production deploy
- Atlas config or data writes
- Auth/platform
- Router/registry
- Watch Officer
- Nav Desk
- Secrets, sessions, cookies, CSRF, SMTP, player email, player identity data

## Required Output

- Approved accepted-answer decisions.
- Must-stay-wrong decisions.
- Dangerous minimal-pair decision.
- Matcher risk note.
- Engineer handoff for next gate.
