# QA Task: TASK-CE-0025 Atlas Runtime Mirror QA

Date: 2026-05-31

## Role

QA / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after these reports exist:

```text
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md
content/captain-ether/roles/validation-steward/reports/task-ce-0023-atlas-runtime-mirror-validation-gate-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/task-ce-0024-atlas-runtime-mirror-implementation-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/captain-ether-handoff-2026-05-26.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/qa/rules.md
content/captain-ether/roles/qa/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md
content/captain-ether/roles/validation-steward/reports/task-ce-0023-atlas-runtime-mirror-validation-gate-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/task-ce-0024-atlas-runtime-mirror-implementation-2026-05-31.md
```

## Functional Duty

Review the Captain Ether Atlas runtime mirror Slice A implementation for
behavioral regression and privacy safety.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/qa/reports/task-ce-0025-atlas-runtime-mirror-qa-2026-05-31.md
```

## Forbidden Scope

Do not edit runtime/API/UI/tool code, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, storage data, sessions, cookies, CSRF, email, secrets, or
Atlas credentials.

## Exact Task

Verify the Atlas runtime mirror implementation without widening scope.

Must verify:

1. current JSON-backed gameplay behavior still works for:
   - start watch
   - submit answer
   - finish watch
   - weak-point update
2. no new player-facing storage error is shown;
3. no payload privacy regression appears;
4. no player-visible localization change appears;
5. Atlas mirror verification steps from `TASK-CE-0023` can be reproduced;
6. mirror-only failure, if simulated or observed, does not break the JSON
   gameplay path;
7. auth/session/login-code behavior was not widened by implementation.

## Required Output

Write one technical card with:

- PASS, FAIL, or NEEDS DIRECTOR DECISION;
- PASS/FAIL by block;
- reproduction steps for failures;
- expected vs actual behavior;
- privacy findings;
- localization note;
- owner route for blockers;
- implementation readiness for future live-read cutover planning.

## Next Expected Gate

Director accepts Slice A or opens a correction task. QA PASS does not approve
production deploy or live Mongo read cutover.
