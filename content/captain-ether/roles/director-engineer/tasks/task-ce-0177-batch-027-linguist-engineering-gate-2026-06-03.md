# TASK-CE-0177 Batch 027 Linguist / Engineering Gate

Date: 2026-06-03
Owner: Sea Speak Linguist / Director-Engineer
Scope: Captain Ether Batch 027 draft review
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0176 Batch 027 SAR / Casualty-Transfer Draft Gate: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
```

## Input

```text
content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
content/captain-ether/roles/content-producer/reports/batch-027-sar-casualty-transfer-reinforcement-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0176-batch-027-sar-casualty-transfer-draft-2026-06-03.md
```

## Review Focus

```text
casualty counts and casualty numbers
casualty / crew / survivor / body identity
transfer / treatment / evacuation boundaries
helicopter winching / rescue boat / hoist / basket / stretcher terms
on-scene coordinator role, assignment, relief, and report interval
relay update content, ETA, final/initial, completed/pending/cancelled status
medical injury, bleeding, consciousness, and do-not-move timing
```

## Required Checks

```text
linguist risk review report
engineering collision/id/pattern scan
validator PASS with warnings=0
no merge into starter.json
no production deploy
```

Expected output:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-027-sar-casualty-transfer-reinforcement-risk-review-2026-06-03.md
next task for acceptance QA if gate passes
```
