# TASK-CE-0129 Batch 019 Practical Seamanship Vocabulary Draft

Date: 2026-06-03
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether content batch draft only
Status: DONE

## Activation Condition

Started after:

```text
CE-0128 Batch 018 Production Sync: DONE / PASS / PRODUCTION_SYNCED
local/GitHub/production aligned for Batch 018
```

## Goal

Create a draft-only M4 vocabulary expansion batch without merging it into
playable `starter.json` and without production deploy.

## Output

```text
content/captain-ether/batches/batch-019-practical-seamanship-vocabulary.json
```

## Target Expansion

```text
items=30
word=10
short_expression=10
phrase=10
grammar_patterns>=20
dangerous_minimal_pairs>=8
```

## Required Checks

```text
batch validator PASS
full validator PASS
API smoke PASS
JSON parse PASS
no duplicate ids against starter
no production deploy
```

## Result

```text
DRAFTED / READY_FOR_LINGUIST_REVIEW
```

Created:

```text
content/captain-ether/batches/batch-019-practical-seamanship-vocabulary.json
content/captain-ether/roles/content-producer/reports/batch-019-practical-seamanship-vocabulary-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0129-batch-019-practical-seamanship-vocabulary-draft-2026-06-03.md
content/captain-ether/roles/director-engineer/tasks/task-ce-0130-batch-019-sea-speak-linguist-review-2026-06-03.md
```

Expansion drafted:

```text
new_draft_items=30
new_words=10
new_short_expressions=10
new_phrases=10
new_grammar_patterns=27
new_dangerous_minimal_pairs=8
new_should_accept=60
new_should_reject=90
```

Checks passed:

```text
batch validator PASS
full validator PASS
known starter WARN only: WARN (9)
Batch 019 warnings: 0
API smoke PASS captain-ether-api-smoke checks=334
JSON parse PASS
PHP syntax guard PASS
JS syntax guard PASS
duplicate ids against starter=0
duplicate grammar ids against starter=0
```

Required next step:

```text
TASK-CE-0130 Batch 019 Sea Speak Linguist Review
```

No production deploy was performed.
