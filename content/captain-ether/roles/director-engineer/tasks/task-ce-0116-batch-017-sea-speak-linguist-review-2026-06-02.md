# TASK-CE-0116 Batch 017 Sea Speak Linguist Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Scope: Captain Ether Batch 017 review only
Status: DONE

## Activation Condition

Started after:

```text
TASK-CE-0115 Batch 017 Marina Service Draft: DONE / DRAFTED / READY_FOR_LINGUIST_REVIEW
```

## Target

```text
content/captain-ether/batches/batch-017-marina-service-logistics-basics.json
```

## Review Goal

Review Batch 017 for Sea Speak correctness, accepted-answer boundaries, and
must-stay-wrong marina service contrasts before engineering gate.

## Required Review Focus

```text
service pontoon / waiting pontoon / fuel berth / visitor berth
pump-out station / fuel station / bilge pump / water station
payment office / marina control / port control / customs office
repair berth / visitor berth / fuel berth / onboard repair underway
fuel berth occupied / available / clear
shore power available / unavailable / no shore power / power failure
water hose / fuel hose / shore power
wait / proceed / depart
stand by outside / proceed inside
payment sequence: after payment / before payment
channel one two / channel one six
repair berth time 1600 / 1500
pump-out time 1500 / 1600
starboard side / port side
service complete / service required / service cancelled / repair complete
```

## Required Output

Return one of:

```text
ACCEPTED
ACCEPTED_WITH_PATCHES
REJECTED_FOR_REWRITE
```

If accepted with patches, update the batch file and document exact changes.

No merge into `starter.json` and no production deploy are authorized by this task.

## Result

```text
ACCEPTED_WITH_PATCHES
Batch status: linguist_reviewed
```
