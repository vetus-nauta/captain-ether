# CE-SPRINT-0131 Batch 020 Safety Equipment Deck Operations Vocabulary Draft

Date: 2026-06-03
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether Batch 020 long vocabulary draft only
Status: DRAFTED / READY_FOR_LINGUIST_REVIEW

## Source State

Started from Batch 018 production-synced playable baseline plus Batch 019 draft:

```text
playable_starter_items=650
playable_grammar_patterns=237
playable_qa_items=650
playable_dangerous_pairs=152
batch_019_status=draft
batch_019_items=30
```

## Output

```text
content/captain-ether/batches/batch-020-safety-equipment-deck-operations-vocabulary.json
content/captain-ether/roles/content-producer/reports/batch-020-safety-equipment-deck-operations-vocabulary-card-2026-06-03.md
```

## Draft Expansion

```text
new_draft_items=50
new_words=15
new_short_expressions=15
new_phrases=20
new_grammar_patterns=47
new_dangerous_minimal_pairs=13
new_should_accept=100
new_should_reject=150
new_danger_must_accept=49
new_danger_must_reject=98
```

If Batch 020 later merges by itself, expected playable corpus increase:

```text
starter_items: 650 -> 700
grammar_patterns: 237 -> 284
qa_items: 650 -> 700
dangerous_pairs: 152 -> 165
```

If Batch 019 and Batch 020 both later merge, expected playable corpus increase:

```text
starter_items: 650 -> 730
grammar_patterns: 237 -> 309
qa_items: 650 -> 730
dangerous_pairs: 152 -> 173
```

This sprint did not merge the draft, so current playable local/GitHub/production
counts remain:

```text
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
```

## Vocabulary Coverage

```text
safety equipment: lifebuoy, lifejacket, fire extinguisher, first aid kit
pilot/boarding transfer: pilot ladder, boarding ladder, gangway net
deck tools and areas: boat hook, foredeck, companionway
hull/fuel/bilge systems: seacock, fuel shutoff, bilge alarm
emergency steering: emergency tiller
commands: rig, recover, prepare, secure, clear, close, isolate, fit, muster, count
phrases: side-specific pilot ladder, equipment readiness, evacuation access,
headcount, missing-person report, pilot transfer status
```

## Checks

```text
Batch validator: PASS
Full starter/regression validator: PASS
Known starter WARN only: WARN (9)
Batch 020 warnings: 0
JSON parse: PASS
API smoke: PASS captain-ether-api-smoke checks=334
PHP syntax guard: PASS
JS syntax guard: PASS
Duplicate ids against starter: 0
Duplicate grammar ids against starter: 0
Duplicate ids against Batch 019: 0
Duplicate grammar ids against Batch 019: 0
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.

## Next Gate

Open `TASK-CE-0132 Batch 020 Sea Speak Linguist Review` before engineering gate,
merge, post-merge QA, or production deploy.
