# CE-SPRINT-0151 Big Sprint Production Hardening And Expansion Plan

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether sprint organization
Status: ORGANIZED / READY_TO_EXECUTE

## Current Baseline

```text
local_github_production_starter_items=830
local_github_production_grammar_patterns=411
local_github_production_qa_items=830
local_github_production_dangerous_pairs=193
validator_warn_count=0
github_sync=0 0
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

## Big Sprint Objective

The product is content-release-ready. The next large sprint should not start by
adding more vocabulary blindly. It should first raise product confidence, then
continue expansion through small gated batches.

Primary objective:

```text
prove current production baseline is usable beyond API smoke, then start M5 expansion safely
```

## Sequential Gates

### CE-0152 Authenticated Browser / Manual Playthrough Smoke

Goal:

```text
Run or prepare an authenticated user-flow smoke for the live Captain Ether game.
```

Expected outcomes:

```text
PASS_AUTHENTICATED_PLAYTHROUGH
AUTH_BLOCKED_WITH_NEXT_STEPS
```

No production deploy.

### CE-0153 Production Runtime And UX Edge Smoke

Goal:

```text
Check production edge behavior: route loading, protected endpoints, public payload privacy, basic UX copy risks, and asset/service-worker stability.
```

Expected outcome:

```text
PASS_RUNTIME_UX_EDGE_SMOKE
```

No production deploy unless a concrete defect requires a separate fix/sync task.

### CE-0154 M5 Content Expansion Scope Design

Goal:

```text
Define the next expansion wave after the 830-item baseline.
```

Recommended focus:

```text
Batch 024: engine-room and damage-control communications
Batch 025: port-services and clearance communications
Batch 026: weather-routing and navigation-warning reinforcement
Batch 027: SAR coordination and casualty-transfer reinforcement
Batch 028: exam-style mixed review and minimal-pair reinforcement
```

No content merge or deploy.

### CE-0155 Batch 024 Draft Gate

Goal:

```text
Draft Batch 024 only, as isolated draft content.
```

Target size:

```text
items=40-50
grammar_patterns=35-50
dangerous_pairs=8-12
```

No merge or production deploy.

### CE-0156 Batch 024 Linguist / Engineering Gate

Goal:

```text
Review Batch 024 for maritime meaning, matcher boundaries, target collisions, and schema quality.
```

No merge or production deploy.

### CE-0157 Batch 024 Acceptance QA / Merge Decision

Goal:

```text
Run acceptance QA and decide whether Batch 024 is ready for staged merge.
```

No production deploy unless a later explicit production-sync task is opened.

## Sprint Success Criteria

```text
current 830-item production baseline remains stable
all new findings are documented as tasks, not ad-hoc changes
no platform/registry/Atlas/auth scope drift
next expansion wave starts only after hardening gates are closed or consciously deferred
```

## Boundaries

Do not touch without explicit task:

```text
Watch Officer
Nav Desk
shared hub/router/platform registry
platform auth design
production config
Atlas secret file
Atlas driver
SMTP
sessions/cookies/CSRF behavior
player email or identity data
WebStorm DB console
foreign databases/projects
```
