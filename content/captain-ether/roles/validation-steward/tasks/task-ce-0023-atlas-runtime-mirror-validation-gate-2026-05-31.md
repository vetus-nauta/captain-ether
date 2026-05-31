# Validation Steward Task: TASK-CE-0023 Atlas Runtime Mirror Validation Gate

Date: 2026-05-31

## Role

Validation Steward / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after these reports exist:

```text
content/captain-ether/roles/director-engineer/reports/atlas-runtime-bootstrap-and-captain-ether-import-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md
```

## Mandatory First Read

```text
docs/game-director/mandatory-chat-operating-rules.md
docs/game-director/chat-reporting-rules.md
content/captain-ether/role-command-protocol.md
content/captain-ether/captain-ether-handoff-2026-05-26.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/validation-steward/rules.md
content/captain-ether/roles/validation-steward/handoff.md
content/captain-ether/roles/director-engineer/reports/atlas-runtime-bootstrap-and-captain-ether-import-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-runtime-mirror-slice-a-2026-05-31.md
```

Read current write surfaces:

```text
private/bootstrap.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/_answer-logging.php
content/captain-ether/tools/smoke-start-watch-api.php
```

## Functional Duty

Write the reproducible local validation gate for Captain Ether Atlas mirror
Slice A. Do not implement runtime changes.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/validation-steward/reports/task-ce-0023-atlas-runtime-mirror-validation-gate-2026-05-31.md
```

## Forbidden Scope

Do not edit runtime/API/content/matcher/UI files, auth endpoints, router,
registry, Watch Officer, Nav Desk, production config, deploy state, storage
JSON, private config, secrets, player email, player identity, sessions,
cookies, CSRF, login codes, SMTP data, or Atlas credentials.

## Exact Task

Define the local validation gate for Atlas mirror mode only.

Must cover:

1. required local runtime path and command environment;
2. syntax check command list for the future implementation file set;
3. static checks for unchanged player-facing payload boundaries;
4. local smoke sequence for:
   - watch creation
   - answer submission
   - finish watch
   - weak-point mutation
   - answer-log mutation
5. expected Atlas-side verification steps after a local write;
6. PASS/BLOCKED criteria if Atlas mirror is unavailable;
7. classification of failures into:
   - environment blocker
   - JSON canonical runtime regression
   - Atlas mirror regression
   - privacy regression
   - QA-only question
8. localization impact note, expected to be `N/A` unless new player-visible
   copy appears.

## Required Output

Write one technical card with:

- PASS, FAIL, or BLOCKED;
- exact commands;
- expected outputs or invariants;
- required Atlas verification steps;
- remaining warnings;
- owner route for each failure class;
- next gate recommendation for `TASK-CE-0024`.

## Required Short Reply

After writing the report, return:

```text
TASK-CE-0023 done
```

or:

```text
TASK-CE-0023 blocked
```

with the report path.

## Next Expected Gate

Director-Engineer implementation under `TASK-CE-0024`.
