# Batch 019 Practical Seamanship Vocabulary Card

Date: 2026-06-03
Task: `TASK-CE-0129`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-019-practical-seamanship-vocabulary.json
```

## Content Summary

```text
batch_id=batch-019-practical-seamanship-vocabulary
status=draft
branch=mixed_vocabulary_expansion
items=30
word=10
short_expression=10
phrase=10
grammar_patterns=25
dangerous_minimal_pairs=8
should_accept=60
should_reject=90
danger_must_accept=26
danger_must_reject=52
```

## Vocabulary Coverage

```text
weather/seamanship terms: lee shore, windward side, leeward side
tide/current terms: tidal stream, ebb tide, flood tide
harbour navigation: fairway, turning basin
signals/day shapes/lights: black ball, anchor light
movement and mooring commands: keep clear, hold position, make fast, single up lines
anchoring commands/status: heave up anchor, anchor dragging
engine/handling readiness: engine on standby, steerage way
boarding safety polarity: safe to board, not safe to board
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php \
  --batch=content/captain-ether/batches/batch-019-practical-seamanship-vocabulary.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 30
Batch target_text: 30
Batch should_accept: 60
Batch should_reject: 90
Batch danger_must_accept: 26
Batch danger_must_reject: 52
Known starter warnings only: WARN (9)
No new Batch 019 warnings
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher, API/runtime,
UI, Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.
