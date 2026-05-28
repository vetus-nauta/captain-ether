# Sprint Plan: CE-SPRINT-0019 Public Stream Selector Contract

Date: 2026-05-28
Owner: Director Ether / Captain Ether
Sprint type: report-first contract

## Sprint Goal

Prepare a safe, localized, QA-testable public `Practice stream` selector
contract for Captain Ether Beta 1.1.

## Summit

```text
CE-BETA-1.1-PUBLIC-STREAM-SELECTOR-CONTRACT
```

## Entry Criteria

- Hidden/admin-only English-native stream is implemented and QA PASS.
- Batch 006 is accepted as `draft_internal`.
- PWA has 7-locale UI foundation.
- Current visible UI still starts watch with `{ level }` only.

## Work Packages

| Task | Owner | Mode | Required output |
| --- | --- | --- | --- |
| `TASK-CE-0019` | UX/HUD Designer | report-only | Selector UX contract |
| `TASK-CE-0020` | Localization Architect | report-only | Selector i18n/copy contract |
| `TASK-CE-0021` | Director-Engineer | report-only | API/UI implementation contract |
| `TASK-CE-0022` | QA | report-only | Contract QA review and smoke matrix |

## Contract Questions To Resolve

- Where exactly does the selector appear on the Captain Ether level screen?
- Is the default selected stream visually explicit or silent?
- How does the UI show stream context in watch, summary, and Lost Oars?
- Where is last-selected stream stored?
- Does stream preference live per user, per game profile, or in Captain Ether
  progress storage?
- How does a player switch streams without losing progress?
- What text explains that interface language does not change practice stream?
- Which locale strings are mandatory before implementation?
- What local QA matrix is required before public selector implementation PASS?

## Director Baseline Decisions

- Default stream: `ru_source`.
- Public selector: opt-in, visible, reversible.
- Existing users: no forced interruption.
- English-native: no auto-select from UI locale.
- Unsupported language fallback: English UI only, not English-native stream.
- Batch 006: remains separate from `starter.json` through this contract sprint.

## Required Task Order

Recommended order:

1. UX/HUD reports first because selector placement drives copy length.
2. Localization reports second because copy must fit UX constraints.
3. Director-Engineer API/UI contract synthesizes both.
4. QA reviews the combined contract.

QA may not start until the first three reports exist.

## Allowed Files

Only role task/report files and handoff updates are allowed in this sprint.

## Forbidden Scope

No runtime/API/UI implementation, no content data edits, no production deploy,
no router/registry, no auth/platform, no Watch Officer, no Nav Desk, no
private config, no secrets.

## Completion Standard

The sprint closes when:

- four reports exist;
- QA returns PASS or explicit NEEDS DIRECTOR DECISION;
- Director accepts the sprint or records the unresolved decision.

