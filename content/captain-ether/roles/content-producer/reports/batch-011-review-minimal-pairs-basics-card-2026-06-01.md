# Batch 011 Review Minimal Pairs Basics Card

Date: 2026-06-01
Task: `TASK-CE-0068`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-011-review-minimal-pairs-basics.json
```

## Content Summary

```text
batch_id=batch-011-review-minimal-pairs-basics
status=draft
branch=review_minimal_pairs
items=15
grammar_patterns=3
dangerous_minimal_pairs=11
should_accept=30
should_reject=45
```

Type count:

```text
word=4
short_expression=8
phrase=3
```

Level count:

```text
beginner=9
intermediate=5
advanced=1
```

Module count:

```text
procedure_contrasts=3
readback_contrasts=2
direction_contrasts=2
relative_position_contrasts=2
number_contrasts=3
signal_contrasts=1
movement_contrasts=2
```

## Risky Variants

The draft intentionally keeps these contrasts strict:

- `over / out`
- `roger / affirmative`
- `say again / read back`
- `port / starboard`
- `ahead / astern`
- `channel one six / channel one three`
- `zero nine zero / nine zero`
- `one four zero zero / one five zero zero`
- `Pan-Pan / Mayday / Securite`
- `alter course to port / alter course to starboard`
- `give way / stand on`

## Open Questions For Linguist

- Confirm whether `channel sixteen` should remain rejected for the digit-drill
  item.
- Confirm whether ordinary `left/right` should remain rejected for standalone
  `port/starboard` review.
- Confirm whether `Pan Pan not Mayday` is safe as item-local acceptance beside
  `Pan-Pan, not Mayday`.
- Confirm whether review drills should accept any abbreviations for numeric
  forms, or keep spoken digits strict.

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-011-review-minimal-pairs-basics.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 15
Batch target_text: 15
Batch should_accept: 30
Batch should_reject: 45
Batch danger_must_accept: 15
Batch danger_must_reject: 45
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
