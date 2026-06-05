# CE-SPRINT-0196 Big Implementation Sprint Plan

Date: 2026-06-06
Owner: Director-Engineer
Scope: Captain Ether big implementation sprint plan from CE-0195 backlog
Status: SPRINT_READY / NO_CODE

## Decision

Prepare a large implementation sprint for Captain Ether only.

This is a plan/runbook document. It does not change runtime code, UI, API, content JSON, matcher behavior, storage schema, auth config, production config, or deployment state.

```text
code_changed=false
runtime_changed=false
ui_changed=false
api_changed=false
content_json_changed=false
matcher_changed=false
storage_schema_changed=false
auth_config_changed=false
production_deploy=false
other_games_changed=false
```

## Mission

Turn the CEO session findings and agent reports into an implementation-ready sprint that can be executed in controlled slices.

Target outcome:

```text
Captain Ether local/GitHub release candidate with clean first launch, clean active watch, Stage 0 beginner routing, semantic soft acceptance, progression evidence rules, simplified summary, and QA gates passed.
```

Non-target outcome:

```text
automatic production deploy
changes to other games
changes to shared platform auth/router/registry
changes to SMTP/DNS/secrets
```

Production sync is a separate decision after local/GitHub validation.

## Source Baseline

Current canonical baseline:

```text
local_github_starter_items=1000
local_github_grammar_patterns=581
local_github_qa_items=1000
local_github_dangerous_pairs=243
production_starter_items=1000
production_grammar_patterns=581
production_qa_items=1000
production_dangerous_pairs=243
production_delta_items=0
main_course_internal_closure=100_PERCENT_INTERNAL_CLOSED
runtime_api_production_parity_internal_closure=100_PERCENT_INTERNAL_CLOSED
authenticated_watch_smoke=AUTH_BLOCKED_BY_APPROVED_QA_ACCESS
```

Input planning reports:

```text
CE-0193 CEO Session Findings And Agent Roster
CE-0194A Onboarding Flow Architect
CE-0194B Watch HUD Interaction Designer
CE-0194C Beginner Curriculum Curator
CE-0194D Semantic Acceptance Architect
CE-0194E Auth Email Deliverability Steward
CE-0194F Progression Algorithm Architect
CE-0195 Implementation Backlog From Agent Reports
```

## Working Mode

Implementation sequence:

```text
1. local/WebStorm only
2. run local validation and smoke gates
3. commit focused slice to Git
4. push to GitHub
5. repeat for next slice
6. create release-candidate QA report
7. production sync only as separate explicit task
```

No direct local-to-production shortcut.

Commit strategy:

```text
one commit per stable implementation slice
no mixed commits that combine UI, matcher, content routing, and production config
no production deploy in implementation commits
```

Rollback strategy:

```text
avoid destructive git commands
if a slice fails, patch forward or create a focused revert only with explicit Director decision
keep production untouched until release-candidate decision
```

## Sprint Slices

### CE-0196A Pre-Code Inspection And Baseline QA

Purpose:

```text
confirm exact current code contracts before implementation starts
```

Work type:

```text
read-only inspection plus local validation
```

Inspect:

```text
public/assets/app.js route/auth/watch state
public/assets/app.css responsive cards, watch layout, buttons, status blocks
public/api/captain-ether/start-watch.php selection contract
public/api/captain-ether/submit-answer.php answer-result contract
public/api/captain-ether/_answer-matching.php matcher result contract
public/api/captain-ether/finish-watch.php summary/progression payload
public/api/captain-ether/_answer-logging.php privacy behavior
content/captain-ether/starter.json current item fields
content/captain-ether/accept-reject-qa-pairs.json regression structure
content/captain-ether/tools/validate-captain-ether.php validator hooks
content/captain-ether/tools/smoke-start-watch-api.php API smoke hooks
```

Commands:

```sh
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
php content/captain-ether/tools/validate-captain-ether.php --runs=30
php content/captain-ether/tools/smoke-start-watch-api.php
```

Pass condition:

```text
worktree clean at start
HEAD and origin/main are synced
validator PASS
API smoke PASS
no unrelated dirty files
no need to touch other games or platform config
```

Stop condition:

```text
baseline validator/API smoke fails before code changes
unexpected dirty worktree appears
required fix touches Watch Officer, Nav Desk, shared registry/router, production config, auth secrets, SMTP, or Atlas secrets
```

Deliverable:

```text
CE-0196A baseline inspection report
```

### CE-0196B First-Run Funnel Implementation

Purpose:

```text
remove confusing first-launch layers and create one guided first-watch path
```

Primary future write scope:

```text
public/assets/app.js
public/assets/app.css
```

Possible write scope:

```text
public/index.html only if semantic landmarks or focus containers require it
```

Must not touch:

```text
public/api/games/registry.php
public/api/auth/* except read-only integration understanding
other games
production config
```

Implementation requirements:

```text
first-time Captain Ether route has one primary CTA
login/status is inside the first-watch intent, not a disconnected screen
Beginner is recommended, not one of three equal first choices
advanced/intermediate options are de-emphasized or behind secondary disclosure during first run
Lost Oars, progress, answer log, management copy, and full disclaimer wall do not compete with first watch onboarding
Back behavior does not jump across confusing layers
status messages are accessible and visible
mobile first-run has one dominant action
```

Local QA:

```text
manual desktop first-run smoke
manual mobile-width first-run smoke
keyboard focus smoke
login-code form state smoke without storing real email/code/session
route/back behavior smoke
```

Commit target:

```text
captain-ether: implement first-run funnel cleanup
```

### CE-0196C Active Watch HUD Implementation

Purpose:

```text
make the watch technically trustworthy while preserving learning focus
```

Primary future write scope:

```text
public/assets/app.js
public/assets/app.css
```

Implementation requirements:

```text
submit button states: ready, checking, result_current, final_result_hold, closing_watch, error
submit disables answer input/hint/skip until API resolves
network/API error preserves typed answer
double submit is prevented
question, answer input, hint, feedback, user answer, and standard form are in one connected card
question appears above answer area inside the same card
question font is reduced
question color is readable soft orange on white
clean correct result is readable turquoise/sea-green
incorrect result is non-alarming red with text label, not color-only
hint ladder has staged behavior even if first implementation uses current single hint payload as Stage 1
final answer feedback is shown before summary
right rail has desktop/horizontal-tablet future partner placeholder
mobile active watch has no active-turn ad placement
```

Local QA:

```text
submit double-click smoke
submit network failure smoke if feasible locally
final-answer-hold smoke
responsive 360px/768px/desktop smoke
non-color-only feedback smoke
keyboard focus smoke
```

Commit target:

```text
captain-ether: implement active watch hud cleanup
```

### CE-0196D Stage 0 Beginner Routing And Metadata

Purpose:

```text
make first watch content technically clean instead of merely level=beginner
```

Primary future write scope options:

```text
content/captain-ether/starter.json
content/captain-ether/batches/*.json if source batches must stay canonical
public/api/captain-ether/start-watch.php
content/captain-ether/tools/validate-captain-ether.php
content/captain-ether/tools/smoke-start-watch-api.php
```

Decision before code:

```text
metadata plus runtime filter is preferred
runtime-only lists are weaker because they hide curriculum logic
```

Required taxonomy:

```text
voice_role=vessel_origin | shore_station_origin | onboard_internal | neutral_procedure | exam_meta
stage_min=0 | 1 | 2 | 3
first_session_allowed=true | false
strict_smcp_required=true | false
soft_accept_allowed=true | false
protected_family=<review-family-id>
```

Stage 0 allowed:

```text
vessel_origin
neutral_procedure
routine radio basics
short words/expressions and a few controlled phrases
```

Stage 0 blocked:

```text
shore_station_origin
onboard_internal
exam_meta
deck operations
medical/first-aid operational commands
engine/damage control
clearance administration
collision/passing intent
minimal-pair review
grammar transformation prompts
```

Local QA:

```text
validator checks required metadata where approved
Stage 0 eligible count >= 40
repeated first beginner watch sampling shows no excluded leakage
start-watch API smoke remains PASS
Sea Speak Linguist review of Stage 0 sample
```

Commit target:

```text
captain-ether: implement stage zero beginner routing
```

### CE-0196E Semantic Soft Acceptance Implementation

Purpose:

```text
accept meaning-preserving non-standard answers without weakening maritime safety boundaries
```

Primary future write scope:

```text
public/api/captain-ether/_answer-matching.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/_answer-logging.php
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/tools/validate-captain-ether.php
public/assets/app.js for display of comparison fields
```

Contract:

```text
match_type=understood_non_standard
accepted=true
score_factor=0.8
mastery_credit=partial
lost_oar_created=false
review_signal=standard_form_friction
show_user_answer=true
show_standard_form=true
```

Implementation rule:

```text
start with reviewed item-local examples and deterministic rules
no broad fuzzy semantic model in this sprint
```

Mandatory hard rejects:

```text
message marker substitutions in marker drills
numbers/channels/bearings/time/position errors
port/starboard and direction errors
permission direction errors
distress/urgency/safety priority drift
role reversal where speaker role is tested
safety-changing equipment/material substitutions
```

Local QA:

```text
matcher regression PASS
soft-accept positive fixtures PASS
hard-reject dangerous fixtures PASS
feedback shows You wrote / Standard
answer-log privacy smoke PASS
soft accept does not create Lost Oar
soft accept does not count as clean mastery
```

Commit target:

```text
captain-ether: implement semantic soft acceptance
```

### CE-0196F Progression Evidence And Summary Simplification

Purpose:

```text
make growth and debrief clear, fair, and based on evidence quality
```

Primary future write scope:

```text
public/api/captain-ether/finish-watch.php
public/api/captain-ether/progress.php
public/api/captain-ether/start-watch.php
public/assets/app.js
public/assets/app.css
content/captain-ether/tools/smoke-start-watch-api.php
```

Evidence policy:

```text
clean_standard and accepted_standard_variant are strong positive evidence
minor_spelling is positive with reminder
understood_non_standard is partial positive evidence and standard-form friction
assisted is weak positive evidence
wrong/skipped create Lost Oars where applicable
meaning_drift blocks protected-family growth
resolved Lost Oars improve recovery but do not erase history
```

Summary requirements:

```text
hide internal branch keys from learner summary
remove duplicate-looking revise actions
show one primary next action and clear secondary action
plain language replaces technical pressure diagnostics
no streak trap, public ranking, speed pressure, punishment copy, or certification claim
```

Local QA:

```text
progression fixture smoke
Lost Oars recovery evidence smoke
summary copy smoke
internal branch-key leakage check
aggregate-storage privacy check
API smoke PASS
```

Commit target:

```text
captain-ether: implement progression summary cleanup
```

### CE-0196G Release-Candidate QA And Production Sync Decision

Purpose:

```text
turn local/GitHub implementation into a release candidate, not an automatic deploy
```

Required local QA:

```sh
php content/captain-ether/tools/validate-captain-ether.php --runs=30
php content/captain-ether/tools/smoke-start-watch-api.php
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
```

Required manual QA:

```text
first launch desktop
first launch mobile
active watch normal answer
active watch soft-accept answer
active watch wrong answer
active watch skip
final answer hold
summary next action
Stage 0 first-watch sample
Lost Oar resolution path
no internal branch keys visible to player
```

Production sync gate:

```text
do not deploy automatically
create production sync report only after local/GitHub release candidate is clean
production authenticated watch smoke remains blocked unless approved QA access is available
```

Commit target:

```text
captain-ether: certify ce0196 release candidate
```

## Parallel External Track: Auth Email Sender

This is not a Captain Ether implementation slice.

Decision retained:

```text
visible sender: Brkovic Maritime Games <no-reply@brkovic.ltd>
no personal sender
no per-game mailbox sprawl unless Platform/Auth proves transactional subdomain need
```

Allowed Captain Ether action:

```text
produce Platform/Auth handoff requirement
```

Blocked without separate Platform/Auth task:

```text
SMTP secrets
DNS records
DKIM keys
DMARC policy
production mail credentials
platform auth code changes
```

## Agent Execution Matrix If CEO Opens Parallel Work

Do not launch agents automatically from this plan. If CEO authorizes parallel execution, use disjoint ownership:

```text
Frontend UX Worker: CE-0196B and CE-0196C only; owns public/assets/app.js and public/assets/app.css UI state/layout changes.
Curriculum Routing Worker: CE-0196D only; owns Stage 0 metadata/filter plan and validation fixtures.
Matcher/API Worker: CE-0196E only; owns _answer-matching.php, submit-answer.php, answer logging contract, matcher fixtures.
Progression Worker: CE-0196F only; owns finish-watch/progress/start-watch evidence and summary payload changes.
QA Worker: read-only during implementation; owns smoke plans, regression commands, leakage checks, and release-candidate report.
```

Coordination rule:

```text
workers are not alone in the codebase
no worker may revert another worker's changes
write scopes must not overlap without Director-Engineer integration
```

## Stop Rules

Stop and report before continuing if any of these happen:

```text
unexpected dirty files appear outside assigned scope
validator baseline fails before implementation
API smoke baseline fails before implementation
implementation requires shared router/registry/platform auth production config or another game
secret, login code, session, cookie, CSRF, player email, or player identity would need to be written into a report or fixture
soft-accept safety boundary becomes unclear
Stage 0 eligible pool cannot reach 40 clean items without questionable content
production deploy becomes necessary to verify local logic
```

## Definition Of Done

The big sprint is complete when:

```text
CE-0196A baseline inspection report exists
CE-0196B first-run funnel implemented and QA-passed locally
CE-0196C active watch HUD implemented and QA-passed locally
CE-0196D Stage 0 routing/filter implemented and QA-passed locally
CE-0196E semantic soft acceptance implemented and QA-passed locally
CE-0196F progression/summary cleanup implemented and QA-passed locally
CE-0196G release-candidate QA report exists
GitHub main is synced with local HEAD
production has not been changed unless a separate production sync task is opened and passed
```

## Final Sprint Status

```text
SPRINT_READY
CODE_NOT_STARTED
NEXT_ACTION=CE-0196A pre-code inspection and baseline QA
PRODUCTION_SYNC=SEPARATE_TASK_ONLY
```
