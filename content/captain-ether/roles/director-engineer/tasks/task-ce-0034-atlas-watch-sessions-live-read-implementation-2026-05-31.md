# Director-Engineer Task: TASK-CE-0034 Atlas Watch-Sessions Live-Read Implementation

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
content/captain-ether/roles/director-engineer/reports/task-ce-0032-atlas-weak-points-live-read-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0033-atlas-weak-points-live-read-qa-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/task-ce-0032-atlas-weak-points-live-read-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0033-atlas-weak-points-live-read-qa-2026-05-31.md
```

Read implementation surfaces:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
content/captain-ether/tools/smoke-start-watch-api.php
```

## Functional Duty

Implement the next live-read cutover slice for Captain Ether watch-sessions.

## Mode

Implementation with narrow file edits.

## Allowed Files

You may create or update only:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
content/captain-ether/roles/director-engineer/reports/task-ce-0034-atlas-watch-sessions-live-read-implementation-2026-05-31.md
```

## Forbidden Scope

Do not edit content JSON, matcher, auth/platform, router, registry,
Watch Officer, Nav Desk, production config, deploy state, private config,
storage data, sessions, cookies, CSRF, email, secrets, or Atlas credentials.

Do not change primary writes away from JSON in this slice.

## Exact Task

Implement guarded live Mongo read for legacy `watch_sessions` while keeping JSON
as the canonical write source.

Required behavior:

1. JSON remains canonical write source;
2. Mongo read is opt-in by config;
3. fallback to JSON occurs on read failure or parity mismatch;
4. mutation path stays internally stable for:
   - `start-watch.php`
   - `submit-answer.php`
   - `finish-watch.php`
5. no player-facing backend error detail leaks;
6. no auth or gameplay scope widening beyond the existing watch-session
   surface.

## Next Expected Gate

QA review under `TASK-CE-0035`.
