# QA Task: TASK-CE-0037 Atlas Primary-Write Cutover QA

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
content/captain-ether/roles/director-engineer/reports/task-ce-0036-atlas-primary-write-cutover-implementation-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/captain-ether-handoff-2026-05-26.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/qa/rules.md
content/captain-ether/roles/qa/handoff.md
content/captain-ether/roles/director-engineer/reports/task-ce-0036-atlas-primary-write-cutover-implementation-2026-05-31.md
```

## Functional Duty

Review the guarded Atlas primary-write cutover for Captain Ether runtime
storage.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/qa/reports/task-ce-0037-atlas-primary-write-cutover-qa-2026-05-31.md
```

## Forbidden Scope

Do not edit runtime/API/UI/tool code, content JSON, matcher, auth/platform,
router, registry, Watch Officer, Nav Desk, production config, deploy state,
private config, storage data, sessions, cookies, CSRF, email, secrets, or
Atlas credentials.

## Exact Task

Verify:

1. baseline smoke still passes;
2. primary-write smoke passes with Atlas as first write target;
3. forced primary-write failure falls back without breaking smoke;
4. no privacy regression appears in gameplay or admin payloads;
5. no scope widening occurred outside Captain Ether runtime stores.

## Next Expected Gate

Director acceptance of the guarded Atlas primary-write cutover.
