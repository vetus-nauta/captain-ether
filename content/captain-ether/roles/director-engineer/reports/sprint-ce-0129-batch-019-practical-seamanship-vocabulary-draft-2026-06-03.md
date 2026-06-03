# CE-SPRINT-0129 Batch 019 Practical Seamanship Vocabulary Draft

Date: 2026-06-03
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether Batch 019 draft only
Status: DRAFTED / READY_FOR_LINGUIST_REVIEW

## Source State

Started from Batch 018 production-synced baseline:

```text
local/GitHub/production aligned for Batch 018
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
```

## Output

```text
content/captain-ether/batches/batch-019-practical-seamanship-vocabulary.json
content/captain-ether/roles/content-producer/reports/batch-019-practical-seamanship-vocabulary-card-2026-06-03.md
```

## Draft Expansion

```text
new_draft_items=30
new_words=10
new_short_expressions=10
new_phrases=10
new_grammar_patterns=27
new_dangerous_minimal_pairs=8
new_should_accept=55
new_should_reject=90
new_danger_must_accept=26
new_danger_must_reject=52
```

If later merged into playable baseline, expected corpus increase will be:

```text
starter_items: 650 -> 680
grammar_patterns: 237 -> 264
qa_items: 650 -> 680
dangerous_pairs: 152 -> 160
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
lee shore / windward side / leeward side
tidal stream / ebb tide / flood tide
fairway / turning basin
black ball / anchor light
keep clear / hold position
make fast / single up lines
heave up anchor / anchor dragging
engine on standby / steerage way
safe to board / not safe to board
```

## Checks

```text
Batch validator: PASS
Full starter/regression validator: PASS
Known starter WARN only: WARN (9)
Batch 019 warnings: 0
JSON parse: PASS
API smoke: PASS captain-ether-api-smoke checks=334
PHP syntax guard: PASS
JS syntax guard: PASS
Duplicate ids against starter: 0
Duplicate grammar ids against starter: 0
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk, production
config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email,
player identity data, WebStorm DB console, or WebStorm datasource was changed.

## Next Gate

Open `TASK-CE-0130 Batch 019 Sea Speak Linguist Review` before engineering gate,
merge, post-merge QA, or production deploy.
