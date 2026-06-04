# CE-SPRINT-0195 Implementation Backlog From Agent Reports

Date: 2026-06-04
Owner: Director-Engineer
Scope: Captain Ether implementation backlog consolidation from CE-0194A through CE-0194F
Status: BACKLOG_READY / NO_CODE

## Decision

CE-0194A through CE-0194F are accepted as the source set for the next Captain Ether implementation sprint.

This report converts the agent reports into sequenced implementation slices, ownership boundaries, dependencies, QA gates, and CEO approval points.

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

## Source Reports

```text
CE-0194A Onboarding Flow Architect
content/captain-ether/roles/onboarding-flow-architect/reports/sprint-ce-0194a-first-launch-funnel-spec-2026-06-04.md

CE-0194B Watch HUD Interaction Designer
content/captain-ether/roles/watch-hud-interaction-designer/reports/sprint-ce-0194b-watch-hud-interaction-spec-2026-06-04.md

CE-0194C Beginner Curriculum Curator
content/captain-ether/roles/beginner-curriculum-curator/reports/sprint-ce-0194c-beginner-first-session-pool-audit-2026-06-04.md

CE-0194D Semantic Acceptance Architect
content/captain-ether/roles/semantic-acceptance-architect/reports/sprint-ce-0194d-semantic-soft-acceptance-taxonomy-2026-06-04.md

CE-0194E Auth Email Deliverability Steward
content/captain-ether/roles/auth-email-deliverability-steward/reports/sprint-ce-0194e-auth-email-sender-deliverability-decision-2026-06-04.md

CE-0194F Progression Algorithm Architect
content/captain-ether/roles/progression-algorithm-architect/reports/sprint-ce-0194f-progression-growth-learning-filter-spec-2026-06-04.md
```

## Director Conclusion

The next implementation should not start with the progression algorithm.

Correct order:

```text
1. clean first-launch funnel
2. clean active watch HUD behavior
3. add Stage 0 beginner routing/filter
4. add semantic soft acceptance
5. add progression evidence/unlock/review rules
6. simplify summary/debrief
7. handle email sender only through Platform/Auth ownership
```

Reason:

```text
progression depends on clean input signals
clean input signals depend on beginner filter and semantic match classes
semantic feedback depends on watch HUD layout
watch HUD depends on first-run routing not mixing layers
email sender is outside Captain Ether implementation unless Platform/Auth grants config ownership
```

## Pre-Code Gate

Before touching implementation files, run this inspection checklist:

```text
1. Confirm worktree clean and synced to origin/main.
2. Confirm Captain Ether-only file scope.
3. Inspect public/assets/app.js active route/watch/auth state functions.
4. Inspect public/assets/app.css responsive watch layout and card styles.
5. Inspect public/api/captain-ether/start-watch.php selection contract.
6. Inspect public/api/captain-ether/submit-answer.php and _answer-matching.php match result contract.
7. Inspect public/api/captain-ether/finish-watch.php summary payload.
8. Inspect content/captain-ether/starter.json item fields available for role/stage tagging.
9. Inspect content/captain-ether/accept-reject-qa-pairs.json and validator coverage.
10. Confirm no Watch Officer, Nav Desk, games registry/router, production config, SMTP secrets, Atlas secrets, or private auth changes are needed.
```

Minimum pre-code checks:

```text
git status --short --branch
php content/captain-ether/tools/validate-captain-ether.php --runs=30
php content/captain-ether/tools/smoke-start-watch-api.php
```

Authenticated production watch smoke remains separate and blocked by approved QA access. It is not a blocker for local implementation planning.

## Implementation Slices

### CE-0195A First-Run Funnel Cleanup

Goal:

```text
remove mixed startup layers and create a single first-run path: intro -> auth/status -> take first watch -> active watch -> summary -> returning home
```

Future owner:

```text
Director-Engineer with Onboarding Flow Architect review
```

Future write scope:

```text
public/assets/app.js
public/assets/app.css
public/index.html only if semantic landmarks/focus containers require it
Captain Ether i18n/copy keys if stored in app.js
```

Must not touch:

```text
public/api/games/registry.php
other games
platform auth endpoints except read-only integration check
production config
```

Acceptance criteria before merge:

```text
first-time Captain Ether entry has one primary CTA
advanced/intermediate choices are not equal-weight first decision
Lost Oars, answer log, progress dashboard, management copy, and disclaimer wall do not compete with first watch onboarding
login returns to the intended first-watch flow, not generic hub
browser Back behavior is predictable inside the Captain Ether route/state model
accessible status messages exist for code sent, checking auth, watch loading, and errors
mobile first-run has one dominant action and no multi-card decision wall
```

CEO approval point:

```text
Approve final first-run screen order and visible copy before implementation merge.
```

### CE-0195B Active Watch HUD Interaction Cleanup

Goal:

```text
make the active watch feel technically complete: visible submit state, unified question/answer/feedback card, final answer hold, readable feedback, and future desktop/tablet partner placeholder
```

Future owner:

```text
Director-Engineer with Watch HUD Interaction Designer review
```

Future write scope:

```text
public/assets/app.js
public/assets/app.css
Captain Ether i18n/copy keys if stored in app.js
```

Acceptance criteria before merge:

```text
Answer button has states: ready, checking, result_current, final_result_hold, closing_watch, error
button/input/hint/skip are disabled or readonly during submit/finish calls
double submit is prevented
API error preserves typed answer and does not advance current item
question, answer input, hint, user answer, standard form, and current feedback appear in one connected card
question font is smaller and calmer than current oversized prompt
question text uses readable soft orange on white
clean correct feedback uses readable turquoise/sea-green treatment
incorrect feedback uses non-alarming red and text labels, not color-only meaning
final answer result is visible before summary opens
right rail on desktop/horizontal tablet has neutral future partner placeholder and does not imitate a task/result card
mobile active watch has no active-turn ad placement; any future monetization belongs after the learning turn, such as summary/home
```

CEO approval point:

```text
Approve visible HUD behavior and feedback tone before implementation merge.
```

### CE-0195C Stage 0 Beginner Routing And Content Filter

Goal:

```text
stop beginner first-watch content from mixing vessel radio basics with deck, medical, engine, shore-station, clearance, collision, grammar-transform, and exam-minimal-pair items
```

Future owner:

```text
Director-Engineer with Beginner Curriculum Curator, Curriculum Architect, Sea Speak Linguist, and QA review
```

Future write scope options to decide before code:

```text
content/captain-ether/starter.json if explicit metadata is added
content/captain-ether/batches/*.json only if source-of-truth batch metadata must be backfilled
public/api/captain-ether/start-watch.php if runtime selection filter is added
content/captain-ether/tools/validate-captain-ether.php if metadata validation is added
content/captain-ether/accept-reject-qa-pairs.json only if new selection QA fixtures are formalized there
```

Preferred direction:

```text
use explicit metadata plus runtime filter
metadata makes role/stage auditable
runtime filter prevents accidental first-watch leakage
```

Candidate metadata:

```text
voice_role=vessel_origin | shore_station_origin | onboard_internal | neutral_procedure | exam_meta
stage_min=0 | 1 | 2 | 3
first_session_allowed=true | false
strict_smcp_required=true | false
soft_accept_allowed=true | false
protected_family=<review-family-id>
```

Acceptance criteria before merge:

```text
Stage 0 pool has at least 40 eligible items before runtime selection depends on it
first beginner watch can repeatedly sample 12 calls without excluded classes leaking in
Stage 0 allows vessel_origin and neutral_procedure only
Stage 0 blocks shore_station_origin, onboard_internal, exam_meta, deck, medical, engine, clearance administration, collision, grammar transformation, and minimal-pair review
no valid item is deleted solely because it is not first-session material; it is restaged/gated instead
validator or QA smoke detects Stage 0 leakage
```

CEO approval point:

```text
Approve Stage 0/1/2 taxonomy and whether metadata is stored in starter.json, batch files, runtime-only lists, or both.
```

### CE-0195D Semantic Soft Acceptance

Goal:

```text
accept meaning-preserving non-standard answers with correction and reduced score while keeping dangerous maritime drift hard-rejected
```

Future owner:

```text
Director-Engineer with Semantic Acceptance Architect, Sea Speak Linguist, Answer Log Analyst, and QA review
```

Future write scope:

```text
public/api/captain-ether/_answer-matching.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/_answer-logging.php
content/captain-ether/starter.json or QA fixtures for reviewed soft-accept examples
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/tools/validate-captain-ether.php
public/assets/app.js for feedback display only after API contract is stable
```

Required result contract direction:

```text
match_type=understood_non_standard
accepted=true
score_factor=0.8
show_user_answer=true
show_standard_form=true
mastery_credit=partial
lost_oar_created=false
review_signal=standard_form_friction
```

Hard reject boundaries:

```text
message marker substitutions in marker drills
numbers, channels, bearings, time, position, port/starboard, permission direction, distress/urgency/safety priority
role reversal between vessel and shore station where the item tests speaker role
equipment/material substitutions where safety meaning changes
```

Initial positive examples to consider only after Sea Speak Linguist approval:

```text
bring first aid -> bring first aid kit as understood_non_standard where context makes kit recoverable
clearace granted, follow to the guest pear -> Clearance granted, proceed to visitor berth as understood_non_standard or spelling/term warning only if role/context is explicitly station-side and not a strict standard-form drill
```

Acceptance criteria before merge:

```text
no broad fuzzy semantic matcher ships first
soft accepts are item-local or reviewed examples only
validator covers soft-accept positives and dangerous hard-reject negatives
feedback shows You wrote and Standard for non-identical accepted answers
answer log grouping remains privacy-preserving and omits player identity
soft accepts do not create Lost Oars but also do not count as clean mastery
```

CEO approval point:

```text
Approve 80 percent partial-credit behavior and first reviewed soft-accept example list before implementation merge.
```

### CE-0195E Progression Evidence, Unlock, Hold, Review Rules

Goal:

```text
make difficulty growth depend on evidence quality, not only broad completion or raw score
```

Future owner:

```text
Director-Engineer with Progression Algorithm Architect, Gamification Designer, Validation Steward, and QA review
```

Future write scope:

```text
public/api/captain-ether/finish-watch.php
public/api/captain-ether/progress.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/lost-oars.php only if review state needs display support
public/api/captain-ether/resolve-lost-oar.php only if recovery evidence changes
public/assets/app.js for summary/progression display
content/captain-ether/tools/smoke-start-watch-api.php
content/captain-ether/tools/validate-captain-ether.php if progression fixtures are added
```

Accepted evidence vocabulary:

```text
clean_standard
accepted_standard_variant
minor_spelling
understood_non_standard
assisted
wrong
skipped
lost_oar_created
lost_oar_resolved
meaning_drift
```

Policy direction:

```text
clean_standard and accepted_standard_variant are strong positive evidence
minor_spelling is positive with reminder
understood_non_standard is partial positive evidence and standard-form friction
assisted is weak positive evidence
wrong/skipped create or reinforce Lost Oars where applicable
meaning_drift blocks growth in protected families
resolved Lost Oars improve recovery but do not erase history
```

Acceptance criteria before merge:

```text
Stage unlock requires repeated evidence, not one lucky watch
understood_non_standard cannot dominate prerequisite success for stage unlock
recent meaning_drift blocks protected-family growth
unresolved Lost Oars in prerequisites hold growth
progression remains calm and recovery-oriented; no streak traps, public ranking, speed pressure, punishment copy, or certification claims
stored progression evidence is aggregate and non-sensitive
```

CEO approval point:

```text
Approve whether understood_non_standard is stored as a separate aggregate counter or mapped into assisted with an internal reason code.
```

Director recommendation:

```text
store understood_non_standard separately because merging it into assisted hides the exact friction CEO identified
```

### CE-0195F Summary And Debrief Simplification

Goal:

```text
replace technical pressure diagnostics with a plain learner-facing debrief and one clear next action
```

Future owner:

```text
Director-Engineer with Watch HUD Interaction Designer and Gamification Designer review
```

Future write scope:

```text
public/assets/app.js
public/assets/app.css
public/api/captain-ether/finish-watch.php only if payload fields need reshaping
```

Acceptance criteria before merge:

```text
summary does not expose internal branch keys like branch.mixed_safety_equipment_deck_operations
summary does not show duplicate-looking actions such as two unclear revise buttons
primary next action is explicit: continue, revise, or close
technical diagnostics remain admin/debug-only if still needed
copy explains why the next route is recommended in plain language
```

CEO approval point:

```text
Approve learner-facing summary copy and action labels before implementation merge.
```

### CE-0195G Auth Email Sender Handoff

Goal:

```text
preserve CEO sender decision without taking unauthorized ownership of Platform/Auth mail configuration
```

Future owner:

```text
Platform/Auth owner, with Director-Engineer providing Captain Ether requirement only
```

Captain Ether decision:

```text
Use Brkovic Maritime Games <no-reply@brkovic.ltd>
Do not use personal sender addresses
Do not create per-game mailboxes unless Platform/Auth requires a transactional subdomain for real delivery/reputation reasons
```

Director-Engineer must not change:

```text
SMTP secrets
production mail credentials
DNS records
DKIM keys
DMARC policy
platform auth mail code outside an approved Platform/Auth task
```

Handoff acceptance criteria:

```text
actual production sender path is confirmed without exposing secrets
Header From, envelope sender/return-path, DKIM d= domain, SPF, and DMARC alignment are verified by Platform/Auth
malformed no-reply variants are rejected; intended address is no-reply@brkovic.ltd
Reply-To behavior is intentionally decided
```

CEO approval point:

```text
Approve whether Platform/Auth should keep root-domain no-reply or create a dedicated transactional subdomain. Director recommendation remains common root-domain no-reply unless deliverability evidence says otherwise.
```

## Proposed Sprint Execution Order

```text
Sprint 1: CE-0195A + CE-0195B
Reason: fixes visible product trust defects without changing answer correctness rules.

Sprint 2: CE-0195C
Reason: makes first watch technically clean and prevents beginner content leakage.

Sprint 3: CE-0195D
Reason: fixes unfair answer rejection once HUD can display nuanced feedback.

Sprint 4: CE-0195E + CE-0195F
Reason: progression and summary need corrected Stage 0 and matcher evidence first.

Parallel external track: CE-0195G
Reason: email sender is Platform/Auth-deliverability ownership, not Captain Ether runtime implementation.
```

## QA Gates By Sprint

### Sprint 1 QA

```text
local route smoke
manual first-run desktop/mobile smoke
keyboard focus and visible status smoke
submit double-click prevention smoke
network/API error preservation smoke
final-answer-hold smoke
responsive right-rail/mobile no-active-ad smoke
```

### Sprint 2 QA

```text
validator metadata checks
first-watch random/progressive sampling repeated runs
excluded-branch leakage check
Stage 0 eligible-count check
Sea Speak Linguist first-session review
```

### Sprint 3 QA

```text
matcher regression
soft-accept positive fixtures
dangerous hard-reject fixtures
feedback comparison smoke
privacy-preserving answer-log smoke
Lost Oar non-creation check for soft accept
```

### Sprint 4 QA

```text
progression fixture smoke
unlock/hold/review deterministic tests
Lost Oar recovery evidence check
summary copy smoke
no internal branch-key leakage check
aggregate-storage privacy check
```

### External Email QA

```text
Platform/Auth confirms sender alignment without revealing secrets
production login-code email observed by approved account
no personal sender and no malformed no-reply sender
```

## CEO Approval Gates

```text
Gate 1: approve first-run funnel and HUD visible behavior before Sprint 1 implementation merge
Gate 2: approve Stage 0/1/2 taxonomy and metadata storage direction before Sprint 2 implementation
Gate 3: approve first soft-accept examples and 80 percent behavior before Sprint 3 implementation
Gate 4: approve progression aggregate design before Sprint 4 implementation
Gate 5: approve email sender ownership decision only if Platform/Auth work is opened
```

## Risks

```text
Implementing progression before Stage 0 and semantic signals will produce false confidence.
Broad semantic matching without item-local review can accept unsafe maritime meaning drift.
Adding metadata only in runtime lists can become invisible and brittle; content metadata is more auditable.
Adding ads to mobile active watch will damage trust and focus; keep mobile active-turn ad-free.
Changing sender config from Captain Ether would violate scope and could break production auth mail.
```

## Final Backlog Status

```text
BACKLOG_READY
CODE_NOT_STARTED
NEXT_ENGINEERING_ACTION=pre-code inspection for CE-0195A and CE-0195B after CEO implementation approval
```
