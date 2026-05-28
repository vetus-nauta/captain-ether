# QA Task: TASK-CE-0022 Public Stream Selector Contract QA

Date: 2026-05-28

## Role

QA / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after these reports exist:

```text
content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/task-ce-0021-public-stream-selector-api-ui-contract-2026-05-28.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/qa/rules.md
content/captain-ether/roles/qa/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/task-ce-0021-public-stream-selector-api-ui-contract-2026-05-28.md
```

## Functional Duty

Review the public stream selector contract for testability before any
implementation.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/qa/reports/task-ce-0022-public-stream-selector-contract-qa-2026-05-28.md
```

## Forbidden Scope

Do not edit runtime/API/UI/tool code, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, storage data, sessions, cookies, CSRF, email, or secrets.

## Exact Task

Review whether the combined contract is testable.

Must verify:

- default stream behavior;
- existing user migration behavior;
- no locale-to-stream auto-selection;
- stream preference persistence;
- UI copy coverage for 7 locales;
- mobile overflow risk is testable;
- stream-aware Lost Oars and summary behavior;
- answer-log/admin behavior;
- payload privacy;
- local smoke fixture scope;
- clear PASS/FAIL criteria for future implementation.

## Required Output

Write one technical card with:

- PASS, FAIL, or NEEDS DIRECTOR DECISION;
- PASS/FAIL by contract block;
- missing test cases;
- required future smoke matrix;
- owner route for blockers;
- implementation readiness decision.

## Next Expected Gate

Director accepts or revises the contract. QA PASS does not approve
implementation, public release, or production deploy.

