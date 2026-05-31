# QA Task: TASK-CE-0035 Atlas Watch-Sessions Live-Read QA

Date: 2026-05-31

## Role

QA / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after this report exists:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0034-atlas-watch-sessions-live-read-implementation-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/captain-ether-handoff-2026-05-26.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/qa/rules.md
content/captain-ether/roles/qa/handoff.md
content/captain-ether/roles/director-engineer/reports/task-ce-0034-atlas-watch-sessions-live-read-implementation-2026-05-31.md
```

## Functional Duty

Review the legacy `watch_sessions` live-read cutover slice only.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/qa/reports/task-ce-0035-atlas-watch-sessions-live-read-qa-2026-05-31.md
```

## Forbidden Scope

Do not edit runtime/API/UI/tool code, content JSON, matcher, auth/platform,
router, registry, Watch Officer, Nav Desk, production config, deploy state,
private config, storage data, sessions, cookies, CSRF, email, secrets, or
Atlas credentials.

## Exact Task

Verify:

1. baseline smoke still passes;
2. live-read smoke passes with Atlas read enabled for legacy `watch_sessions`;
3. forced read failure falls back to JSON without breaking smoke;
4. no privacy regression appears in watch, submit, finish, or progress payloads;
5. no scope widening occurred into auth, router, registry, or non-Captain Ether
   runtime.

## Next Expected Gate

Director acceptance of the legacy `watch_sessions` live-read slice.
