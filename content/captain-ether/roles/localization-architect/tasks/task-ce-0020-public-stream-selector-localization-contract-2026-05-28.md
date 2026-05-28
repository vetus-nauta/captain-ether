# Localization Task: TASK-CE-0020 Public Stream Selector Localization Contract

Date: 2026-05-28

## Role

Localization Architect / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/localization-architect/rules.md
content/captain-ether/roles/localization-architect/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
content/captain-ether/roles/localization-architect/reports/english-native-stream-localization-policy-2026-05-27.md
content/captain-ether/roles/localization-architect/reports/pwa-system-language-localization-contract-2026-05-27.md
```

Read current i18n source:

```text
public/assets/app.js
content/captain-ether/tools/check-pwa-i18n.mjs
```

## Functional Duty

Define localized copy and locale behavior for the public `Practice stream`
selector.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md
```

## Forbidden Scope

Do not edit runtime/API/UI, i18n JS, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, player data, sessions, cookies, CSRF, email, or secrets.

## Exact Task

Produce localization contract for selector copy.

Must cover:

- required i18n keys;
- English fallback copy;
- Russian copy;
- German, Italian, Spanish, Serbian/Montenegrin/Croatian Latin, and Mandarin
  Chinese copy guidance;
- aliases and fallback behavior;
- explicit rule that UI language does not choose learner stream;
- unsupported locale fallback to English UI only;
- mobile text length risk;
- Sea Speak term handling;
- QA locale matrix.

## Required Output

Write one technical card with:

- PASS, FAIL, or NEEDS DIRECTOR DECISION;
- canonical English fallback copy;
- per-locale copy table or constraints;
- key list for implementation;
- locale QA matrix;
- implementation handoff for Director-Engineer.

## Next Expected Gate

Director-Engineer uses UX and localization reports for `TASK-CE-0021`.

