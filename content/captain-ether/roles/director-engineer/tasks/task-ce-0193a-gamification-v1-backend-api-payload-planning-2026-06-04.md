# TASK-CE-0193A Gamification v1 Backend Helper/API Payload Planning

Date: 2026-06-04
Owner: Director-Engineer
Scope: Captain Ether gamification v1 backend helper and API payload implementation planning
Status: PLANNED

## Activation Condition

Start after:

```text
CE-0191 Gamification v1 Copy And Placement Spec: UX_SPEC_READY_FOR_DATA_CONTRACT
CE-0192 Gamification v1 Progression Data Contract: DATA_CONTRACT_READY_FOR_IMPLEMENTATION_PLANNING
```

## Input

```text
content/captain-ether/roles/ux-hud-designer/reports/sprint-ce-0191-gamification-v1-copy-placement-spec-2026-06-04.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0192-gamification-v1-progression-data-contract-2026-06-04.md
public/api/captain-ether/_learner-streams.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/progress.php
public/api/captain-ether/lost-oars.php
public/api/captain-ether/resolve-lost-oar.php
```

## Required Work

```text
plan and then implement backend helper functions for gamification_v1 payload
add optional gamification_v1 object to allowed Captain Ether API responses
update only aggregate per-branch evidence in existing progress path
keep UI work for CE-0193B
run validation gates before any production decision
```

## Hard Boundaries

```text
Captain Ether only
no Watch Officer or Nav Desk changes
no production deploy in this task
no auth/router/registry changes
no Atlas secret/config/driver changes
no raw answers/prompts/target text in gamification progression evidence
no player email/identity/code/cookie/session/CSRF/token in payloads or reports
no streaks, leaderboards, ranks, demotion, speed bonus, percentages, or certification claims
```

Expected output:

```text
backend implementation or implementation plan constrained by CE-0191 and CE-0192
validator PASS
api smoke PASS
privacy/storage scan PASS
```
