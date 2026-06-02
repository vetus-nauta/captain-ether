# CE-SPRINT-0099 Batch 014 Post-Merge QA

Date: 2026-06-02
Task: `TASK-CE-0099`
Owner: QA
Scope: Captain Ether local merged M4 baseline only
Status: PASS

## Target

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-014-medical-repair-basics.json
```

## Result

```text
PASS
starter_items=550
grammar_patterns=184
qa_items=550
should_accept=1312
should_reject=1670
dangerous_pairs=128
danger_must_accept=388
danger_must_reject=913
batch_status=merged
batch_items_in_starter=25/25
batch_qa_items=25/25
qa_notes_in_starter=0
```

## Checks

```text
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JS syntax guard: PASS
Corpus counts match merge report: PASS
Batch 014 presence in starter: PASS
Batch 014 QA entries present: PASS
Post-merge targeted matcher: PASS post_merge_qa_batch014_targeted cases=14
Secret scan on changed content inputs: PASS
```

## Targeted Boundary Cases

```text
Engine restarted, temporary repair holding. -> accept
Engine restarted, temporary repair is holding. -> accept
Engine restarted assistance no longer required -> reject for Batch 014 item
Engine failed assistance required -> reject
Engine restarted rescue required -> reject
bilge pump running -> accept
bilge pump is running -> accept
fire pump running -> reject
Leak controlled, bilge pump running. -> accept
Leak controlled fire pump running -> reject
Medical evacuation not required, advice needed. -> accept
Medical evacuation required advice needed -> reject
Medical situation, no immediate danger. -> accept
Mayday medical situation -> reject
```

## QA Decision

Batch 014 post-merge QA is accepted locally.

A separate controlled production sync task may be opened to synchronize
production with the new 550-item M4 baseline.

## Scope Preserved

QA did not edit matcher, API/runtime, UI, Atlas, auth, router, registry, Watch
Officer, Nav Desk, production config, deploy/FTP state, secrets, sessions,
cookies, CSRF, SMTP, player email, player identity data, WebStorm DB console, or
WebStorm datasource.
