# Sprint Closure: CE-SPRINT-0017 Hidden English-Native Stream

Date: 2026-05-28
Role: Director Ether / Captain Ether
Mode: acceptance

## Decision

Status: PASS / Closed.

`CE-SPRINT-0017` is accepted as complete for local hidden/admin-only
English-native stream readiness.

## Accepted Reports

Implementation:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md
```

QA:

```text
content/captain-ether/roles/qa/reports/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md
```

## Accepted Result

The next summit was reached:

```text
CE-BETA-1.1-INT-EN-STREAM
```

Meaning:

- hidden/admin-only English-native stream works locally end to end;
- Batch 006 stays separate from `starter.json`;
- legacy Captain Ether default remains `ru_source`;
- English UI locale and unsupported-locale English fallback do not select
  English-native content;
- progress, Lost Oars, skip cleanup, and answer logs are stream-scoped;
- admin answer-log omitted stream is `all`;
- `player_hash` is allowed only in admin answer-log.

## Verification Accepted

Accepted QA command results:

```text
PASS captain-ether-api-smoke checks=271
```

```text
validate-captain-ether.php --batch=content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
PASS
```

Known non-blocking validator warnings remain:

```text
WARN (9) duplicate accepted_answers after normalization
```

Patch hygiene:

```text
git diff --check
PASS
```

## Scope Preserved

No public selector was approved or implemented.

No production deploy, FTP, router/registry change, auth/platform change, Watch
Officer/Nav Desk work, production config change, private config read/write,
secret exposure, or Batch 006 merge was performed.

## Next Director Choice

Recommended next summit:

```text
CE-BETA-1.1-PUBLIC-STREAM-SELECTOR-CONTRACT
```

Recommended next work is report-first:

1. UX/HUD + Localization public selector contract for `Practice stream`.
2. Director-Engineer API/UI contract for storing last selected stream.
3. QA browser/mobile matrix for selector copy and stream persistence.

Alternative: keep English-native internal and gather admin QA answer-log
evidence before public selector work.

