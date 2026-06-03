# TASK-CE-0176 Batch 027 SAR / Casualty-Transfer Draft Gate

Date: 2026-06-03
Owner: Director-Engineer / Content Producer
Scope: Captain Ether M5 Batch 027 isolated draft gate
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0175 Batch 026 Production Release Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
```

## Target

Create the isolated Batch 027 draft package for M5 expansion without merging or
deploying it.

M5 locked scope:

```text
batch_027=SAR coordination and casualty-transfer reinforcement
items=35
target_levels=beginner 3 / intermediate 13 / advanced 19
target_types=word 1 / short_expression 8 / phrase 26
primary_branches=distress_mayday, urgency_panpan, emergency_medical_response
modules=casualty_transfer, helicopter_winching, on-scene_coordinator, relay_update
dangerous_pairs=10-12
qa_focus=distress/urgency/medical/SAR roles and casualty counts stay precise
```

## Required Output

```text
content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
content/captain-ether/roles/content-producer/reports/batch-027-sar-casualty-transfer-reinforcement-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0176-batch-027-sar-casualty-transfer-draft-2026-06-03.md
next task for linguist/engineering gate
```

## Required Checks

```text
batch validator PASS with runs >=30
id uniqueness against starter/QA registry
pattern uniqueness/collision check
Batch 027 dangerous-pair coverage check
no merge into starter.json
no production deploy
```
