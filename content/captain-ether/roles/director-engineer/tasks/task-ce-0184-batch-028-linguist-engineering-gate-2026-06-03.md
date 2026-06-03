# TASK-CE-0184 Batch 028 Linguist / Engineering Gate

Date: 2026-06-03
Owner: Sea Speak Linguist / Director-Engineer
Scope: Captain Ether Batch 028 draft review
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0183 Batch 028 Draft Gate: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
```

## Input

```text
content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
content/captain-ether/roles/content-producer/reports/batch-028-exam-style-minimal-pair-reinforcement-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0183-batch-028-draft-2026-06-03.md
```

## Review Focus

```text
channel numbers and heading/course numbers stay exact
port/starboard and bow/quarter/side contrasts stay strict
roger/affirmative remain separate
say again/read back/repeat remain separate
over/out message endings remain separate
traffic crossing, passing astern/ahead, and clear-of-traffic status stay strict
```

## Required Checks

```text
linguist risk review report
engineering collision/id/pattern scan remains 0
validator PASS with warnings=0
no merge into starter.json
no production deploy
```

Expected output:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-028-exam-style-minimal-pair-reinforcement-risk-review-2026-06-03.md
next task for acceptance QA if gate passes
```
