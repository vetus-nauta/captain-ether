# CE-SPRINT-0066 Batch 010 Merge Preparation

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: MERGED LOCALLY / PASS

## Sprint Purpose

Merge Batch 010 Distress / Mayday into the local playable Captain Ether corpus
and regression source after QA acceptance.

This sprint does not approve production deploy.

## Merge Notes

- Added `50` Batch 010 items to playable `starter.json`.
- Converted `50` Batch 010 QA note sets into regression entries.
- Added `10` executable dangerous-pair groups to regression.
- Added `12` new grammar patterns.
- Removed `qa_notes` from playable items.
- Marked Batch 010 status as `merged`.
- No matcher/API/UI/runtime/config change was made.

## Final Local State

Playable content:

| Metric | Count |
| --- | ---: |
| Items | `455` |
| Grammar patterns | `148` |
| Scenarios | `2` |

Type counts:

| Type | Count |
| --- | ---: |
| `word` | `90` |
| `short_expression` | `137` |
| `phrase` | `228` |

Level counts:

| Level | Count |
| --- | ---: |
| `beginner` | `165` |
| `intermediate` | `209` |
| `advanced` | `81` |

Branch counts:

| Branch | Count |
| --- | ---: |
| unbranched legacy starter | `40` |
| `core_radio` | `50` |
| `marina_harbour` | `50` |
| `navigation_reports` | `50` |
| `safety_securite` | `40` |
| `urgency_panpan` | `25` |
| `traffic_collision` | `50` |
| `vts_port_control` | `50` |
| `onboard_operations` | `50` |
| `distress_mayday` | `50` |

Regression source:

| Metric | Count |
| --- | ---: |
| QA item entries | `455` |
| Should-accept examples | `1126` |
| Should-reject examples | `1383` |
| Dangerous minimal-pair groups | `97` |
| Dangerous must-accept examples | `308` |
| Dangerous must-reject examples | `714` |

## Checks Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Result:

```text
PASS
Starter items: 455
Grammar patterns: 148
Regression QA items: 455
Should-accept: 1126
Should-reject: 1383
Dangerous pairs: 97
Batch status: merged
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 33
Batch danger_must_reject: 99
Known warnings: WARN (9)
```

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

```text
PASS captain-ether-api-smoke checks=334
```

```sh
node --check public/assets/app.js
```

Result: PASS.

Structured JSON/count preflight:

```text
starter_items=455
grammar_patterns=148
qa_items=455
should_accept=1126
should_reject=1383
dangerous_pairs=97
batch_status=merged
batch_dangerous_pairs=10
qa_notes_in_starter=0
duplicate_starter_ids=0
duplicate_qa_ids=0
duplicate_pattern_ids=0
distress_mayday_items=50
```

## Scope Preserved

No production deploy, Atlas config, Atlas data write, auth/platform change,
router/registry change, Watch Officer, Nav Desk, API/runtime, matcher, UI,
secrets, sessions, cookies, CSRF, SMTP, player email, or player identity data
was changed.

## Next Gate

Open `TASK-CE-0067` post-merge QA:

```text
Owner: QA
Goal: independently verify merged playable corpus and regression after Batch
010 merge, including Distress / Mayday reachability and dangerous-pair
coverage.
Forbidden: production deploy, Atlas config/data writes, auth/platform,
router/registry, Watch Officer, Nav Desk, matcher/API/UI changes, secrets.
```
