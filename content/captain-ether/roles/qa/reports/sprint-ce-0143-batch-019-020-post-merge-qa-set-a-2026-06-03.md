# CE-SPRINT-0143 Batch 019-020 Post-Merge QA Set A

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether local/GitHub post-merge QA only
Status: PASS / READY_FOR_PRODUCTION_SYNC_DECISION

## Baseline Under Test

```text
starter_items=730
grammar_patterns=311
qa_items=730
should_accept=1634
should_reject=2221
dangerous_pairs=173
danger_must_accept=542
danger_must_reject=1203
batch_019_status=merged
batch_020_status=merged
```

Remaining unmerged draft backlog:

```text
batch_021_status=linguist_reviewed
batch_022_status=linguist_reviewed
batch_023_status=linguist_reviewed
remaining_draft_items=100
remaining_draft_grammar_patterns=100
remaining_draft_dangerous_pairs=20
```

## Checks Run

```text
Full validator: PASS with known starter WARN (9), runs=60
Batch 019 validator: PASS, status=merged, runs=60
Batch 020 validator: PASS, status=merged, runs=60
API smoke: PASS captain-ether-api-smoke checks=334
Post-merge Set A matcher/integrity: PASS set_a_items=80 accept=153 reject=240 qa_notes_in_starter=0
Diff whitespace check: PASS
Production route read-only: HTTP 200
Production anonymous start-watch read-only: HTTP 401 Login required
```

The known `WARN (9)` entries are historical duplicate accepted-answer warnings in
older starter content. They were present before Set A and are not introduced by
Batch 019-020.

## Acceptance Result

```text
PASS_FOR_PRODUCTION_SYNC_DECISION
```

Set A is locally stable and can move to an explicit production sync decision
sprint. This QA task does not authorize or run production deployment.

## Production Boundary

Production was read-only checked only. No deploy script was run.

Current intentional drift:

```text
local_github_content_baseline=Batch 020 / 730 items
production_content_baseline=Batch 018 / 650 items
```

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
