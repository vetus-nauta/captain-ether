# CE-SPRINT-0054 Batch 008 Merge Preparation

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: MERGED LOCALLY / PASS

## Sprint Purpose

Merge Batch 008 VTS / Port Control into the local playable Captain Ether corpus
and regression source after QA acceptance.

This sprint does not approve production deploy.

## Inputs Accepted

- Content draft:
  `content/captain-ether/batches/batch-008-vts-port-control-basics.json`
- Content Producer report:
  `content/captain-ether/roles/content-producer/reports/batch-008-vts-port-control-basics-card-2026-06-01.md`
- Linguist review:
  `content/captain-ether/roles/sea-speak-linguist/reports/batch-008-vts-port-control-risk-review-2026-06-01.md`
- Engineering gate:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0052-batch-008-engineering-gate-2026-06-01.md`
- QA acceptance:
  `content/captain-ether/roles/qa/reports/batch-008-vts-port-control-acceptance-qa-2026-06-01.md`

## Changed Content

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-008-vts-port-control-basics.json`
- `content/captain-ether/roles/director-engineer/tasks/task-ce-0054-batch-008-merge-preparation-2026-06-01.md`
- `content/captain-ether/roles/director-engineer/reports/sprint-ce-0054-batch-008-merge-preparation-2026-06-01.md`

## Merge Notes

- Added `50` Batch 008 items to playable `starter.json`.
- Converted `50` Batch 008 QA note sets into regression entries.
- Added `10` executable dangerous-pair groups to regression.
- Added `9` new grammar patterns.
- Removed `qa_notes` from playable items.
- Marked Batch 008 status as `merged`.
- No matcher/API/UI/runtime/config change was made.

## Final Local State

Playable content:

| Metric | Count |
| --- | ---: |
| Items | `355` |
| Grammar patterns | `124` |
| Scenarios | `2` |

Type counts:

| Type | Count |
| --- | ---: |
| `word` | `70` |
| `short_expression` | `103` |
| `phrase` | `182` |

Level counts:

| Level | Count |
| --- | ---: |
| `beginner` | `116` |
| `intermediate` | `164` |
| `advanced` | `75` |

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

Regression source:

| Metric | Count |
| --- | ---: |
| QA item entries | `355` |
| Should-accept examples | `926` |
| Should-reject examples | `1083` |
| Dangerous minimal-pair groups | `77` |
| Dangerous must-accept examples | `240` |
| Dangerous must-reject examples | `510` |

## Checks Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Result:

```text
PASS
Starter items: 355
Grammar patterns: 124
Regression QA items: 355
Should-accept: 926
Should-reject: 1083
Dangerous pairs: 77
Batch status: merged
Batch target_text: 50
Batch should_accept: 109
Batch should_reject: 150
Batch danger_must_accept: 39
Batch danger_must_reject: 117
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
starter_items=355
grammar_patterns=124
qa_items=355
should_accept=926
should_reject=1083
dangerous_pairs=77
batch_status=merged
batch_dangerous_pairs=10
qa_notes_in_starter=0
duplicate_starter_ids=0
duplicate_qa_ids=0
duplicate_pattern_ids=0
vts_items=50
```

## Scope Preserved

No production deploy, Atlas config, Atlas data write, auth/platform change,
router/registry change, Watch Officer, Nav Desk, API/runtime, matcher, UI,
secrets, sessions, cookies, CSRF, SMTP, player email, or player identity data
was changed.

## Next Gate

Open `TASK-CE-0055` post-merge QA:

```text
Owner: QA
Goal: independently verify merged playable corpus and regression after Batch
008 merge, including VTS / port-control reachability and dangerous-pair
coverage.
Forbidden: production deploy, Atlas config/data writes, auth/platform,
router/registry, Watch Officer, Nav Desk, matcher/API/UI changes, secrets.
```
