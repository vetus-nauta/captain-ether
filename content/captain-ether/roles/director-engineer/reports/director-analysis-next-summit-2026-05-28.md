# Director Analysis: Next Summit And Sprint

Date: 2026-05-28
Role: Director Ether / Captain Ether
Mode: director decision and sprint preparation

## Status

PASS. Next summit selected and next sprint prepared.

No runtime/API/UI/content implementation was performed in this report.

## Current Situation

Captain Ether is past the original Beta 1.0 baseline.

Current local corpus:

- `255` playable RU-source items in `starter.json`.
- `112` grammar patterns.
- `2` scenarios.
- Batches 001-005 are merged into `starter.json`.
- Batch 006 English-native Sea Speak pilot exists as separate
  `draft_internal` JSON and is not merged into `starter.json`.

Current technical gates:

- Beta 1.1 branch-filter local API fixture is accepted as PASS.
- Local API smoke fixture passes with `checks=180`.
- Captain Ether validator passes with known non-blocking `WARN (9)`.
- PWA i18n static gate passes for `7` UI locales.

Current product risk:

- The UI is localized, but the learner content stream is still legacy
  RU-source by default.
- Batch 006 is English-native source prompt to Sea Speak target, and must not
  be selected automatically by `locale === "en"` or unsupported-language
  fallback to English UI.
- Without stream-scoped watch sessions, progress, Lost Oars, and answer logs,
  English-native mistakes would mix with RU-source learner evidence.

## Director Decision

The next summit is:

```text
CE-BETA-1.1-INT-EN-STREAM
```

Meaning:

```text
Hidden/admin-only English-native stream works locally end to end with Batch 006,
without public selector, production deploy, router/registry change, or merge
into starter.json.
```

This is the next highest-value summit because it proves the new learning axis
without risking the existing public Captain Ether route.

## Two QA-Blocked Decisions

QA accepted the hidden stream contract as testable, but required two explicit
Director decisions before implementation.

### Decision 1: `answer-log.php` omitted stream

Director decision:

```text
For admin-only answer-log.php, omitted learner_stream means all streams.
```

Required behavior:

- `answer-log.php` remains admin-only.
- `GET /api/captain-ether/answer-log.php` returns all streams for admin review.
- Response summary must expose an explicit filter marker:
  `filters.learner_stream = "all"`.
- `GET /api/captain-ether/answer-log.php?learner_stream=ru_source` filters to
  legacy RU-source logs.
- `GET /api/captain-ether/answer-log.php?learner_stream=english_native` filters
  to English-native logs.
- Review grouping key must include `learner_stream + item_id`.

Reason:

The answer log is an admin triage surface. Its default should preserve the
existing "show the review queue" behavior while making stream identity explicit
inside each entry and group. Player endpoints keep omitted stream as
`ru_source`.

### Decision 2: `player_hash` policy

Director decision:

```text
player_hash is allowed only in the admin answer-log payload as a pseudonymous
correlation field.
```

Required behavior:

- Player-facing payloads must never include `player_hash`.
- Admin answer-log may include `player_hash`.
- Raw user id, email, session id, cookie, CSRF value, login code, SMTP data,
  private config, token, password, or identity data remain forbidden everywhere.
- QA smoke must treat `player_hash` as explicitly allowed only for
  `answer-log.php` admin responses.

Reason:

The existing admin answer-log already uses a pseudonymous hash. It is useful for
detecting repeated answer patterns without exposing identity. Removing it now
would reduce QA triage value without improving player-facing privacy.

## Sprint Prepared

Prepared sprint:

```text
CE-SPRINT-0017: Hidden English-Native Stream
```

Sprint plan:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-2026-05-28.md
```

Implementation task:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md
```

QA task:

```text
content/captain-ether/roles/qa/tasks/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md
```

## Definition Of Done For Summit

The summit is reached only when all are true:

- Legacy Captain Ether default still behaves as `ru_source`.
- `locale === "en"` and unsupported UI fallback do not select
  `english_native`.
- Admin can start `learner_stream=english_native` locally.
- Non-admin `english_native` start returns `403` with no storage mutation.
- Invalid stream returns `400` with no storage mutation.
- English-native watches load only Batch 006 `draft_internal` items.
- Batch 006 remains outside `starter.json`.
- Watch sessions store `learner_stream`.
- Submit and finish derive stream from the stored watch, not client input.
- Progress, Lost Oars, skip cleanup, and answer logs are stream-scoped.
- `answer-log.php` omitted stream returns all streams for admin, explicitly
  marked as `all`.
- `player_hash` policy matches this report.
- Local smoke fixture passes.
- Validator passes with only accepted warnings.
- No production deploy, router/registry change, auth/platform change,
  Watch Officer/Nav Desk touch, private config touch, or secret exposure.

## Next Command

Execute `TASK-CE-0017` as Director-Engineer implementation. After its report is
written, activate QA on `TASK-CE-0018`.

