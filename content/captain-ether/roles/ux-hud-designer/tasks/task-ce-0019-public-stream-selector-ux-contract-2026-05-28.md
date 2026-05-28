# UX/HUD Task: TASK-CE-0019 Public Stream Selector UX Contract

Date: 2026-05-28

## Role

UX/HUD Designer / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/ux-hud-designer/rules.md
content/captain-ether/roles/ux-hud-designer/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-closed-2026-05-28.md
content/captain-ether/roles/ux-hud-designer/reports/english-native-stream-selector-ux-policy-2026-05-27.md
content/captain-ether/roles/localization-architect/reports/english-native-stream-localization-policy-2026-05-27.md
```

Read current UI flow:

```text
public/assets/app.js
```

## Functional Duty

Define the public `Practice stream` selector UX contract.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
```

## Forbidden Scope

Do not edit runtime/API/UI files, CSS, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, player data, sessions, cookies, CSRF, email, or secrets.

## Exact Task

Produce a UX contract for introducing public stream selection after the current
hidden/admin-only English-native stream.

Must decide or recommend:

- selector placement on the Captain Ether level screen;
- whether existing players see a default selected stream or a blocking chooser;
- stream option visual shape;
- stream labels and helper text concept;
- how to show current stream on watch screen without crowding the HUD;
- how to show stream in summary and Lost Oars;
- how switching stream should behave;
- mobile layout constraints and no-horizontal-overflow rules;
- states for `ru_source`, `english_native`, loading, unavailable, and error;
- accessibility expectations.

## Required Output

Write one technical card with:

- PASS, FAIL, or NEEDS DIRECTOR DECISION;
- recommended selector model;
- affected screens;
- mobile risks;
- state model;
- forbidden UX patterns;
- implementation handoff for Director-Engineer;
- localization impact.

## Next Expected Gate

Localization Architect uses this report for `TASK-CE-0020`.

