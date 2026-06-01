# Batch 009 Onboard Operations Basics Card

Date: 2026-06-01
Task: `TASK-CE-0056`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

## Content Summary

```text
batch_id=batch-009-onboard-operations-basics
status=draft
branch=onboard_operations
items=50
grammar_patterns=12
dangerous_minimal_pairs=10
should_accept=100
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
beginner=25
intermediate=24
advanced=1
```

Module count:

```text
watch_handover=9
helm_orders=11
anchor_handling=9
mooring_stations=10
safety_checks=5
emergency_actions_aboard=6
```

## Risky Variants

The draft intentionally keeps these contrasts strict:

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

## Open Questions For Linguist

- Confirm whether onboard helm orders should accept ordinary `left/right`
  wording or keep `port/starboard helm` strict.
- Confirm whether `hand over watch` and `take over watch` should remain strict
  opposites in beginner items.
- Confirm `anchor ready`, `anchor down`, and `anchor aweigh` status boundaries
  before regression expansion.
- Confirm `stand by bow` versus `standing by` should remain a command/status
  contrast.
- Confirm whether onboard emergency phrases should remain internal-action
  language rather than distress radio calls.

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

Result:

```text
PASS
Batch items: 50
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch dangerous_pairs: 10
Batch danger_must_accept: 35
Batch danger_must_reject: 105
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
