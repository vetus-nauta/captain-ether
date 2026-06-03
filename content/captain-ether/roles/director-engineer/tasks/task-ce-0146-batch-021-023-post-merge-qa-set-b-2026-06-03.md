# TASK-CE-0146 Batch 021-023 Post-Merge QA Set B

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether local/GitHub post-merge QA only
Status: OPEN

## Activation Condition

Started after:

```text
TASK-CE-0145 Batch 021-023 Merge Set B: MERGED LOCALLY / PASS
```

## Target

Post-merge QA for Set B after Batch 021+022+023 have been merged into playable
local content:

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-021-vhf-procedure-message-markers-vocabulary.json
content/captain-ether/batches/batch-022-navigation-hazards-buoyage-visibility-vocabulary.json
content/captain-ether/batches/batch-023-emergency-medical-response-vocabulary.json
```

## Expected Baseline

```text
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
batch_021_status=merged
batch_022_status=merged
batch_023_status=merged
```

## Required Checks

```text
full validator PASS
batch 021 validator PASS
batch 022 validator PASS
batch 023 validator PASS
API smoke PASS
post-merge targeted matcher PASS
route/API read-only smoke if needed
no production deploy
```

No production deploy is authorized by this QA task.
