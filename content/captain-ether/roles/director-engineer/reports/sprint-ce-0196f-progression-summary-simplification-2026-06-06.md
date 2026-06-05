# CE-0196F Progression Evidence And Summary Simplification

Date: 2026-06-06
Scope: Captain Ether only
Status: IMPLEMENTED_LOCAL_QA_PASS_PRODUCTION_UNCHANGED

## Decision

Simplified the watch-finish summary so the player sees one clear next action and plain-language evidence instead of technical pressure maps.

The backend still returns legacy pressure maps for compatibility and QA visibility, but marks them as not player-facing:

```text
show_pressure_maps=false
```

## Runtime Contract Added

`finish-watch.php` summary now includes:

```text
soft_accept
```

`debrief` now includes:

```text
primary_action=lost_oars | recommended_watch
secondary_action=lost_oars | ""
recommendation_copy_key=summary.recommendation.<next_step>
evidence=[{kind,count,...}]
show_pressure_maps=false
```

## UX Behavior

Player-facing summary now shows:

- clean calls;
- hint calls;
- understood-but-non-standard calls;
- revision load;
- final score;
- recommended level/focus/pace/length;
- one plain explanation block;
- one primary CTA.

The secondary Lost Oars button appears only when it is genuinely secondary. If the required next step is revision, there is no duplicate-looking second button.

## Files Changed

- `public/api/captain-ether/finish-watch.php`
- `public/api/captain-ether/_learner-streams.php`
- `public/assets/app.js`
- `content/captain-ether/tools/smoke-start-watch-api.php`

## QA Results

Syntax and whitespace:

```text
PHP lint PASS: finish-watch.php
PHP lint PASS: _learner-streams.php
PHP lint PASS: smoke-start-watch-api.php
JS syntax PASS: public/assets/app.js
git diff --check PASS
```

Validator:

```text
PASS
starter_items=1000
qa_items=1000
should_accept=1943
should_soft_accept=5
should_reject=3032
dangerous_pairs=243
stage0_allowed=43
stage0_bad_runs=0
```

API smoke:

```text
PASS captain-ether-api-smoke checks=347
```

New smoke coverage:

```text
finish soft accept counter present
finish debrief primary action
finish debrief evidence
finish debrief hides pressure maps
```

## Production Status

Production unchanged. No deploy was run.

Production sync remains a separate explicit task after local/GitHub release-candidate QA.

## Next Slice

```text
CE-0196G Release-Candidate QA And Production Sync Decision
```
