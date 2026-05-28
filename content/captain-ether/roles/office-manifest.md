# Captain Ether Office Manifest

Date: 2026-05-27

## Purpose

This file is the quick activation map for the Captain Ether office.

Repository files are the source of truth. Chat is only dispatch and status.
Every role is narrow by default. No role self-activates.

## Role Roster

| Role folder | Status | Primary use | Default mode | Report path |
| --- | --- | --- | --- | --- |
| `director-engineer/` | Active | Captain Ether owner, runtime/API, integration, acceptance, task routing | Can edit assigned Captain Ether scope | `content/captain-ether/roles/director-engineer/reports/` |
| `content-producer/` | Active when assigned | Draft content batches only | Report-only unless batch edit is explicitly allowed | `content/captain-ether/roles/content-producer/reports/` |
| `sea-speak-linguist/` | Active when assigned | Maritime meaning, accepted/rejected variants, dangerous pairs | Report-only unless content-side patch is explicitly allowed | `content/captain-ether/roles/sea-speak-linguist/reports/` |
| `qa/` | Active when assigned | QA smoke, regression, privacy, route/flow checks | Report-only | `content/captain-ether/roles/qa/reports/` |
| `curriculum-architect/` | Dormant, ready | Branch/module structure, level balance, content sequencing | Report-only | `content/captain-ether/roles/curriculum-architect/reports/` |
| `scenario-designer/` | Dormant, ready | Scenario turns and realistic radio situations | Report-only unless draft edit is explicitly allowed | `content/captain-ether/roles/scenario-designer/reports/` |
| `ux-hud-designer/` | Dormant, ready | Player flow, HUD clarity, mobile comfort, UI proposal | Report-only | `content/captain-ether/roles/ux-hud-designer/reports/` |
| `gamification-designer/` | Dormant, ready | Motivation, progression, pacing, review loops | Report-only | `content/captain-ether/roles/gamification-designer/reports/` |
| `answer-log-analyst/` | Dormant, ready | Admin answer-log clustering and disputed-answer triage | Report-only | `content/captain-ether/roles/answer-log-analyst/reports/` |
| `localization-architect/` | Dormant, ready | UI language policy, system-language detection, fallback behavior, localization QA | Report-only | `content/captain-ether/roles/localization-architect/reports/` |
| `validation-steward/` | Dormant, ready | Local validation environment, reproducible gates, validator triage, smoke preparation | Report-only | `content/captain-ether/roles/validation-steward/reports/` |

## Standard Folder Contract

Every role folder must contain:

- `rules.md`
- `handoff.md`
- `tasks/README.md`
- `reports/README.md`

## Start-of-Day Protocol

Use this sequence at each new day start:

1. Select the active Captain Ether repository:
   `cd /tmp/captain-ether-export`

2. Verify clean local state and remote alignment:
   `git status --short --branch`

3. Sync with remote origin:
   `git fetch origin`
   `git pull --ff-only origin main`

4. Read mandatory startup docs:
   - `docs/game-director/task-registry.md`
   - `content/captain-ether/roles/README.md`
   - latest handoff in `content/captain-ether/captain-ether-handoff-YYYY-MM-DD.md`

5. Resolve outstanding gates:
   - continue `NEEDS DIRECTOR DECISION` items first
   - then clear `FAIL` items with a valid updated contract path

6. Assign next work:
   - if blocked: dispatch one explicit role-task
   - if clear: assign one narrow implementation slice

7. End-of-day hygiene:
   - each change set must be in allowed files
   - commit + push after a closed gate/task package, QA checkpoint, Director
     checkpoint, or explicit intermediate checkpoint

If step 1 is not `/tmp/captain-ether-export`, stop and switch repository before doing any role change.

Role task files go under:

```text
content/captain-ether/roles/<role>/tasks/
```

Role report files go under:

```text
content/captain-ether/roles/<role>/reports/
```

## Activation Checklist

A role can be activated only when the task block contains:

- task ID;
- owner role;
- working directory;
- source documents to read;
- exact task;
- required output path;
- allowed files;
- forbidden scope;
- mode: report-only or edits allowed;
- required short chat reply;
- next expected gate.

If the task lacks any required boundary, the role must stop and ask
Director-Engineer / Director Ether for a narrowed command.

## Scope Rules

Captain Ether roles must not touch:

- Watch Officer;
- Nav Desk;
- platform router or registry;
- auth/platform;
- production config;
- deploy/FTP state;
- secrets, cookies, sessions, CSRF, login codes, SMTP, `.netrc`, player email,
  or player identity data.

Production deploy and auth access always require a separate Game Director or
Platform Auth task.

## GitHub Sync Discipline

After each closed gate or task package, sync the accepted state to:

```text
git@github.com:vetus-nauta/captain-ether.git
```

Do not push half-finished work. Push only after QA, a Director checkpoint, or an
explicit intermediate checkpoint.

Before every commit, verify staged scope and exclude unrelated files:

- WebStorm or IDE scaffold;
- Vite scaffold;
- `node_modules/`;
- `exports/`;
- `.godot/`;
- secrets, private config, sessions, cookies, CSRF, SMTP, `.netrc`, player
  email, or player identity data;
- Watch Officer, Nav Desk, auth/platform, router/registry, or other unrelated
  project files unless the current gate explicitly authorizes them.

After push, verify:

```text
git rev-list --left-right --count HEAD...origin/main
```

The required result is:

```text
0 0
```

Final status after sync must include the pushed commit SHA and the exact gate or
task package synchronized.

## Localization Gate

Every role must include localization impact in its output:

- UI task: i18n key coverage, English fallback, system-language behavior, and
  mobile text-length risk.
- Content task: learner source language, Sea Speak target language, and whether
  Curriculum Architect / Sea Speak Linguist review is needed.
- Runtime/API task: whether any new player-facing message is introduced.
- QA task: locale smoke coverage or a clear `N/A` reason.

## Suggested Activation Order

For content growth:

```text
Curriculum Architect -> Content Producer -> Sea Speak Linguist -> Director-Engineer -> QA -> Director-Engineer acceptance
```

For answer-log improvement:

```text
Answer Log Analyst -> Sea Speak Linguist -> Director-Engineer -> QA
```

For runtime/API work:

```text
Director-Engineer implementation -> Validation Steward command gate -> QA review -> Director-Engineer acceptance -> Game Director decision if production/deploy is needed
```

For public UI selector work:

```text
Curriculum Architect -> UX/HUD Designer -> Director-Engineer -> QA -> Game Director deploy gate
```

## Current Ready Roles

All ten role folders are prepared and can be activated by assignment.

Dormant roles remain inactive until explicitly tasked.
