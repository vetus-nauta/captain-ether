# CE-SPRINT-0139 Batches 021-023 Vocabulary Expansion Summary

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether draft vocabulary expansion only
Status: CLOSED / DRAFTS_READY_FOR_LINGUIST_REVIEW

## Source State

```text
playable_starter_items=650
playable_grammar_patterns=237
playable_qa_items=650
playable_dangerous_pairs=152
existing_draft_backlog_items=80
existing_draft_batches=batch-019,batch-020
```

## New Draft Expansion

```text
Batch 021 VHF procedure/message markers: +35 items
Batch 022 navigation hazards/buoyage/visibility: +35 items
Batch 023 emergency/medical response: +30 items
```

Total added in this sequence:

```text
new_draft_items=100
new_grammar_patterns=100
new_dangerous_minimal_pairs=20
new_should_accept=139
new_should_reject=300
```

Combined draft backlog after Batch 019-023:

```text
draft_backlog_items=180
draft_backlog_grammar_patterns=172
draft_backlog_dangerous_minimal_pairs=41
```

If Batch 019-023 later pass review/gate/merge, expected playable baseline:

```text
starter_items: 650 -> 830
grammar_patterns: 237 -> 409
qa_items: 650 -> 830
dangerous_pairs: 152 -> 193
```

This sprint did not merge any draft, so current playable local/GitHub/production
counts remain:

```text
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
```

## Created Batches

```text
content/captain-ether/batches/batch-021-vhf-procedure-message-markers-vocabulary.json
content/captain-ether/batches/batch-022-navigation-hazards-buoyage-visibility-vocabulary.json
content/captain-ether/batches/batch-023-emergency-medical-response-vocabulary.json
```

## Checks

```text
Batch 021 validator: PASS
Batch 022 validator: PASS
Batch 023 validator: PASS
Known starter WARN only: WARN (9)
Batch 021-023 new warnings: 0
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS
PHP syntax guard: PASS
JS syntax guard: PASS
ID uniqueness across starter + Batch 019-023: PASS
Grammar id uniqueness across starter + Batch 019-023: PASS
Secret scan: PASS
Diff whitespace check: PASS
```

## Next Plan

Recommended sequence:

```text
1. Linguist review: Batch 019, 020, 021, 022, 023.
2. Engineering gate after review corrections.
3. Merge in smaller chunks, not all 180 at once:
   - merge set A: Batch 019+020 or <=80 items
   - post-merge QA
   - production sync
   - merge set B: remaining reviewed batches
4. Keep production untouched until a dedicated production sync task is opened.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
