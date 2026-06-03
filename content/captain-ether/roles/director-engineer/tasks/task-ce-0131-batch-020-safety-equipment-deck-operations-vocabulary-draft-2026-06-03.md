# TASK-CE-0131 Batch 020 Safety Equipment Deck Operations Vocabulary Draft

Date: 2026-06-03
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether long vocabulary batch draft only
Status: DONE

## Activation Condition

Started after:

```text
CE-0129 Batch 019 Practical Seamanship Vocabulary Draft: DONE
local/GitHub synced after Batch 019 draft
```

## Goal

Create an additional long draft-only M4 vocabulary expansion batch of `50` new
units without merging it into playable `starter.json` and without production
deploy.

## Output

```text
content/captain-ether/batches/batch-020-safety-equipment-deck-operations-vocabulary.json
```

## Target Expansion

```text
items=50
word=15
short_expression=15
phrase=20
grammar_patterns>=40
dangerous_minimal_pairs>=10
```

## Required Checks

```text
batch validator PASS
full validator PASS
API smoke PASS
JSON parse PASS
no duplicate ids against starter
no duplicate ids against Batch 019
no production deploy
```

## Result

```text
DRAFTED / READY_FOR_LINGUIST_REVIEW
```

Created:

```text
content/captain-ether/batches/batch-020-safety-equipment-deck-operations-vocabulary.json
content/captain-ether/roles/content-producer/reports/batch-020-safety-equipment-deck-operations-vocabulary-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0131-batch-020-safety-equipment-deck-operations-vocabulary-draft-2026-06-03.md
content/captain-ether/roles/director-engineer/tasks/task-ce-0132-batch-020-sea-speak-linguist-review-2026-06-03.md
```

Expansion drafted:

```text
new_draft_items=50
new_words=15
new_short_expressions=15
new_phrases=20
new_grammar_patterns=47
new_dangerous_minimal_pairs=13
new_should_accept=98
new_should_reject=150
```

Checks passed:

```text
batch validator PASS
full validator PASS
known starter WARN only: WARN (9)
Batch 020 warnings: 0
API smoke PASS captain-ether-api-smoke checks=334
JSON parse PASS
PHP syntax guard PASS
JS syntax guard PASS
duplicate ids against starter=0
duplicate grammar ids against starter=0
duplicate ids against Batch 019=0
duplicate grammar ids against Batch 019=0
```

Required next step:

```text
TASK-CE-0132 Batch 020 Sea Speak Linguist Review
```

No production deploy was performed.
