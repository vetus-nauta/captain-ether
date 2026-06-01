# Batch 008 VTS / Port Control Basics Card

Date: 2026-06-01
Task: `TASK-CE-0050`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## Content Summary

```text
batch_id=batch-008-vts-port-control-basics
status=draft
branch=vts_port_control
items=50
grammar_patterns=9
dangerous_minimal_pairs=10
should_accept=109
should_reject=150
```

Type count:

```text
word=10
short_expression=17
phrase=23
```

Level count:

```text
beginner=19
intermediate=27
advanced=4
```

Module count:

```text
vts_instructions=14
port_entry_departure=13
pilot_request=8
reporting_points=6
traffic_information=5
tug_assistance=4
```

## Risky Variants

The draft intentionally keeps these contrasts strict:

- `request / report`
- `instruction / advice / information`
- `VTS / port control / marina control / pilot station`
- `pilot / tug / tow`
- `enter port / leave port`
- `permitted / not permitted`
- `reporting point / anchorage / berth / fairway`
- `channel 12 / channel 13 / channel 16 / channel 72`
- `proceed / hold / wait`
- `inbound / outbound`

## Open Questions For Linguist

- Confirm whether `VTS` and `Port Control` should both be trained as station
  identities in this beginner/intermediate batch.
- Confirm whether `request clearance` and `request permission` should both be
  accepted item-locally for port entry/departure.
- Confirm pilot/tug/tow boundaries before regression expansion.
- Confirm whether `keep listening watch` duplicates an existing urgency phrase
  acceptably inside VTS context.
- Confirm whether `port entry is not permitted` should reject general
  `port closed` wording in this item.

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Result:

```text
PASS
Batch items: 50
Batch target_text: 50
Batch should_accept: 109
Batch should_reject: 150
Batch dangerous_pairs: 10
Batch danger_must_accept: 39
Batch danger_must_reject: 117
Known starter warnings: WARN (9)
```

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Sea Speak Linguist risk review before engineering gate, QA acceptance, or any
playable merge.
