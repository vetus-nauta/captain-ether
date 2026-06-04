# CE-SPRINT-0193 CEO Session Findings And Agent Roster

Date: 2026-06-04
Owner: CEO / Director-Engineer
Scope: Captain Ether CEO play-session findings, engineering conclusions, and narrow-agent roster proposal
Status: CEO_FINDINGS_CAPTURED / AGENT_STARTERS_CREATED / NO_CODE

## CEO Decision

```text
1. Commit the check and conclusions to WebStorm/GitHub.
2. Create starter folders for separate narrow agents.
3. Provide proposal for who the agents are and what each owns.
4. Do not code yet.
```

This report implements that decision as documentation-only work.

## Scope Boundary

```text
code_changed=false
runtime_changed=false
ui_changed=false
content_json_changed=false
matcher_changed=false
storage_changed=false
production_deploy=false
auth_config_changed=false
other_games_changed=false
```

No Watch Officer, Nav Desk, router, registry, production config, SMTP secret,
session/cookie/CSRF, player email, player identity, or foreign game file was
changed.

## Captured CEO Findings

### 1. First Launch / Startup Flow

Finding:

```text
first launch feels confused: several start-window layers are mixed
```

Director conclusion:

```text
valid UX architecture finding
```

Owner route:

```text
Onboarding Flow Architect -> UX/HUD -> Director-Engineer
```

Expected output:

```text
single clean funnel: Captain Ether intro -> login/status -> take watch -> first watch
```

### 2. Login-Code Email Sender

Finding:

```text
personal_sender_redacted is a bad production sender; question whether to use common no-reply or game-specific sender
```

Director conclusion:

```text
Use common Brkovic Maritime Games <no-reply@brkovic.ltd> for now.
Do not use personal sender addresses.
Do not create extra mailbox sprawl unless DNS/auth delivery requires it.
```

Important correction:

```text
no-reply@brkovic.ltd is valid
malformed_no_reply_variant with a dot before @ is not the desired production sender
```

Owner route:

```text
Auth Email Deliverability Steward -> Platform/Auth if config/DNS/SMTP changes are needed
```

### 3. Answer Button Behavior

Finding:

```text
Answer button has no obvious behavior and feels broken
```

Director conclusion:

```text
valid interaction defect
```

Expected behavior:

```text
on submit: disable button/input, show spinner or Checking..., prevent double submit, restore on error
```

Owner route:

```text
Watch HUD Interaction Designer -> Director-Engineer implementation
```

### 4. Question / Answer / Result Layout

Finding:

```text
question, input, and answer feedback should be one connected vertical card
```

Director conclusion:

```text
valid HUD coherence finding
```

Expected direction:

```text
question on top, smaller font, soft readable orange; input below; feedback stream below; correct turquoise; wrong calm red
```

Owner route:

```text
Watch HUD Interaction Designer
```

### 5. Right Column / Future Advertising

Finding:

```text
right column is empty; later should support advertising
```

Director conclusion:

```text
valid layout-reserve finding, but must not pollute active learning on mobile
```

Expected direction:

```text
desktop/horizontal tablet: good sponsor/partner placeholder
mobile: no active-watch ad; consider summary/home in-flow card only
```

Owner route:

```text
Watch HUD Interaction Designer
```

### 6. Hint Quality

Finding:

```text
hint is not obvious and too weak when it is only the first letter
```

Director conclusion:

```text
valid learning support finding
```

Expected direction:

```text
progressive hints: semantic cue -> phrase skeleton -> key term -> first-letter only as late fallback
```

Owner route:

```text
Watch HUD Interaction Designer + Semantic Acceptance Architect
```

### 7. Beginner Session Difficulty

Finding:

```text
first beginner session includes items too hard or wrong-context for novice/common radio training
```

Examples captured:

```text
clear foredeck
bring first aid kit
engine idle/startup
station-side clearance replies
deck/medical/internal vessel commands
grammar-transformation style prompts
```

Director conclusion:

```text
valid curriculum sequencing defect
```

Expected direction:

```text
separate first-session beginner onboarding pool; apply role filter; exclude technical/onboard/station-side advanced items from first watch
```

Owner route:

```text
Beginner Curriculum Curator -> Curriculum Architect -> Sea Speak Linguist -> Director-Engineer
```

### 8. Meaning-Preserving But Non-Standard Answers

Finding:

```text
answers like bring first aid and non-standard clearance phrasing preserve meaning but are treated too harshly as wrong
```

Director conclusion:

```text
valid matcher/feedback model gap
```

Expected new class:

```text
understood_non_standard
```

Expected score:

```text
accepted with standard-form feedback and approximately 80 percent credit
```

Owner route:

```text
Semantic Acceptance Architect -> Sea Speak Linguist -> Director-Engineer -> QA
```

### 9. User Answer vs Standard Comparison

Finding:

```text
system does not show a clear comparison between what user wrote and standard form
```

Director conclusion:

```text
valid feedback gap
```

Expected direction:

```text
show user answer, standard form, and calm difference note without technical raw diff noise
```

Owner route:

```text
Semantic Acceptance Architect + Watch HUD Interaction Designer
```

### 10. Last Answer Transition

Finding:

```text
final answer disappears directly into watch summary
```

Director conclusion:

```text
valid UX bug
```

Expected direction:

```text
show final answer feedback first, then allow/trigger close-watch transition
```

Owner route:

```text
Watch HUD Interaction Designer -> Director-Engineer
```

### 11. Summary / Debrief Clarity

Finding:

```text
summary debrief is too technical, exposes internal branch keys, and duplicates buttons with similar meaning
```

Director conclusion:

```text
valid UX/copy defect
```

Expected direction:

```text
collapse technical debrief; show one next step; avoid duplicate Dработать/Сразу в доработку actions; never expose branch.* keys
```

Owner route:

```text
Watch HUD Interaction Designer -> Localization Architect -> QA
```

### 12. Difficulty Growth And System Learning

Finding:

```text
need a separate plan for complexity growth, answer learning, and pass filters
```

Director conclusion:

```text
valid architecture track; should precede or coordinate gamification implementation
```

Owner route:

```text
Progression Algorithm Architect
```

Expected direction:

```text
stage-based difficulty model; role filters; unlock/hold rules; use soft-accept signals without storing private/raw answer data in player progression
```

## Proposed Narrow Agents

| Agent folder | Responsibility | First task | Default mode |
| --- | --- | --- | --- |
| `onboarding-flow-architect/` | First-launch funnel, login/start layering, clean entry into first watch | Map and simplify startup path | Report-only |
| `watch-hud-interaction-designer/` | Active watch card, submit loading, hints, feedback colors, final-answer transition, summary clarity, ad placeholder | Watch interaction spec | Report-only |
| `auth-email-deliverability-steward/` | Login-code sender policy, no-reply decision, deliverability boundaries | Sender decision card | Report-only |
| `beginner-curriculum-curator/` | Beginner first-session pool, role/context filtering, technical item exclusion | Beginner pool audit | Report-only |
| `semantic-acceptance-architect/` | Soft-accept taxonomy, 80% non-standard meaning-preserving answers, user-vs-standard comparison | Acceptance taxonomy spec | Report-only |
| `progression-algorithm-architect/` | Difficulty growth, unlock/hold/review rules, learning filters | Stage-based progression algorithm spec | Report-only |

## Agent Creation Status

Starter folders created:

```text
content/captain-ether/roles/onboarding-flow-architect/
content/captain-ether/roles/watch-hud-interaction-designer/
content/captain-ether/roles/auth-email-deliverability-steward/
content/captain-ether/roles/beginner-curriculum-curator/
content/captain-ether/roles/semantic-acceptance-architect/
content/captain-ether/roles/progression-algorithm-architect/
```

Each folder contains:

```text
rules.md
handoff.md
tasks/README.md
reports/README.md
```

The folders are not activation. Each agent remains dormant until the
Director-Engineer assigns a narrow task.

## Recommended Activation Order

Do not start with code. Start with independent reports:

```text
1. Onboarding Flow Architect: first-launch funnel map.
2. Watch HUD Interaction Designer: watch-card/submit/hint/summary spec.
3. Beginner Curriculum Curator: first-session pool and role filter audit.
4. Semantic Acceptance Architect: understood_non_standard taxonomy.
5. Auth Email Deliverability Steward: no-reply sender decision card.
6. Progression Algorithm Architect: stage-based growth and learning-filter spec.
```

Then Director-Engineer consolidates into implementation slices.

## Implementation Stop Rule

No code should begin until at least these documents exist:

```text
first-launch funnel spec
watch interaction spec
beginner pool audit
soft-accept taxonomy
sender decision card
progression algorithm spec
```

After those are accepted, implementation should be split into small code gates:

```text
UX flow/HUD gate
content pool/filter gate
matcher soft-accept gate
hint/feedback gate
summary simplification gate
email sender config gate if Platform/Auth approves
```

## Decision

```text
CEO_FINDINGS_CAPTURED
AGENT_STARTERS_CREATED
NO_CODE_YET
```
