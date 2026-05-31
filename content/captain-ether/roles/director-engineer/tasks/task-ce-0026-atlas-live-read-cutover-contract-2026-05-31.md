# Director-Engineer Task: TASK-CE-0026 Atlas Live-Read Cutover Contract

Date: 2026-05-31

## Role

Director-Engineer / Director Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after these reports exist:

```text
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/task-ce-0024-atlas-runtime-mirror-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0025-atlas-runtime-mirror-qa-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-live-read-cutover-slice-b-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/task-ce-0024-atlas-runtime-mirror-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0025-atlas-runtime-mirror-qa-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-live-read-cutover-slice-b-2026-05-31.md
```

Read implementation surfaces:

```text
private/bootstrap.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/answer-log.php
public/api/captain-ether/_answer-logging.php
content/captain-ether/tools/smoke-start-watch-api.php
```

## Functional Duty

Write the live-read cutover contract for Captain Ether Slice B.

Do not implement it.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0026-atlas-live-read-cutover-contract-2026-05-31.md
```

## Forbidden Scope

Do not edit runtime/API/UI/tool code, content JSON, matcher, auth/platform,
router, registry, Watch Officer, Nav Desk, production config, deploy state,
private config, storage data, sessions, cookies, CSRF, email, secrets, or
Atlas credentials.

## Exact Task

Define the live-read cutover contract.

Must cover:

1. recommended first read target:
   - `progress`
   - `weak_points`
   - `answer_logs`
   - `watch_sessions`
2. reason for the chosen order;
3. JSON fallback rule for each candidate store;
4. freshness and parity checks between JSON and Mongo;
5. failure classification:
   - stale Mongo read
   - missing mirrored document
   - partial collection drift
   - privacy regression
   - latency regression
6. rollback path;
7. exact smoke and QA matrix required before implementation;
8. explicit no-go rules for auth scope and player-visible copy.

## Required Output

Write one technical card with:

- PASS, FAIL, or NEEDS DIRECTOR DECISION;
- recommended first cutover target;
- cutover order;
- fallback contract;
- rollback contract;
- observability contract;
- QA matrix;
- implementation readiness decision.

## Next Expected Gate

QA contract review under `TASK-CE-0027`.
