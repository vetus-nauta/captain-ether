# TASK-CE-0125 Batch 018 Acceptance QA

Date: 2026-06-02
Owner: QA
Scope: Captain Ether Batch 018 acceptance only
Status: OPEN

## Activation Condition

Started after:

```text
TASK-CE-0124 Batch 018 Engineering Gate: PASS FOR QA ACCEPTANCE
Batch status: linguist_reviewed
```

## Target

```text
content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
```

## Goal

Independently verify Batch 018 before any merge into playable `starter.json`.

## Required Checks

```text
Validator with batch: PASS
Batch-specific warnings: 0
Collision preflight: PASS
Targeted matcher for scenario-chain/readback boundaries: PASS
API smoke: PASS
Syntax guards: PASS
Secret scan: PASS
```

## Required QA Decision

Return one of:

```text
PASS_FOR_MERGE
FAIL_RETURN_TO_ENGINEERING
```

No merge into `starter.json` and no production deploy are authorized by this QA
task.
