# TASK-CE-0172 Batch 026 Staged Merge Preparation

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether Batch 026 local/GitHub staged merge only
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0171 Batch 026 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
```

## Target

Merge Batch 026 into local/GitHub `starter.json` and
`accept-reject-qa-pairs.json` only, then run post-merge local gates. Do not
deploy production in this task.

Expected pre-merge source:

```text
batch_026_status=draft
batch_026_items=35
batch_026_grammar_patterns=35
batch_026_dangerous_pairs=8
local_github_production_starter_items=900
local_github_production_qa_items=900
```

Expected post-merge local/GitHub candidate:

```text
local_github_starter_items=935
local_github_grammar_patterns=516
local_github_qa_items=935
local_github_dangerous_pairs=216
production_starter_items=900
production_qa_items=900
production_delta_items=-35
```

## Required Checks

```text
merge batch items into starter without qa_notes
merge batch qa_notes into accept-reject registry
merge grammar_patterns and dangerous_minimal_pairs
set batch_026_status=merged
full validator PASS with runs >=100
Batch 026 validator PASS after merged status
API smoke PASS
Batch 026 presence check PASS
secret scan PASS
diff whitespace check PASS
production read-only drift statement PASS
```

No production deploy is authorized by this task.
