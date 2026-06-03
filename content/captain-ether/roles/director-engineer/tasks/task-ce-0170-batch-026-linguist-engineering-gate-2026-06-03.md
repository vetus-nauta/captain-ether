# TASK-CE-0170 Batch 026 Linguist / Engineering Gate

Date: 2026-06-03
Owner: Sea Speak Linguist / Director-Engineer
Scope: Captain Ether Batch 026 draft review
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0169 Batch 026 Weather-Routing / Navigation-Warning Draft Gate: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
```

## Input

```text
content/captain-ether/batches/batch-026-weather-routing-navigation-warning-reinforcement.json
content/captain-ether/roles/content-producer/reports/batch-026-weather-routing-navigation-warning-reinforcement-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0169-batch-026-weather-routing-navigation-warning-draft-2026-06-03.md
```

## Review Focus

```text
warning/advice/cancelled/in-force status boundaries
route alteration side and route/course wording
heading, time, mile, metre, and area-name numeric strictness
Alpha/Bravo waypoint avoid/proceed polarity
wind shift/backing/squall timing and direction
visibility/swell values and sectors
lee-shore, shallow-water, deep-water, and alternate-route safety meaning
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
content/captain-ether/roles/sea-speak-linguist/reports/batch-026-weather-routing-navigation-warning-reinforcement-risk-review-2026-06-03.md
next task for acceptance QA if gate passes
```
