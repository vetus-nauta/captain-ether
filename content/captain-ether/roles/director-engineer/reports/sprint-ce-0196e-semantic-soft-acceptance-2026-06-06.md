# CE-0196E Semantic Soft Acceptance

Date: 2026-06-06
Scope: Captain Ether only
Status: IMPLEMENTED_LOCAL_QA_PASS_PRODUCTION_UNCHANGED

## Decision

Implemented deterministic semantic soft acceptance for selected Captain Ether items.

This is not broad fuzzy matching. A non-standard answer can pass only when the playable item explicitly contains `soft_accept_answers` and `soft_accept_allowed=true`.

## User-Session Findings Covered

- `bring first aid` for `bring first aid kit` is now accepted as understood but non-standard.
- `Clearace granted, follow to the guest pear` style answer for `Clearance granted, proceed to visitor berth.` is now accepted as understood but non-standard.
- `first aid` is still not accepted for the standalone noun `first aid kit`.
- `Clearance granted proceed to fuel berth` is still rejected for visitor-berth clearance.

## Runtime Contract

New match type:

```text
understood_non_standard
```

Scoring:

```text
reason=soft_accept
score_factor=0.8
points=base_points * 0.8
message=Вас поймут. Ниже стандартная форма.
message_key=result.soft.<profile>
```

Behavior:

- Soft accept is correct for watch progression.
- Soft accept is not treated as a hard wrong answer.
- Soft accept does not resolve a previous weak point as clean mastery.
- Soft accept is logged as `soft_accept` for review and standard-form friction analysis.

## Files Changed

- `public/api/captain-ether/_answer-matching.php`
- `public/api/captain-ether/submit-answer.php`
- `public/api/captain-ether/_learner-streams.php`
- `public/api/captain-ether/_answer-logging.php`
- `public/assets/app.js`
- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/tools/validate-captain-ether.php`
- `content/captain-ether/tools/smoke-start-watch-api.php`

## Content Changes

Added item-local `soft_accept_answers` to:

```text
expr_b020_bring_first_aid_kit_001
phrase_b025_clearance_granted_proceed_visitor_berth_001
```

Added regression `should_soft_accept` cases:

```text
should_soft_accept=5
```

The clearance item now has:

```text
strict_smcp_required=false
soft_accept_allowed=true
```

Reason: the prompt is shore-station-origin and the user may communicate the operational meaning while missing standard phrasing. The system accepts meaning with a 20% score reduction and teaches the standard form.

## QA Results

Syntax and JSON:

```text
PHP lint PASS: _answer-matching.php
PHP lint PASS: submit-answer.php
PHP lint PASS: _learner-streams.php
PHP lint PASS: _answer-logging.php
PHP lint PASS: validate-captain-ether.php
PHP lint PASS: smoke-start-watch-api.php
JS syntax PASS: public/assets/app.js
JSON parse PASS: starter.json and accept-reject-qa-pairs.json
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
danger_must_accept=821
danger_must_reject=1789
stage0_allowed=43
stage0_bad_runs=0
```

API smoke:

```text
PASS captain-ether-api-smoke checks=343
```

New smoke coverage:

```text
soft accept first aid command correct
soft accept first aid command type
soft accept first aid command factor
soft accept clearance correct
soft accept clearance type
soft accept first aid noun boundary
soft accept clearance danger boundary
```

## Production Status

Production unchanged. No deploy was run.

Production sync remains a separate explicit task after local/GitHub release-candidate QA.

## Next Slice

```text
CE-0196F Progression Evidence And Summary Simplification
```
