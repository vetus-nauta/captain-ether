# TASK-CE-0050 Content Producer Batch 008 VTS / Port Control Draft

Date: 2026-06-01
Owner: Content Producer
Assigned by: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Target Batch

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## Assignment

Draft `50` VTS / port-control items for M3 corpus growth.

Required modules:

- `reporting_points`
- `vts_instructions`
- `traffic_information`
- `pilot_request`
- `port_entry_departure`
- `tug_assistance`

Required risk focus:

- `request / report`
- `instruction / advice / information`
- `VTS / port control / marina control / pilot station`
- `pilot / tug / tow`
- `enter port / leave port`
- `permitted / not permitted`
- `reporting point / anchorage / berth / fairway`
- exact channel numbers
- `proceed / hold / wait`
- `inbound / outbound`

## Forbidden

- Edit playable `starter.json`
- Edit `accept-reject-qa-pairs.json`
- Matcher/API/UI/runtime changes
- Production deploy
- Atlas config or data writes
- Auth/platform, router/registry, Watch Officer, Nav Desk
- Secrets or player identity data
