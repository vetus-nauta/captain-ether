# Batch 010 Distress / Mayday Basics Card

Date: 2026-06-01
Task: `TASK-CE-0062`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

## Content Summary

```text
batch_id=batch-010-distress-mayday-basics
status=draft
branch=distress_mayday
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
beginner=24
intermediate=21
advanced=5
```

Module count:

```text
distress_signal=6
distress_relay=3
identity_position=8
nature_of_distress=14
assistance_required=7
persons_abandoning=7
distress_readback=5
```

## Risky Variants

The draft intentionally keeps these contrasts strict:

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

## Open Questions For Linguist

- Confirm whether `may day` spelling should remain accepted for beginner
  Mayday entries.
- Confirm whether `Seelonce Mayday` should remain accepted beside
  `silence Mayday`, or be limited before merge.
- Confirm whether `medical distress` is acceptable for beginner/intermediate
  training, or should be narrowed to `medical emergency`.
- Confirm whether `Towage is not enough, rescue required` should remain in
  this batch as a distress escalation example.
- Confirm whether false distress alert cancellation should stay in beginner
  corpus later or remain advanced only.

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 50
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 33
Batch danger_must_reject: 99
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
