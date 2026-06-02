# TASK-CE-0133 Batch 021 VHF Procedure Message Markers Vocabulary Draft

Date: 2026-06-03
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether content batch draft only
Status: DONE

## Goal

Create a draft-only M4 vocabulary expansion batch without merging it into playable starter.json and without production deploy.

## Output

```text
content/captain-ether/batches/batch-021-vhf-procedure-message-markers-vocabulary.json
```

## Result

```text
DRAFTED / READY_FOR_LINGUIST_REVIEW
```

## Draft Expansion

```text
new_draft_items=35
new_words=10
new_short_expressions=10
new_phrases=15
new_grammar_patterns=35
new_dangerous_minimal_pairs=7
new_should_accept=50
new_should_reject=105
```

## Checks

```text
batch validator PASS
full validator PASS
known starter WARN only: WARN (9)
API smoke PASS captain-ether-api-smoke checks=334
JSON parse PASS
PHP syntax guard PASS
JS syntax guard PASS
secret scan PASS
no production deploy
```

Required next step:

```text
TASK-CE-0134 Batch 021 Sea Speak Linguist Review
```
