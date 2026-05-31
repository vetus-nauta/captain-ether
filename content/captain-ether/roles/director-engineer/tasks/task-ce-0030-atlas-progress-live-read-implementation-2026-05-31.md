# Director-Engineer Task: TASK-CE-0030 Atlas Progress Live-Read Implementation

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
content/captain-ether/roles/director-engineer/reports/task-ce-0028-atlas-answer-log-live-read-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0029-atlas-answer-log-live-read-qa-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/task-ce-0028-atlas-answer-log-live-read-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0029-atlas-answer-log-live-read-qa-2026-05-31.md
```

Read implementation surfaces:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/_learner-streams.php
public/api/captain-ether/progress.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/resolve-lost-oar.php
content/captain-ether/tools/smoke-start-watch-api.php
```

## Functional Duty

Implement the next live-read cutover slice for Captain Ether progress only.

## Mode

Implementation with narrow file edits.

## Allowed Files

You may create or update only:

```text
private/bootstrap.php
private/config.example.php
public/api/captain-ether/_learner-streams.php
public/api/captain-ether/progress.php
content/captain-ether/roles/director-engineer/reports/task-ce-0030-atlas-progress-live-read-implementation-2026-05-31.md
```

## Forbidden Scope

Do not edit watch-session live-read, weak-point live-read, content JSON, matcher,
auth/platform, router, registry, Watch Officer, Nav Desk, production config,
deploy state, private config, storage data, sessions, cookies, CSRF, email,
secrets, or Atlas credentials.

Do not change primary writes away from JSON in this slice.

## Exact Task

Implement live Mongo read only for legacy Captain Ether `progress`.

Required behavior:

1. JSON remains canonical write source;
2. Mongo read is opt-in by config;
3. fallback to JSON occurs on read failure or parity mismatch;
4. no player-facing backend error detail leaks;
5. `captain_ether_stream_progress` for `english_native` is not part of this slice;
6. no auth or gameplay scope widening beyond the existing `progress` read surface.

## Next Expected Gate

QA review under `TASK-CE-0031`.
