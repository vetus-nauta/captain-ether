# CE-SPRINT-0048 Batch 007 Merge Preparation

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: MERGED LOCALLY / PASS

## Sprint Purpose

Merge Batch 007 Traffic / Collision into the local playable Captain Ether
corpus and regression source after QA acceptance.

This sprint does not approve production deploy.

## Inputs Accepted

- Content draft:
  `content/captain-ether/batches/batch-007-traffic-collision-basics.json`
- Content Producer report:
  `content/captain-ether/roles/content-producer/reports/batch-007-traffic-collision-basics-card-2026-06-01.md`
- Linguist review:
  `content/captain-ether/roles/sea-speak-linguist/reports/batch-007-traffic-collision-risk-review-2026-06-01.md`
- Engineering gate:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0046-batch-007-engineering-gate-2026-06-01.md`
- QA acceptance:
  `content/captain-ether/roles/qa/reports/batch-007-traffic-collision-acceptance-qa-2026-06-01.md`

## Changed Content

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-007-traffic-collision-basics.json`
- `content/captain-ether/roles/director-engineer/tasks/task-ce-0048-batch-007-merge-preparation-2026-06-01.md`
- `content/captain-ether/roles/director-engineer/reports/sprint-ce-0048-batch-007-merge-preparation-2026-06-01.md`

## Merge Notes

- Added `50` Batch 007 items to playable `starter.json`.
- Converted `50` Batch 007 QA note sets into regression entries.
- Added `10` executable dangerous-pair groups to regression.
- Added `3` new grammar patterns.
- Did not duplicate existing grammar pattern `passing_intention_basic`.
- Removed `qa_notes` from playable items.
- Marked Batch 007 status as `merged`.
- Removed five normalized duplicate accepted-answer variants introduced by the
  batch merge; the accepted meanings remain covered by normalized canonical
  forms.
- No matcher/API/UI/runtime/config change was made.

## Final Local State

Playable content:

| Metric | Count |
| --- | ---: |
| Items | `305` |
| Grammar patterns | `115` |
| Scenarios | `2` |

Type counts:

| Type | Count |
| --- | ---: |
| `word` | `60` |
| `short_expression` | `86` |
| `phrase` | `159` |

Level counts:

| Level | Count |
| --- | ---: |
| `beginner` | `97` |
| `intermediate` | `137` |
| `advanced` | `71` |

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

Traffic / collision module counts:

| Module | Count |
| --- | ---: |
| `risk_of_collision` | `4` |
| `overtaking_crossing` | `12` |
| `passing_arrangements` | `14` |
| `cpa_tcpa` | `11` |
| `course_speed_action` | `9` |

Regression source:

| Metric | Count |
| --- | ---: |
| QA item entries | `305` |
| Should-accept examples | `817` |
| Should-reject examples | `933` |
| Dangerous minimal-pair groups | `67` |
| Dangerous must-accept examples | `201` |
| Dangerous must-reject examples | `393` |

## Checks Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-007-traffic-collision-basics.json
```

Result:

```text
PASS
Starter items: 305
Grammar patterns: 115
Regression QA items: 305
Should-accept: 817
Should-reject: 933
Dangerous pairs: 67
Batch status: merged
Batch should-accept: 106
Batch should-reject: 150
Batch danger must-accept: 44
Batch danger must-reject: 132
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
starter_items=305
grammar_patterns=115
qa_items=305
should_accept=817
should_reject=933
dangerous_pairs=67
batch_status=merged
batch_dangerous_pairs=10
qa_notes_in_starter=0
```

## Scope Preserved

No production deploy, Atlas config, Atlas data write, auth/platform change,
router/registry change, Watch Officer, Nav Desk, API/runtime, matcher, UI,
secrets, sessions, cookies, CSRF, SMTP, player email, or player identity data
was changed.

## Next Gate

Open `TASK-CE-0049` post-merge QA:

```text
Owner: QA
Goal: independently verify merged playable corpus and regression after Batch
007 merge, including traffic/collision reachability and dangerous-pair
coverage.
Forbidden: production deploy, Atlas config/data writes, auth/platform,
router/registry, Watch Officer, Nav Desk, matcher/API/UI changes, secrets.
```
