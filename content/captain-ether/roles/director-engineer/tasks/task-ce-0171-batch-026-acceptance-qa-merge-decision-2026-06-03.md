# TASK-CE-0171 Batch 026 Acceptance QA / Merge Decision

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 026 draft acceptance QA only
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0170 Batch 026 Linguist / Engineering Gate: PASS / READY_FOR_ACCEPTANCE_QA
```

## Target

Run Batch 026 acceptance QA and decide whether it is ready for staged merge.

Expected draft state:

```text
batch_026_status=draft
batch_026_items=35
batch_026_grammar_patterns=35
batch_026_dangerous_pairs=8
validator_warnings=0
```

No starter merge or production deploy is authorized by this QA task.

## Required Checks

```text
batch validator PASS with runs >=60
full validator PASS
API smoke PASS
collision/id/pattern scan PASS
warning/advice/cancelled status samples PASS
route side/heading/bearing/distance samples PASS
waypoint Alpha/Bravo avoid/proceed samples PASS
wind/visibility/swell numeric samples PASS
secret scan PASS
diff whitespace check PASS
```

Expected output:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0171-batch-026-acceptance-qa-merge-decision-2026-06-03.md
next task for staged merge if QA passes
```
