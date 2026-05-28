# Sprint Closure: CE-SPRINT-0019 Public Stream Selector Contract

Date: 2026-05-28
Owner: Director Ether / Captain Ether
Sprint type: report-first contract

## Status

PASS

`CE-SPRINT-0019 Public Stream Selector Contract` is closed. The future public
`Practice stream` selector has a testable UX, localization, API/UI, and QA
contract.

No runtime/API/UI/tool code, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, player data, sessions, cookies, CSRF, email, or secrets were
changed in this contract sprint.

## Accepted Reports

Director analysis and sprint plan:

```text
content/captain-ether/roles/director-engineer/reports/director-analysis-public-stream-selector-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-2026-05-28.md
```

Role reports:

```text
content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/task-ce-0021-public-stream-selector-api-ui-contract-2026-05-28.md
content/captain-ether/roles/qa/reports/task-ce-0022-public-stream-selector-contract-qa-2026-05-28.md
```

## Accepted Contract Decisions

- Selector placement: Captain Ether level-select screen, after intro copy and
  before level cards.
- UX shape: compact non-blocking mode selector, not a modal or mandatory
  first-run gate.
- Default: `ru_source`.
- Locale rule: UI locale never selects learner stream.
- Existing users: no interruption and no destructive migration.
- Switching stream: explicit, reversible, and progress-safe.
- Watch behavior: running watches use the stream stored in the watch session.
- Summary and Lost Oars: show and query the selected/current stream.
- Admin answer-log: `all` remains admin-only and is not exposed to learner UI.
- Availability: backend remains authoritative.
- Public English-native: still requires separate Director release decision.
- Storage recommendation: authenticated server-side preference bucket
  `captain_ether_stream_preferences`.
- API recommendation: add `stream-preference.php` for authenticated preference
  hydration/update.
- Cache rule: bump service worker cache if `app.js` or `app.css` changes.

## Not Authorized

This sprint does not authorize:

- runtime implementation;
- production deploy;
- router or registry changes;
- auth/platform edits;
- Watch Officer or Nav Desk work;
- `starter.json` merge;
- Batch 006 release or content status change;
- public English-native availability.

## Next Summit

Recommended next implementation summit, only if Director explicitly opens it:

```text
CE-BETA-1.1-LOCAL-STREAM-SELECTOR-IMPLEMENTATION
```

Expected first task number range:

```text
TASK-CE-0023+
```

Initial implementation should remain local and gated:

- implement selector UI and i18n keys;
- implement authenticated stream preference endpoint/storage;
- preserve `ru_source` default;
- keep `english_native` unavailable to public users unless a separate release
  decision changes backend availability;
- expand API smoke and mobile/i18n checks.

## Closure Decision

PASS: CE-SPRINT-0019 is accepted as a contract sprint. The project may move to
a separate local implementation sprint with clear boundaries and QA gates.

Changed files in this closure:

- `content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-closed-2026-05-28.md`
