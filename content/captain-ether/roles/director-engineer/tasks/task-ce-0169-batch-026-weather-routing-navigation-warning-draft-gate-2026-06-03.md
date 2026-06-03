# TASK-CE-0169 Batch 026 Weather-Routing / Navigation-Warning Draft Gate

Date: 2026-06-03
Owner: Director-Engineer / Content Producer
Scope: Captain Ether M5 Batch 026 isolated draft gate
Status: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE

## Activation Condition

Started after:

```text
TASK-CE-0168 Batch 025 Production Release Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
```

## Target

Create the isolated Batch 026 draft package for M5 expansion without merging or
deploying it.

M5 locked scope:

```text
batch_026=weather-routing and navigation-warning reinforcement
items=35
target_levels=beginner 5 / intermediate 17 / advanced 13
target_types=word 2 / short_expression 10 / phrase 23
primary_branches=safety_securite, navigation_reports
modules=route_warning, wind_shift, swell_visibility, waypoint_avoidance
dangerous_pairs=8
qa_focus=warning/advice/instruction and heading/bearing/distance numbers stay strict
```

## Output

```text
content/captain-ether/batches/batch-026-weather-routing-navigation-warning-reinforcement.json
content/captain-ether/roles/content-producer/reports/batch-026-weather-routing-navigation-warning-reinforcement-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0169-batch-026-weather-routing-navigation-warning-draft-2026-06-03.md
content/captain-ether/roles/director-engineer/tasks/task-ce-0170-batch-026-linguist-engineering-gate-2026-06-03.md
```

## Completed Checks

```text
batch validator PASS with runs=40
warnings=0
id uniqueness against starter/QA registry=PASS
pattern uniqueness/collision check=PASS
Batch 026 dangerous-pair coverage check=PASS, dangerous_minimal_pairs=8
no merge into starter.json=PASS
no production deploy=PASS
```

## Result

```text
DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
```
