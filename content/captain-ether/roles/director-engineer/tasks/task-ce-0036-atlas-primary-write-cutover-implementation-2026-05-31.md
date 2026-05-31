# Director-Engineer Task: TASK-CE-0036 Atlas Primary-Write Cutover Implementation

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
content/captain-ether/roles/director-engineer/reports/task-ce-0034-atlas-watch-sessions-live-read-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0035-atlas-watch-sessions-live-read-qa-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/task-ce-0034-atlas-watch-sessions-live-read-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0035-atlas-watch-sessions-live-read-qa-2026-05-31.md
```

Read implementation surfaces:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/_answer-logging.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
content/captain-ether/tools/smoke-start-watch-api.php
```

## Functional Duty

Implement guarded Atlas primary-write mode for Captain Ether runtime stores.

## Mode

Implementation with narrow file edits.

## Allowed Files

You may create or update only:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/_answer-logging.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
content/captain-ether/roles/director-engineer/reports/task-ce-0036-atlas-primary-write-cutover-implementation-2026-05-31.md
```

## Forbidden Scope

Do not edit content JSON, matcher, auth/platform, router, registry,
Watch Officer, Nav Desk, production config, deploy state, private config,
sessions, cookies, CSRF, email, secrets, or Atlas credentials.

Do not remove JSON fallback in this sprint.

## Exact Task

Implement Atlas as the primary write target for Captain Ether runtime stores:

- `watch_sessions`
- `progress`
- `weak_points`
- `captain_answer_logs`

Required behavior:

1. Mongo write is opt-in by config;
2. JSON remains a shadow/fallback copy in this sprint;
3. write failure falls back to JSON safely;
4. read-side remains protected by parity checks and JSON fallback;
5. no player-facing backend error detail leaks.

## Next Expected Gate

QA review under `TASK-CE-0037`.
