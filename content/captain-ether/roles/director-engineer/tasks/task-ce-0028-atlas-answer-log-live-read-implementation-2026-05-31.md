# Director-Engineer Task: TASK-CE-0028 Atlas Answer-Log Live-Read Implementation

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
content/captain-ether/roles/director-engineer/reports/task-ce-0026-atlas-live-read-cutover-contract-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0027-atlas-live-read-cutover-contract-qa-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/task-ce-0026-atlas-live-read-cutover-contract-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0027-atlas-live-read-cutover-contract-qa-2026-05-31.md
```

Read implementation surfaces:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/_answer-logging.php
public/api/captain-ether/answer-log.php
content/captain-ether/tools/smoke-start-watch-api.php
```

## Functional Duty

Implement the first live-read cutover slice for Captain Ether answer-log only.

## Mode

Implementation with narrow file edits.

## Allowed Files

You may create or update only:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/_answer-logging.php
public/api/captain-ether/answer-log.php
content/captain-ether/roles/director-engineer/reports/task-ce-0028-atlas-answer-log-live-read-implementation-2026-05-31.md
```

## Forbidden Scope

Do not edit gameplay runtime surfaces, content JSON, matcher, auth/platform,
router, registry, Watch Officer, Nav Desk, production config, deploy state,
private config, storage data, sessions, cookies, CSRF, email, secrets, or
Atlas credentials.

## Exact Task

Implement live Mongo read only for:

- `public/api/captain-ether/answer-log.php`

Required behavior:

1. admin-only access remains unchanged;
2. Mongo read is opt-in by config;
3. fallback to JSON occurs on read failure or parity mismatch;
4. no player-facing or admin-facing backend error detail leaks;
5. no auth or gameplay scope widening;
6. no visible copy change.

## Next Expected Gate

QA review under `TASK-CE-0029`.
