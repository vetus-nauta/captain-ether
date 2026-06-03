# TASK-CE-0173 Batch 026 Post-Merge QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 026 local/GitHub post-merge QA only
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0172 Batch 026 Staged Merge Preparation: MERGED_LOCALLY / PASS
```

## Target

Run post-merge QA for the 935-item local/GitHub baseline before any production
sync decision.

Expected local/GitHub baseline:

```text
starter_items=935
grammar_patterns=516
qa_items=935
dangerous_pairs=216
validator_warn_count=0
```

Expected production drift:

```text
production_starter_items=900
production_grammar_patterns=481
production_qa_items=900
production_dangerous_pairs=208
production_delta_items=-35
```

## Required Checks

```text
full validator with runs >=100
Batch 026 validator after merged status
API smoke
Batch 026 targeted presence/matcher registry check
local/prod drift statement
secret scan
diff whitespace check
```

No production deploy is authorized by this task.
