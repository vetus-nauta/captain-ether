# Director Analysis: Public Stream Selector Contract

Date: 2026-05-28
Role: Director Ether / Captain Ether
Mode: director decision and report-first sprint start

## Status

PASS. Next logical summit selected.

This report does not approve UI/API implementation, public release, production
deploy, router/registry change, or Batch 006 merge.

## Previous Summit

Closed summit:

```text
CE-BETA-1.1-INT-EN-STREAM
```

Result:

- hidden/admin-only `english_native` stream works locally end to end;
- Batch 006 remains separate from `starter.json`;
- legacy Captain Ether route remains `ru_source`;
- progress, Lost Oars, skip cleanup, and answer logs are stream-scoped;
- local smoke passes with `checks=271`.

## Next Summit

Selected summit:

```text
CE-BETA-1.1-PUBLIC-STREAM-SELECTOR-CONTRACT
```

Meaning:

```text
The public Practice Stream selector is specified, localized, storage-scoped,
and QA-testable before implementation.
```

This is a contract summit, not an implementation summit.

## Why This Is The Next Logical Bar

The API can now run English-native internally. The next risk is product
confusion, not backend capability.

The public selector must prevent these failures:

- treating English UI locale as English-native learner stream;
- enrolling unsupported-language users into English-native because UI falls
  back to English;
- mixing RU-source and English-native progress;
- showing Lost Oars from the wrong source stream;
- presenting natural English mistakes as "bad English" instead of controlled
  Sea Speak practice;
- making the first screen heavier than the current short-watch flow;
- shipping selector copy that overflows on mobile in `de`, `es`, `sr`, or `zh`.

## Director Product Decisions

1. Current `/games/captain-ether` remains the public Captain Ether route.
2. Existing players must not be forced through a blocking selector.
3. Public selector model is opt-in, visible, and reversible.
4. Default public learner stream remains `ru_source`.
5. `english_native` must never be selected from `locale === "en"`.
6. Unsupported UI locale fallback to English must not select `english_native`.
7. Stream selection must be stored separately from UI locale.
8. Stream switching must not delete or overwrite old progress.
9. Watch, summary, Lost Oars, and answer-log surfaces must carry stream context.
10. Public release requires a later local implementation sprint plus QA.

## Required Contract Outputs

The report-first sprint must produce:

- UX/HUD selector contract.
- Localization copy and fallback contract.
- Director-Engineer API/UI implementation contract.
- QA contract review and smoke matrix.

## Sprint Prepared

Prepared sprint:

```text
CE-SPRINT-0019 Public Stream Selector Contract
```

Sprint plan:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-2026-05-28.md
```

Tasks:

```text
content/captain-ether/roles/ux-hud-designer/tasks/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md
content/captain-ether/roles/localization-architect/tasks/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md
content/captain-ether/roles/director-engineer/tasks/task-ce-0021-public-stream-selector-api-ui-contract-2026-05-28.md
content/captain-ether/roles/qa/tasks/task-ce-0022-public-stream-selector-contract-qa-2026-05-28.md
```

## Non-Goals

Do not implement in this sprint:

- visible selector code;
- profile/preference storage patch;
- production deploy;
- public route or registry change;
- auth/platform changes;
- Watch Officer or Nav Desk changes;
- `starter.json` merge for Batch 006;
- matcher expansion;
- content edits.

## Definition Of Done

This summit is reached only when:

- UX/HUD defines selector placement, state behavior, and mobile constraints.
- Localization defines final copy model and required keys for all 7 UI locales.
- Director-Engineer defines API/UI storage contract and implementation scope.
- QA accepts the combined contract as testable.
- Remaining Director decisions are explicit.

## Next Command

Start report-only task sequence:

1. `TASK-CE-0019` UX/HUD contract.
2. `TASK-CE-0020` Localization contract.
3. `TASK-CE-0021` Director-Engineer API/UI contract.
4. `TASK-CE-0022` QA review.

