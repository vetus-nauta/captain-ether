# TASK-CE-0091 Batch 013 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Activation Condition

Start only after:

```text
TASK-CE-0088 Sea Speak Linguist Review: DONE
TASK-CE-0089 Engineering Gate: PASS FOR QA ACCEPTANCE
TASK-CE-0090 Acceptance QA: PASS_FOR_MERGE
```

## Goal

Merge Batch 013 into local playable M4 baseline.

## Allowed Files

```text
content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0091-batch-013-merge-preparation-2026-06-02.md
```

## Required Checks

```text
validator PASS
API smoke PASS
JS syntax guard PASS
qa_notes_in_starter=0
```

## Boundary

No production deploy is authorized by this merge task.
