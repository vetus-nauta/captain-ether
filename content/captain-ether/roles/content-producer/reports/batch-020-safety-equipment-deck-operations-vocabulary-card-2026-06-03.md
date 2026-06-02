# Batch 020 Safety Equipment Deck Operations Vocabulary Card

Date: 2026-06-03
Task: `TASK-CE-0131`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-020-safety-equipment-deck-operations-vocabulary.json
```

## Content Summary

```text
batch_id=batch-020-safety-equipment-deck-operations-vocabulary
status=draft
branch=mixed_safety_equipment_deck_operations
items=50
word=15
short_expression=15
phrase=20
grammar_patterns=47
dangerous_minimal_pairs=13
should_accept=100
should_reject=150
danger_must_accept=49
danger_must_reject=98
```

## Vocabulary Coverage

```text
lifebuoy / lifejacket / heaving line / boat hook
gangway net / pilot ladder / boarding ladder
fire extinguisher / first aid kit
emergency tiller / bilge alarm / fuel shutoff / seacock
companionway / foredeck
rig pilot ladder / recover lifebuoy / prepare heaving line
secure gangway / clear foredeck / close seacock
check bilge alarm / isolate fuel supply / fit emergency tiller
muster on deck / count persons aboard
illuminate pilot ladder / report pilot safely on board
report one person missing from deck
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php \
  --batch=content/captain-ether/batches/batch-020-safety-equipment-deck-operations-vocabulary.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 50
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 49
Batch danger_must_reject: 98
Known starter warnings only: WARN (9)
No new Batch 020 warnings
```

## Matcher Adjustment Note

Initial draft reject examples using `boat book` and `dock` were treated as close
spelling variants by the current matcher. They were replaced with stronger
rejects (`deck brush`, `quay`) so the batch QA reflects actual matcher behavior.

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, or player identity data was changed.
