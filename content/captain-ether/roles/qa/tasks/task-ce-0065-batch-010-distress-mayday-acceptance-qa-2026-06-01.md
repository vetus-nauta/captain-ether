# TASK-CE-0065 Batch 010 Distress / Mayday Acceptance QA

Date: 2026-06-01
Owner: QA
Assigned by: Director-Engineer
Scope: Captain Ether only
Mode: report-only
Status: DONE

## Target

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

## Assignment

Independently verify Batch 010 before merge into playable content.

Required focus:

- target text matching;
- `should_accept` examples;
- `should_reject` examples;
- dangerous-pair coverage;
- Mayday/Pan-Pan/Securite boundaries;
- distress/urgency/safety boundaries;
- rescue/towage/pilot/berth boundaries;
- scope preservation.

## Forbidden

- Edit playable `starter.json`
- Edit `accept-reject-qa-pairs.json`
- Matcher/API/UI/runtime changes
- Production deploy
- Atlas config or data writes
- Auth/platform, router/registry, Watch Officer, Nav Desk
- Secrets or player identity data
