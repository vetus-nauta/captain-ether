# CE-SPRINT-0127 Batch 018 Post-Merge QA

Date: 2026-06-02
Owner: QA
Scope: Captain Ether local merged M4 baseline only
Status: QA PASS

## Decision

```text
ACCEPTED FOR NEXT GATE / PASS
```

Batch 018 is correctly present in the local merged M4 baseline and is ready for
the next gate. This QA task does not authorize production deploy, and no
production state was changed.

## Input Reviewed

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0126-batch-018-merge-preparation-2026-06-02.md
```

## Local Baseline Counts

```text
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
batch_018_status=merged
```

Regression totals:

```text
target_text=650
should_accept=1481
should_reject=1981
danger_must_accept=467
danger_must_reject=1053
```

Batch 018 totals:

```text
items=25
grammar_patterns=23
dangerous_pairs=6
target_text=25
should_accept=46
should_reject=79
danger_must_accept=24
danger_must_reject=28
```

## Required Checks

```text
validator PASS
batch validator PASS
API smoke PASS captain-ether-api-smoke checks=334
JS syntax guard PASS
PHP syntax guard PASS
qa_notes_in_starter=0
corpus counts match merge report PASS
Batch 018 items present in starter=25/25
Batch 018 QA entries present=25/25
Batch 018 dangerous pairs present=6/6
Batch 018 grammar patterns present=23/23
post-merge targeted matcher PASS cases=125
```

Known validator warnings remain unchanged from the existing corpus:

```text
WARN (9) duplicate accepted_answers after normalization
```

These warnings are pre-existing corpus warnings and are not a Batch 018 blocker
for this gate.

## Integrity Result

```text
CE-0127 integrity
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
batch_status=merged
qa_notes_in_starter=0
batch_items_present_in_starter=25/25
batch_qa_entries_present=25/25
batch_grammar_present=23/23
batch_dangerous_pairs_present=6/6
PASS ce0127_integrity
```

## Matcher Result

```text
PASS post_merge_batch018_targeted cases=125
```

The targeted matcher sweep covered all Batch 018 QA accept/reject examples:

```text
should_accept=46
should_reject=79
total_cases=125
```

## Scope Preserved

No matcher implementation, API/runtime code, UI/assets, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.

## Next Gate

Open the next Director-Engineer task for Batch 018 production sync/deploy scope
decision. Production should only be touched after an explicit deploy-sync task
is opened.
