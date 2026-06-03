# CE-SPRINT-0189 Big Sprint Main Course Closure Plan

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether main-course closure planning
Status: ORGANIZED / READY_TO_EXECUTE

## Current Baseline

```text
local_github_starter_items=1000
local_github_grammar_patterns=581
local_github_qa_items=1000
local_github_dangerous_pairs=243
production_starter_items=970
production_grammar_patterns=551
production_qa_items=970
production_dangerous_pairs=227
production_delta_items=-30
batch_028_status=merged
batch_028_post_merge_qa=PASS
next_task=CE-0188 Batch 028 Production Sync Decision
validator_warn_count=0
github_sync=0 0
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
production_deploy_pending=true
```

## Big Sprint Objective

The main course should be finished by proving the existing 1000-item corpus is
technically clean, production-synced, playable, and ready for a stable public
course baseline.

Primary objective:

```text
close the 1000-item Captain Ether main course without scope drift or new feature invention
```

Secondary objective:

```text
park gamification as a future product vector, not as a dependency for main-course closure
```

## What Not To Do In This Sprint

Do not expand the corpus further during this sprint.

Do not add gamification mechanics, rank systems, daily watch, mastery maps,
exam-mode UI, new scoring layers, or UX redesign during main-course closure.

Do not change platform auth design, router, registry, production config, Atlas
secret files, Atlas driver, Watch Officer, Nav Desk, foreign repositories, or
foreign databases.

Do not use production deploy by implication. Deploy only inside the explicit
production-sync task after its pre-deploy gates pass.

## Sequential Gates

### CE-0188 Batch 028 Production Sync Decision

Goal:

```text
sync the QA-approved 1000-item local/GitHub baseline to production under controlled deploy rules
```

Required gates:

```text
full_validator=PASS warnings=0
local_api_smoke=PASS
Atlas_ping=PASS
GitHub_sync=0 0
secret_scan=PASS
production_ftp_readback_confirms_delta=-30
```

Expected outcome:

```text
CLOSED / PASS / PRODUCTION_SYNCED
production_counts=1000/581/1000/243
```

Hard boundary:

```text
no production registry change
no production config change
no Atlas secret file change
no Atlas driver change
no Watch Officer or Nav Desk change
```

### CE-0189A Batch 028 Production Release-Readiness QA

Goal:

```text
verify the production 1000-item baseline after sync without changing production
```

Checks:

```text
production route HTTP 200
static shell/assets reachable
protected Captain Ether APIs return correct anonymous guards
production content counts match local/GitHub
production Atlas ping remains healthy
service worker/manifest remain reachable
no public payload leaks player identity or secrets
```

Expected outcome:

```text
PASS / RELEASE_READY_FOR_1000_ITEM_SCOPE
```

### CE-0189B Authenticated Browser Watch Smoke

Goal:

```text
prove a real authenticated user can start, answer, finish, and review a short watch in production
```

Checks:

```text
request-code / verify-code path or approved QA session works
start-watch returns a valid watch
submit-answer accepts correct and wrong answers as expected
finish-watch returns summary
progress endpoint responds for authenticated user
Lost Oars path remains usable for wrong/skipped items
no secrets, login codes, cookies, CSRF values, player email, or player identity are written to reports
```

Expected outcomes:

```text
PASS_AUTHENTICATED_WATCH_SMOKE
AUTH_BLOCKED_WITH_NEXT_STEPS
CHANGES_REQUIRED
```

If auth is blocked, do not bypass auth and do not expose login codes. Assign the
blocker to the proper auth/access owner.

### CE-0189C Main Course Technical Closure Audit

Goal:

```text
confirm the 1000-item main course is internally coherent and technically clean
```

Checks:

```text
starter_items=1000
qa_items=1000
grammar_patterns=581
dangerous_pairs=243
validator_warn_count=0
all merged batches 001-028 have expected status
no unmerged draft backlog remains for M5
branch/module distribution is documented
known historical duplicate dangerous-pair display names do not affect matcher behavior
```

Expected outcome:

```text
MAIN_COURSE_TECHNICAL_CLOSURE_PASS
```

### CE-0189D Answer-Log And Matcher Noise Review

Goal:

```text
review whether the matcher and answer-log pipeline are quiet enough for public use
```

Checks:

```text
answer-log endpoint remains protected
admin review view does not expose player identity unnecessarily
common accepted variants are covered
high-risk minimal pairs remain rejected
spelling tolerance does not accept maritime meaning drift
```

Expected outcome:

```text
MATCHER_NOISE_ACCEPTABLE
or
TARGETED_MATCHER_FIXES_REQUIRED
```

### CE-0189E Director Closure Decision

Goal:

```text
decide whether Captain Ether main course is closed as the stable 1000-item baseline
```

Possible decisions:

```text
MAIN_COURSE_CLOSED_STABLE_BASELINE
CHANGES_REQUIRED_BEFORE_CLOSURE
AUTH_BLOCKED_BUT_CONTENT_RUNTIME_READY
```

Closure statement should say exactly what is closed:

```text
1000-item Sea Speak / maritime radio communication core course
local/GitHub/production parity
validator/API/matcher gates
production release-readiness
```

Closure statement should also say what is not closed:

```text
gamification layer
new content beyond 1000 items
formal certification claims
platform auth redesign
new games or shared platform scope
```

## Gamification Vector Parked

Gamification remains a valid future product direction, but it is not part of the
main-course closure sprint.

Parked vector:

```text
watch ritual
rank progression
critical meaning-drift events
daily watch
branch mastery map
exam mode
saved mistakes / Lost Oars recovery achievements
```

Next correct timing:

```text
after main course closure and production parity are stable
```

## Sprint Success Criteria

```text
Batch 028 production sync passes
production equals local/GitHub at 1000 items
production release-readiness QA passes
authenticated watch smoke passes or has a clean non-content blocker owner
main course closure audit passes
no out-of-scope game/platform files are touched
no secrets are written to reports or commits
next product vector is explicitly separated from main-course closure
```

## Sprint Failure / Stop Conditions

Stop and assign a blocker if any occur:

```text
validator failure
validator warnings > 0
API smoke failure
production route not HTTP 200
anonymous guard not HTTP 401 for protected Captain Ether APIs
Atlas ping failure before or after deploy
production FTP read-back hash mismatch
secret scan finding
auth flow requires secret exposure or bypass
scope drift into Watch Officer, Nav Desk, router, registry, production config, or foreign projects
```

## Boundaries

Allowed Captain Ether scope:

```text
content/captain-ether/
public/api/captain-ether/ only if an assigned Captain Ether runtime blocker requires it
public/assets/app.js/app.css/service-worker.js only if an assigned Captain Ether UI/runtime blocker requires it
tools/captain-ether-production-deploy.sh only inside CE-0188
```

Closed unless explicitly assigned:

```text
Watch Officer
Nav Desk
shared hub/router/platform registry
platform auth design
production config
Atlas secret file
Atlas driver
SMTP
sessions/cookies/CSRF behavior
player email or identity data
WebStorm DB console
foreign databases/projects
new gamification implementation
new content expansion beyond 1000 items
```

## Immediate Next Task

```text
CE-0188 Batch 028 Production Sync Decision
```
