# QA Report: TASK-CE-0022 Public Stream Selector Contract QA

Date: 2026-05-28
Role: QA / Captain Ether
Mode: report-only contract review

## Status

PASS

The combined public `Practice stream` selector contract is testable. It is ready
for Director acceptance and a separate future implementation sprint.

No runtime/API/UI/tool code, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, storage data, sessions, cookies, CSRF, email, or secrets were
changed.

## Reviewed Inputs

```text
content/captain-ether/roles/director-engineer/reports/director-analysis-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/task-ce-0021-public-stream-selector-api-ui-contract-2026-05-28.md
```

## PASS/FAIL By Contract Block

| Block | Result | Notes |
| --- | --- | --- |
| Scope boundary | PASS | Contract is report-only and does not authorize deploy or public release. |
| Default stream | PASS | `ru_source` remains default for omitted/absent preference. |
| Existing user migration | PASS | Legacy progress remains RU-source; no destructive migration required. |
| Locale separation | PASS | `ui_locale` and `learner_stream` are separate; no auto-selection from locale. |
| UX placement | PASS | Selector is visible on level select and non-blocking. |
| Mobile risk | PASS | Risk is explicitly testable across seven locales. |
| Localization coverage | PASS | Key list and fallback copy are defined. |
| API contract | PASS | Preference endpoint and stream-aware calls are testable. |
| Hidden stream guard | PASS | English-native remains backend-gated until separate release decision. |
| Progress/Lost Oars scope | PASS | Contract keeps stream-specific state separate. |
| Answer-log/admin | PASS | `all` remains admin-only and outside learner selector. |
| Payload privacy | PASS | Contract forbids identity, email, session, CSRF, and secret exposure. |
| Rollback | PASS | Removing selector and sending `{ level }` returns legacy behavior. |

## Required Future Smoke Matrix

API and storage:

- omitted `learner_stream` starts `ru_source`;
- invalid `learner_stream` returns 400 and does not mutate preference, progress,
  weak points, or answer log;
- unavailable `english_native` returns 403 for non-admin before release and
  does not mutate storage;
- preference GET returns `ru_source` for legacy users;
- preference POST stores only canonical stream after access check;
- preference POST never mutates progress or Lost Oars;
- start watch stores `watch.learner_stream`;
- submit-answer ignores any client-supplied stream and uses watch session;
- finish-watch ignores any client-supplied stream and uses watch session;
- progress, Lost Oars, skip cleanup, and resolve Lost Oar use the selected
  stream;
- answer-log admin default may remain `all`, but learner UI never uses `all`.

UI and localization:

- selector appears between level copy and level cards;
- existing user can start RU-source watch without modal setup;
- selected stream is visible on level select, watch side panel, summary, and
  Lost Oars;
- no option label says or implies "interface language";
- seven supported UI locales have all selector keys;
- English fallback covers missing keys;
- `en-US` does not select English-native;
- `fr-FR` or blocked language API falls back to English UI and RU-source;
- mobile widths show no horizontal overflow;
- disabled/unavailable stream is not visually actionable.

Privacy:

- selector markup and API responses do not expose email, player identity,
  session id, CSRF value, cookies, local login code, or private config;
- reports and smoke output do not include secrets.

## Required Future Commands

Minimum command gate for implementation PR/sprint:

```text
php -l public/api/captain-ether/stream-preference.php
php -l public/api/captain-ether/_learner-streams.php
php -l public/api/captain-ether/start-watch.php
php -l public/api/captain-ether/progress.php
php -l public/api/captain-ether/lost-oars.php
php -l public/api/captain-ether/skip-cleanup.php
php -l public/api/captain-ether/resolve-lost-oar.php
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
node --check public/assets/app.js
node content/captain-ether/tools/check-pwa-i18n.mjs
git diff --check
```

Browser/mobile gate:

- desktop screenshot of level selector;
- mobile screenshot at narrow width;
- locale smoke for `en`, `ru`, `de`, `it`, `es`, `sr`, `zh`;
- unsupported locale fallback smoke.

## Missing Test Cases

No blocking missing cases.

Implementation task should add concrete smoke assertions for the new
`stream-preference.php` endpoint and selector i18n keys. Current contract is
sufficiently specific for those tests to be written.

## Owner Route For Blockers

Future blocker routing:

- selector placement or mobile overflow -> UX HUD Designer;
- copy length or locale fallback -> Localization Architect;
- API availability, preference storage, or cache behavior -> Director-Engineer;
- English-native public release authorization -> Director-Engineer / Director
  decision, not QA;
- content quality of English-native Batch 006 -> Content Producer, Sea Speak
  Linguist, and QA under a separate content release gate.

## Implementation Readiness Decision

PASS for future local implementation planning.

This QA PASS does not authorize:

- runtime implementation in this sprint;
- public English-native release;
- production deploy;
- router/registry changes;
- starter merge;
- auth/platform edits.

## Result

PASS: Combined UX, localization, and API/UI contracts are testable and have
clear failure conditions. The next sprint may implement the selector locally if
Director explicitly opens an implementation sprint.

Changed files in this role task:

- `content/captain-ether/roles/qa/reports/task-ce-0022-public-stream-selector-contract-qa-2026-05-28.md`
