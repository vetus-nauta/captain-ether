# Director-Engineer Task: TASK-CE-0021 Public Stream Selector API/UI Contract

Date: 2026-05-28

## Role

Director-Engineer / Director Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after these reports exist:

```text
content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-closed-2026-05-28.md
content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md
```

Read implementation surfaces:

```text
public/assets/app.js
public/api/captain-ether/start-watch.php
public/api/captain-ether/progress.php
public/api/captain-ether/lost-oars.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/_learner-streams.php
content/captain-ether/tools/smoke-start-watch-api.php
```

## Functional Duty

Write the API/UI implementation contract for a future local public selector
sprint. Do not implement it.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0021-public-stream-selector-api-ui-contract-2026-05-28.md
```

## Forbidden Scope

Do not edit runtime/API/UI/tool code, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, player data, sessions, cookies, CSRF, email, or secrets.

## Exact Task

Define future implementation contract:

- storage location for last-selected stream;
- default and migration behavior for existing users;
- API request/response changes;
- UI state model;
- stream-aware calls for start watch, summary, Lost Oars, skip cleanup, and
  answer log;
- i18n key integration;
- service worker/cache impact;
- local smoke fixture updates;
- QA gate commands;
- forbidden fields and privacy checks.

## Required Output

Write one technical card with:

- PASS, FAIL, or NEEDS DIRECTOR DECISION;
- proposed implementation file list;
- exact API contract;
- UI state and persistence contract;
- i18n impact;
- test matrix;
- risks and rollback boundaries;
- handoff for QA.

## Next Expected Gate

QA reviews combined contract under `TASK-CE-0022`.

