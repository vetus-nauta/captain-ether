# TASK-CE-0062 Content Producer Batch 010 Distress / Mayday Draft

Date: 2026-06-01
Owner: Content Producer
Assigned by: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Target Batch

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

## Assignment

Draft `50` Distress / Mayday items for M3 corpus growth.

Required modules:

- `distress_signal`
- `identity_position`
- `nature_of_distress`
- `assistance_required`
- `persons_abandoning`
- `distress_readback`
- `distress_relay`

Required risk focus:

- `Mayday / Pan-Pan / Securite`
- `distress / urgency / safety`
- `Mayday / Mayday relay / Pan-Pan relay`
- `position / course / bearing / destination`
- `vessel name / call sign / MMSI`
- `fire / flooding / sinking / listing / aground`
- `rescue / towage / pilot / berth`
- `persons on board / persons overboard / abandoning vessel`
- `read back / relay / say again / cancel`
- `distress traffic / safety watch / routine traffic`

## Forbidden

- Edit playable `starter.json`
- Edit `accept-reject-qa-pairs.json`
- Matcher/API/UI/runtime changes
- Production deploy
- Atlas config or data writes
- Auth/platform, router/registry, Watch Officer, Nav Desk
- Secrets or player identity data
