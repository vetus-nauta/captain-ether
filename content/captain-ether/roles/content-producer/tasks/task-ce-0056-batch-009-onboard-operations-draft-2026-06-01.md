# TASK-CE-0056 Content Producer Batch 009 Onboard Operations Draft

Date: 2026-06-01
Owner: Content Producer
Assigned by: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Target Batch

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

## Assignment

Draft `50` onboard / bridge-team operational items for M3 corpus growth.

Required modules:

- `watch_handover`
- `helm_orders`
- `anchor_handling`
- `mooring_stations`
- `safety_checks`
- `emergency_actions_aboard`

Required risk focus:

- `hand over watch / take over watch`
- `helm order / action completed`
- `port helm / starboard helm`
- `anchor / moor / berth`
- `let go anchor / heave up anchor`
- `make fast / let go lines`
- `bow station / stern station / port station / starboard station`
- `stand by / standing by`
- `safety check / emergency action`
- `fire / flooding / man overboard`

## Forbidden

- Edit playable `starter.json`
- Edit `accept-reject-qa-pairs.json`
- Matcher/API/UI/runtime changes
- Production deploy
- Atlas config or data writes
- Auth/platform, router/registry, Watch Officer, Nav Desk
- Secrets or player identity data
