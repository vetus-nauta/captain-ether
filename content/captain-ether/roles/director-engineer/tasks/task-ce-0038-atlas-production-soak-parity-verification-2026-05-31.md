# Director-Engineer Task: TASK-CE-0038 Atlas Production Soak / Parity Verification

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
content/captain-ether/roles/director-engineer/reports/task-ce-0036-atlas-primary-write-cutover-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0037-atlas-primary-write-cutover-qa-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/director-engineer/rules.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/task-ce-0036-atlas-primary-write-cutover-implementation-2026-05-31.md
content/captain-ether/roles/qa/reports/task-ce-0037-atlas-primary-write-cutover-qa-2026-05-31.md
```

Read verification surfaces:

```text
content/captain-ether/tools/verify-atlas-runtime-parity.mjs
/home/alexey/GitHub/Revoyacht/brkovic-ltd/game.brkovic.ltd/storage/
```

## Functional Duty

Run live runtime parity verification between Captain Ether JSON shadow storage
and Atlas production runtime collections.

## Mode

Verification plus report.

## Allowed Files

You may create or update only:

```text
content/captain-ether/tools/verify-atlas-runtime-parity.mjs
content/captain-ether/roles/director-engineer/reports/task-ce-0038-atlas-production-soak-parity-verification-2026-05-31.md
```

## Exact Task

Verify live parity for:

- `progress`
- `weak_points`
- `watch_sessions`
- `answer_logs` if live JSON shadow file exists

Ignore service-only import/mirror metadata and decide whether final JSON
fallback freeze is operationally ready.

## Next Expected Gate

QA / verification review under `TASK-CE-0039`.
