# CE-SPRINT-0189D Answer-Log And Matcher Noise Review

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether answer-log protection and matcher-noise review
Status: MATCHER_NOISE_ACCEPTABLE

## Baseline

```text
local_github_production_starter_items=1000
local_github_production_qa_items=1000
production_release_readiness_qa=PASS
main_course_technical_closure_audit=AUTH_BLOCKED_BUT_CONTENT_RUNTIME_READY
authenticated_browser_watch_smoke=AUTH_BLOCKED_WITH_NEXT_STEPS
github_sync=0 0
```

## Full Matcher / Validator Gate

```text
full_validator=PASS
validator_runs=160
validator_warnings=0
qa_items=1000
target_text=1000
should_accept=1943
should_reject=3032
dangerous_pairs=243
danger_must_accept=821
danger_must_reject=1789
```

The full regression corpus covers common accepted variants and rejects known
meaning-drift cases across the 1000-item baseline.

## Production Answer-Log Protection

```text
GET /api/captain-ether/answer-log.php anonymous -> HTTP 401 Login required
answer_log_json=OK
answer_log_ok=false
answer_log_user_field_present=no
```

Anonymous public access does not expose answer-log records, player email, player
identity, sessions, cookies, CSRF values, or review data.

## Targeted High-Risk Matcher Review

```text
targeted_matcher_cases=24
targeted_matcher_pass=24
targeted_matcher_fail=0
targeted_matcher_status=PASS
```

Covered risk groups:

```text
port / starboard
channel one six / one three / adjacent numeric channel drift
heading zero nine zero / adjacent heading drift
over / out
say again / read back
Mayday / Pan-Pan / Securite priority drift
```

One initial targeted check used the wrong expected accepted phrase for
`expr_b028_channel_one_three_001`. The item and QA registry correctly accept
`channel one three`; after correcting the test expectation, the targeted review
passed 24/24.

## Decision

```text
MATCHER_NOISE_ACCEPTABLE
```

No targeted matcher fix is required before Director closure decision. The only
remaining main-course blocker is authenticated production watch smoke access,
which is owned by the production auth/access channel.

## Scope Preserved

No production deploy, matcher, API/runtime, UI/assets, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, secrets, sessions, cookies,
CSRF, SMTP, player email, player identity data, WebStorm DB console, WebStorm
datasource, foreign database, new content, or gamification implementation was
changed by CE-0189D.
