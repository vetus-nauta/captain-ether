# TASK-CE-0149 Starter Duplicate Accepted Answers Cleanup

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether starter hardening only
Status: DONE / PASS / READY_FOR_PRODUCTION_SYNC

## Target

Remove historical duplicate `accepted_answers` entries that normalize to the same
PHP matcher key and caused the known validator `WARN (9)`.

## Changes

Removed `9` redundant accepted-answer strings from `content/captain-ether/starter.json`.

Kept `securite` / `sécurité` variants untouched where PHP `normalize_answer` does
not treat them as duplicates.

## Result

```text
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
php_normalized_duplicates=0
validator=PASS without WARN
api_smoke=PASS checks=334
production_deploy=not_run
result=READY_FOR_PRODUCTION_SYNC
```
