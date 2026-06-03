# TASK-CE-0190 Gamification v1 Design Spec

Date: 2026-06-03
Owner: Gamification Designer / Director-Engineer
Scope: Captain Ether gamification v1 report-only design spec
Status: DONE / DESIGN_SPEC_READY_FOR_DIRECTOR_REVIEW

## Activation Condition

Start after:

```text
CE-0189E Director Closure Decision: MAIN_COURSE_CONTENT_RUNTIME_CLOSED_AUTH_SMOKE_OPEN
```

The authenticated production watch smoke remains open as an auth/access-channel
blocker. This task may proceed only as report-only product design and must not
implement runtime changes.

## Input

```text
content/captain-ether/roles/gamification-designer/rules.md
content/captain-ether/roles/gamification-designer/handoff.md
content/captain-ether/roles/gamification-designer/reports/office-background-light-progression-2026-05-27.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0189e-director-closure-decision-2026-06-03.md
content/captain-ether/answer-policy.md
content/captain-ether/answer-log-policy.md
content/captain-ether/branch-taxonomy.md
```

## Required Work

```text
define gamification v1 goal
select v1 mechanics
reject unsafe/punitive mechanics
state data needed without collecting secrets or identity
state implementation slices
state QA checks
preserve auth-smoke blocker and no-code boundary
```

## Hard Boundaries

```text
report-only
no runtime/API/UI/content JSON changes
no storage/schema changes
no production deploy
no production config changes
no Atlas/auth/session/router/registry changes
no Watch Officer or Nav Desk changes
no new content expansion
```

Expected output:

```text
content/captain-ether/roles/gamification-designer/reports/sprint-ce-0190-gamification-v1-design-spec-2026-06-03.md
status DESIGN_SPEC_READY_FOR_DIRECTOR_REVIEW
```

## Result

```text
DESIGN_SPEC_READY_FOR_DIRECTOR_REVIEW
selected_v1_mechanics=watch_ritual,branch_mastery_signals,lost_oars_recovery,critical_meaning_drift_events,next_quiet_step
implementation=false
production_deploy=false
next_task=CE-0191 Gamification v1 Copy And Placement Spec
```
