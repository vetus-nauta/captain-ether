# CE-SPRINT-0194F Progression Algorithm Acceptance

Date: 2026-06-04
Owner: Director-Engineer
Scope: Captain Ether progression algorithm wave 2 acceptance
Status: WAVE_2_REPORT_READY / NO_CODE

## Decision

Progression Algorithm Architect was launched after Wave 1 because its work depended on the Beginner Curriculum and Semantic Acceptance outputs.

Accepted report:

```text
content/captain-ether/roles/progression-algorithm-architect/reports/sprint-ce-0194f-progression-growth-learning-filter-spec-2026-06-04.md
```

Director decision:

```text
ACCEPT_FOR_IMPLEMENTATION_BACKLOG_CONSOLIDATION
NO_CODE_YET
```

## CEO Requirement Applied

The agent was instructed to:

```text
learn the current state of technology, learning science, accessibility, maritime standards, and adaptive AI risk controls as of 2026
use current authoritative sources
cite sources directly
mark project-specific inferences explicitly
remain inside Captain Ether only
produce report-only output
avoid code/runtime/UI/content JSON/matcher/API/storage/auth/production changes
avoid secrets, login codes, sessions, cookies, CSRF values, player email, and player identity data
```

## Inputs Consumed

```text
CE-0193 CEO Session Findings And Agent Roster
CE-0194 Agent Wave 1 Launch And Acceptance
CE-0194C Beginner First-Session Pool Audit
CE-0194D Semantic Soft Acceptance Taxonomy
CE-0190 Gamification v1 Design Spec
CE-0192 Gamification v1 Progression Data Contract
```

## Accepted Architecture

The progression model is accepted as two coordinated layers:

```text
curriculum stage eligibility decides what can appear next
evidence signals decide whether the learner should grow, hold, or review
```

Accepted stage model:

```text
Stage 0: first-session safety net; vessel-origin / neutral-procedure only
Stage 1: early beginner vessel-origin expansion; one practical context at a time
Stage 2: role-shift and standard-form precision; station-side and stricter SMCP forms
Stage 3+: integrated maritime communication; mixed roles, branches, emergency and precision work
```

Accepted answer-evidence vocabulary for consolidation:

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

Accepted rule direction:

```text
understood_non_standard is accepted with correction and reduced mastery pressure, roughly 80 percent score at item level
understood_non_standard must not count like clean mastery for unlocks
frequent soft accepts hold growth and route items toward review
Lost Oars block growth until resolved in prerequisite families
dangerous meaning drift stays hard reject and blocks growth in protected families
raw answers, prompts, target text, player email, player identity, session, cookie, CSRF, and auth tokens must not be stored in progression aggregates
```

## Accepted Metadata Direction

For implementation planning, content and runtime should be consolidated around explicit role/stage metadata:

```text
voice_role=vessel_origin | shore_station_origin | onboard_internal | neutral_procedure | exam_meta
stage_min=0 | 1 | 2 | 3
strict_smcp_required=true | false
soft_accept_allowed=true | false
protected_family=<review-family-id>
```

This is a planning direction only. No schema or JSON implementation is approved by this report.

## Open Product Decisions Before Code

```text
Should understood_non_standard become a separate aggregate counter, or map into CE-0192 assisted with an internal reason code?
Should Stage 0 unlock require exactly two completed watches, or allow one Director-approved QA shortcut for pilot testing?
Should onboard/internal communication be Stage 3+ only, or later become a separate non-first-watch learning path?
```

Director recommendation:

```text
keep understood_non_standard as a separate conceptual signal during implementation design
allow QA shortcut only behind an explicit test flag, not user runtime
keep onboard/internal out of Stage 0 and Stage 1; decide Stage 3+ vs separate path during content-routing implementation
```

## Scope Verification

```text
code_changed=false
runtime_changed=false
ui_changed=false
content_json_changed=false
starter_json_changed=false
matcher_changed=false
api_changed=false
storage_schema_changed=false
auth_config_changed=false
production_deploy=false
other_games_changed=false
```

No secret, login code, cookie, session value, CSRF value, player email, player identity, SMTP credential, private config, raw player answer, or production credential was written.

## Next Recommended Work

Director-Engineer should now produce a single implementation backlog from CE-0194A through CE-0194F, still without coding unless CEO approves implementation.

Recommended order:

```text
1. first-run funnel implementation plan
2. watch HUD interaction implementation plan
3. Stage 0 beginner content-routing/filter implementation plan
4. semantic soft-accept matcher/API/feedback implementation plan
5. progression evidence/unlock/review implementation plan
6. summary/debrief simplification implementation plan
7. email sender Platform/Auth handoff, only if config ownership is approved
```

## Final Decision

```text
WAVE_2_REPORT_READY
PROGRESSION_ALGORITHM_ACCEPTED_FOR_BACKLOG_CONSOLIDATION
NO_CODE_YET
```
