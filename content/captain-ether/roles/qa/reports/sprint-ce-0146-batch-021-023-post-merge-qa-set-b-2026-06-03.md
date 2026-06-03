# CE-SPRINT-0146 Batch 021-023 Post-Merge QA Set B

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether local/GitHub post-merge QA only
Status: PASS / READY_FOR_PRODUCTION_SYNC_DECISION

## Baseline Under Test

```text
starter_items=830
grammar_patterns=411
qa_items=830
should_accept=1773
should_reject=2522
dangerous_pairs=193
danger_must_accept=642
danger_must_reject=1404
batch_021_status=merged
batch_022_status=merged
batch_023_status=merged
```

## Checks Run

```text
Full validator: PASS with known starter WARN (9), runs=60
Batch 021 validator: PASS, status=merged, runs=60
Batch 022 validator: PASS, status=merged, runs=60
Batch 023 validator: PASS, status=merged, runs=60
API smoke: PASS captain-ether-api-smoke checks=334
Post-merge Set B matcher/integrity: PASS items=100 accept=139 reject=301 qa_notes_in_starter=0
Production route read-only: HTTP 200
Production anonymous start-watch read-only: HTTP 401 Login required
```

The known `WARN (9)` entries are historical duplicate accepted-answer warnings in
older starter content. They were present before Set B and are not introduced by
Batch 021-023.

## Acceptance Result

```text
PASS_FOR_PRODUCTION_SYNC_DECISION
```

Set B is locally stable and can move to an explicit production sync decision
sprint. This QA task does not authorize or run production deployment.

## Production Boundary

Production was read-only checked only. No deploy script was run.

Current intentional drift:

```text
local_github_content_baseline=Batch 023 / 830 items
production_content_baseline=Batch 020 / 730 items
```

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
