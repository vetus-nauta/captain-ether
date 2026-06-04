# Sprint CE-0194B Watch HUD Interaction Spec

Date: 2026-06-04
Role: Watch HUD Interaction Designer
Scope: Captain Ether active watch HUD/interaction design report only
Status: REPORT_READY_FOR_DIRECTOR_REVIEW

## Status: REPORT_READY_FOR_DIRECTOR_REVIEW

Task result: PASS.

Report-only mode confirmed. No code, runtime, UI asset, content JSON, auth, router, registry, production, deploy, Watch Officer, Nav Desk, or other-game file was changed.

Allowed file changed:

- `content/captain-ether/roles/watch-hud-interaction-designer/reports/sprint-ce-0194b-watch-hud-interaction-spec-2026-06-04.md`

Read for project context:

- `content/captain-ether/role-command-protocol.md`
- `content/captain-ether/roles/README.md`
- `content/captain-ether/roles/office-manifest.md`
- `content/captain-ether/roles/watch-hud-interaction-designer/rules.md`
- `content/captain-ether/roles/watch-hud-interaction-designer/handoff.md`
- `content/captain-ether/roles/director-engineer/reports/sprint-ce-0193-ceo-session-findings-and-agent-roster-2026-06-04.md`
- `public/assets/app.js` for understanding only
- `public/assets/app.css` for understanding only

## Current HUD defects and severity

Severity scale: S1 blocks trust or submission, S2 causes material confusion or mobile friction, S3 polish/learning-quality issue.

| Defect | Severity | Current evidence | Required direction |
| --- | --- | --- | --- |
| Submit has no visible busy state and no double-submit guard. | S1 | `submitAnswer()` sends API request directly; active `#answerButton`, input, hint, and skip controls are not visibly locked while waiting. | Add explicit checking state, disabled controls, live status, and error recovery. |
| Final answer can disappear directly into summary. | S1 | When `data.done` is true, `submitAnswer()` calls `finishWatch()` immediately, replacing the watch screen. | Show final answer feedback first, then transition to summary by CTA or short timer. |
| Question, input, hint, previous result, and feedback are visually related but not a single answer-feedback card. | S2 | `renderWatch()` has a large `question-card`, separate previous `resultBox`, form, tools, and hint box; the right side is metadata. | Use one connected vertical watch card with persistent question, answer input, hint ladder, and current feedback stream. |
| Feedback relies too strongly on color tone and uses emotionally sharp red/orange wrong styling. | S2 | `.result-box.is-wrong` uses accent border/background; correctness classes are color-coded. | Use text labels, icons/shape/border, and calm maritime tones; never color alone. |
| Hint is too weak when only first-letter style content appears. | S2 | UI exposes a single `q.hint` payload and one hint button; no ladder or stage label. | Progressive hint ladder: meaning cue -> structure -> key term -> first-letter late fallback. |
| Right column is mostly metadata and feels empty/unproductive. | S3 | `watch-side` repeats level/type/topic/hint/skip policy, then Exit to hub. | Reserve desktop/tablet right rail for future partner/ad placeholder plus watch context; keep mobile learning-first. |
| Summary/debrief exposes technical pressure model and duplicate-looking actions. | S2 | Summary shows recommended level/branch/pace/length, drivers, pressure by branch/type, plus `Revise phrases` and next-watch button that can route to revision. | Collapse to one clear next step, hide branch keys/internal model, make secondary route explicit. |
| Mobile layout stacks correctly but remains dense and can push active controls below fold. | S2 | At small widths `watch-layout` becomes one column, prompt remains large, side metadata remains in page flow. | Mobile should prioritize prompt, input, submit, hint, feedback; move side/ad/context below or remove during active watch. |

## Current technology / best-practice basis with citations

Current basis checked on 2026-06-04. Sources are current or authoritative primary references where possible. The CEO-provided W3C WCAG 2.2 seed source is used below where directly relevant.

- W3C WCAG 2.2 Editor's Draft dated 2026-06-01 states that WCAG addresses desktop, laptop, kiosk, and mobile-device web content and often improves usability generally. Source: W3C WCAG 2.2 Editor's Draft: https://w3c.github.io/wcag/guidelines/22/
- WCAG 2.2 is the current accessibility baseline to apply for Captain Ether HUD decisions; the Editor's Draft links the latest published version as WCAG 2.2 Recommendation. Source: W3C WCAG 2.2 Editor's Draft / latest published version: https://w3c.github.io/wcag/guidelines/22/ and https://www.w3.org/TR/WCAG22/
- Non-color-only feedback: WCAG 2.2 requires that color not be the only visual means of conveying information, and also requires text contrast of at least 4.5:1 for normal text and 3:1 for large text. Source: W3C WCAG 2.2, Success Criteria 1.4.1 and 1.4.3: https://w3c.github.io/wcag/guidelines/22/#use-of-color and https://w3c.github.io/wcag/guidelines/22/#contrast-minimum
- Button/mobile accessibility: WCAG 2.2 target-size minimum says pointer targets should be at least 24 by 24 CSS pixels, with exceptions. Project-specific inference: Captain Ether should keep the current stronger 44px-plus practical touch target for primary mobile controls because it is a game/training interface with repeated rapid actions. Source: W3C WCAG 2.2, Success Criterion 2.5.8: https://w3c.github.io/wcag/guidelines/22/#target-size-minimum
- Focus management: WCAG 2.2 requires sequential focus order to preserve meaning and operation, visible keyboard focus, and focus not entirely hidden by author-created content. For Captain Ether this means final-answer feedback and `View summary` must not create a confusing focus jump or hidden focused control. Source: W3C WCAG 2.2, Success Criteria 2.4.3, 2.4.7, and 2.4.11: https://w3c.github.io/wcag/guidelines/22/#focus-order, https://w3c.github.io/wcag/guidelines/22/#focus-visible, and https://w3c.github.io/wcag/guidelines/22/#focus-not-obscured-minimum
- Dynamic checking, success, error, and result messages that do not move focus must be programmatically exposed as status messages. Source: W3C WCAG 2.2, Success Criterion 4.1.3: https://w3c.github.io/wcag/guidelines/22/#status-messages and WAI Understanding Status Messages: https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html
- For multi-step DOM updates in live regions, WAI-ARIA allows `aria-busy="true"` while updates are in progress and `false` when the final update is ready. This supports the answer-checking/result replacement pattern. Source: WAI-ARIA 1.3 Editor's Draft, `aria-busy`: https://w3c.github.io/aria/#aria-busy
- Native `disabled` form controls are appropriate for unavailable form actions. MDN notes browsers display disabled form controls differently by default; Captain Ether should add intentional visual state rather than relying on browser gray. Source: MDN disabled attribute, last modified 2026-04-20: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled
- Responsive design should adapt layout by viewport/device characteristics; MDN specifically cites changing columns and increasing button hit areas for touchscreens as common media-query uses. Source: MDN CSS media queries, last modified 2025-12-16: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries
- Any final-answer transition animation must respect reduced-motion preferences. MDN documents `prefers-reduced-motion` as broadly available and driven by OS accessibility settings. Source: MDN `prefers-reduced-motion`, 2026-current page: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- Future ad placement should not interrupt the active learning task. Coalition for Better Ads defines standards around disliked ad experiences and encourages publishers to use them for improved audience experience. Source: Coalition for Better Ads Standards: https://www.betterads.org/standards/
- If ads are later introduced, Google AdSense recommends responsive ad units that fit the browser/device and notes separate-column placement can keep the content column clean. Source: Google AdSense Viewability Best Practices: https://support.google.com/adsense/answer/6219980

Inference clearly marked: because Captain Ether is an active learning/game task rather than article content, any ad placeholder should be treated as non-primary, non-sticky, and absent from the mobile active-watch viewport. This is inferred from the ad standards' user-experience goal and AdSense responsive/separate-column guidance, not directly mandated for this app type by those documents.

## Submit button state machine

Primary goal: the player must always know whether the answer button accepted the click, is checking, failed, or is ready for the next answer.

States:

| State | Button label | Input | Hint/skip | Status/result behavior | Exit condition |
| --- | --- | --- | --- | --- | --- |
| `idle_empty` | `Answer` | Enabled, focusable | Enabled if available | No checking status. | Player types or skips. |
| `idle_ready` | `Answer` | Enabled | Enabled if available | Enter submits. | Submit or skip click. |
| `submitting_answer` | `Checking...` | Disabled or readonly | Disabled | `role="status"` announces checking; card marked busy. | API success or error. |
| `submitting_skip` | `Skipping...` | Disabled | Disabled | Same busy state, skip cause preserved. | API success or error. |
| `result_current` | `Next call` or `Close watch` | Disabled until next action, unless Director keeps auto-advance. | Hint/skip hidden or disabled | Current result is visible in same card. | Next call CTA, auto-advance timer, or close-watch CTA. |
| `submit_error` | `Try again` | Re-enabled with previous typed answer preserved | Re-enabled according to availability | Calm error message in `role="alert"` or assertive status if submission failed. | Retry or edit. |
| `final_result_hold` | `View summary` | Disabled | Hidden/disabled | Final answer result stays visible; summary not shown yet. | Player activates View summary or timer completes after minimum dwell. |
| `finishing_watch` | `Closing watch...` | Disabled | Hidden/disabled | Busy status on final result card. | Summary render success or error. |

Required interaction details:

- Disable the submit button immediately on valid submit and prevent repeated `submitAnswer()` calls until the request resolves.
- Preserve the typed answer on network/API error. Do not clear input or advance index on failure.
- Keep keyboard behavior deterministic: Enter submits only when not busy; Escape should not be required.
- The visible label must change from `Answer` to `Checking...`; a spinner may be added but must not be the only indicator.
- Status should be available to assistive tech without moving focus, using a status/live region aligned with WCAG 4.1.3.
- If implementation uses native `disabled`, use it on real `button` and `input` elements; avoid `aria-disabled` alone for native controls unless there is a deliberate focus-retention reason.
- Localization: add/reuse i18n keys for `watch.checking`, `watch.skipping`, `watch.tryAgain`, `watch.nextCall`, `watch.closeWatch`, `watch.viewSummary`, `watch.closingWatch`, and `watch.submitErrorFallback`. English is root fallback; all supported UI locales need coverage.

## Unified watch card layout

Recommended active-watch desktop structure:

```text
[Primary learning column]
  Unified Watch Card
    A. Watch masthead: Short watch, progress, final-call marker
    B. Prompt block: instruction + source prompt in softer readable orange/amber
    C. Answer block: label, input, Answer/Checking button
    D. Support row: Hint ladder button, Skip as secondary/destructive-low action
    E. Feedback stream: current result, your answer, standard form, difference note
    F. Final hold CTA when last item: View summary

[Right rail desktop/tablet]
  Watch context + reserved partner/ad placeholder + Exit to hub
```

Recommended mobile structure:

```text
Unified Watch Card
  Progress compact line
  Prompt
  Input
  Primary Answer button full width
  Hint/Skip row
  Feedback/hint panel
  Exit to hub as low-priority text/button below card
No ad unit in active watch viewport
```

Design requirements:

- Keep question, answer input, hint, and result in one bounded card so the player reads a single vertical conversation.
- Reduce prompt size from current heavy display scale on mobile; prioritize full phrase readability and less vertical jump.
- Make the previous/current result model explicit. Prefer `Current result` after submit rather than `Previous answer` above the next prompt, because the current code shows previous feedback before the new answer field, which can confuse temporal order.
- For next question after a result, either retain a compact previous-result strip above the new prompt or clear it; do not place previous feedback between new prompt and new input.
- Use semantic labels: `Your answer`, `Standard form`, `Why it counts/what to fix`.
- If Semantic Acceptance Architect adds `understood_non_standard`, reserve a neutral comparison area: `Understood, tighten to standard form` with no raw technical diff.

## Feedback color/tone system

Goal: make feedback calmer, accessible, and maritime-specific without relying on color alone.

Recommended tokens by meaning:

| Feedback | Tone | Visual treatment | Copy tone |
| --- | --- | --- | --- |
| `correct_clean` | Calm turquoise/sea green | Soft aqua background, strong dark text, left rail or check marker | `Accepted. Standard form held.` |
| `correct_with_hint` | Muted blue/teal | Same family but lower confidence badge `With support` | `Accepted with support. Try next one clean.` |
| `understood_non_standard` | Warm sand/amber | Amber-neutral badge `Understood` plus standard form | `Understood. Use this standard radio form.` |
| `spelling_or_minor_variant` | Blue-neutral | Badge `Accepted variant` or `Spelling note` | `Accepted. Tighten spelling/form.` |
| `wrong_retry` | Calm clay/red-brown | Low-saturation red border, pale background, text label `Not yet` | `Not yet. The station would ask for repeat.` |
| `skip` | Gray/navy | Neutral badge `Skipped` | `Skipped. Standard form below.` |
| `system_error` | Alert but not punitive | Clear red outline plus `Could not check` | `Could not check. Your answer is still here.` |

Rules:

- Pass WCAG contrast for all text/background pairs: 4.5:1 normal text, 3:1 large text.
- Do not communicate correctness by green/red alone. Include label text, icon/shape/border, and standard-form content.
- Avoid `Wrong.` as first word in beginner/recovery pacing. Use `Not yet` or `Repeat needed`; reserve `Wrong` only for push/advanced if Director wants sharper tone.
- Keep maritime training tone: concise, calm, operational. No jokes, no shame, no hidden technical matcher terms.
- Localization risk: Russian/German/Serbian copies can become longer; feedback cards must allow wrapping without overflow and should not rely on short English badges only.

## Final answer transition

Current defect: final answer feedback is bypassed because `submitAnswer()` calls `finishWatch()` immediately when `data.done` is true.

Recommended transition:

1. Player submits final answer.
2. Button enters `Checking...`; input/hint/skip disabled.
3. API returns final answer result.
4. Watch card shows final result in the same feedback area with a `Final call complete` label.
5. The primary button changes to `View summary`.
6. Optional auto-advance may start only after a minimum 1.5-2.5 second dwell and must be cancelled if the player interacts, scrolls, or has reduced motion enabled.
7. Activating `View summary` calls finish-watch and shows `Closing watch...` until summary loads.
8. If finish-watch fails, keep final result visible and show retry CTA; do not lose the final feedback.

Motion/accessibility:

- Use a short opacity/translate transition only if `prefers-reduced-motion: no-preference`.
- For reduced motion, replace animation with immediate content swap and clear text status.
- Keep focus in a predictable location: after final result, focus can move to `View summary` if implemented as a deliberate action; do not silently move focus to summary before the user has heard/seen feedback.

## Hint ladder

Goal: hints teach phrase construction instead of acting as a weak first-letter reveal.

Recommended ladder stages:

| Stage | Label | Content | Cost/scoring suggestion | When available |
| --- | --- | --- | --- | --- |
| 0 | `Think first` | No hint shown; optional microcopy explains hint support. | Full score possible. | Default. |
| 1 | `Meaning cue` | Operational meaning, not exact words. Example: `Tell the station your vessel is ready to leave.` | Small support cost. | Beginner/supportive immediately; standard after short hesitation optional. |
| 2 | `Phrase frame` | Skeleton with blanks. Example: `____ ____ to depart.` | Moderate support cost. | After Stage 1 or second hint tap. |
| 3 | `Key term` | One or two important terms. Example: `ready`, `depart`. | Higher support cost. | After Stage 2. |
| 4 | `First letters` | First letters or word count only. | Late fallback; not first hint. | Only after prior stages or sparse mode. |
| 5 | `Show standard` | Reveals standard form, converts action to learning/revision. | Counts as skip/support, not clean. | Last resort. |

Interaction behavior:

- Replace one `Hint` button with `Hint 1 of N` / `Next hint` state copy.
- Display hints inside the unified card below the support row, not detached from the answer flow.
- Each hint panel should include a short label describing what kind of help it is: `Meaning cue`, `Phrase frame`, `Key term`, `First letters`.
- Beginner/supportive watches should start with semantic cue and frame; advanced/sparse watches can jump later in the ladder but still should not make first-letter the only hint.
- Hint telemetry should record stage used, not raw player identity or private answer data. This is a handoff point for Director-Engineer and Semantic Acceptance Architect.
- Content limitation: current API appears to expose one `q.hint`; staged hints likely require content/API support. This role recommends behavior only.

## Right-column desktop/tablet placeholder and mobile ad policy

Desktop/tablet right rail:

- Keep right rail on desktop and horizontal tablet when the viewport can support a two-column layout without narrowing the learning card.
- Top of rail: compact watch context only if it helps learning: level, progress, topic, hint policy in plain language.
- Middle/bottom of rail: future placeholder card labeled internally as `Partner space` / `Future sponsor slot`; public copy should be neutral if visible, e.g. `Reserved for maritime partner message`.
- Placeholder must have fixed safe dimensions and not cause layout shift when future ad code loads.
- Placeholder must not imitate an answer/result card, button, or system status.
- Exit to hub stays below context/placeholder and remains visibly secondary.

Mobile active-watch policy:

- No active-watch ad or partner placeholder in the mobile question-answer viewport.
- Do not use sticky, interstitial, pop-up, auto-expanding, or countdown ad patterns in active watch.
- If monetization is needed on mobile, use summary/home/lost-oars in-flow placement only after the learning turn is complete.
- Mobile ad content must not push the answer input, submit button, or feedback below the initial task sequence.

Inference: Separate-column desktop placement is acceptable because it can preserve the learning column; mobile active-watch ads are rejected because the task is high-focus, short-form training and ad intrusion would directly degrade answer accuracy and trust.

## Modern mobile handling

Recommended mobile acceptance target:

- Active watch must fit prompt, input, answer button, and hint/skip controls comfortably at 360px width without horizontal scroll.
- Use full-width primary button and two secondary controls in one row only when each target remains at least 44px high and not cramped; otherwise stack.
- Respect `env(safe-area-inset-bottom)` for bottom spacing and keep final buttons clear of browser UI.
- Avoid modal-style answer or summary interactions; mobile virtual keyboards can shrink the viewport and obscure fields.
- Keep prompt font responsive but bounded; current 1.56rem at <=560px is safer than desktop scale, but long translations and long prompts need wrapping QA.
- Do not rely on hover. All states must be touch, keyboard, and screen-reader operable.
- Test with supported locales: `en`, `ru`, `de`, `it`, `es`, `sr`, `zh`; unsupported system languages must still start in English according to existing policy.

## Summary/debrief simplification

Current summary has useful data but exposes too much model detail for a player immediately after a watch.

Recommended summary hierarchy:

```text
Watch closed
  One calm outcome sentence
  Four simple stats: Clean, With support, To revise, Score

Next move
  One primary action only:
    If revision load exists: Revise phrases
    Else: Start recommended watch
  One secondary action:
    Back to hub / Choose another watch

Details (collapsed by default)
  Why this route
  Friendly branch/type labels only, no internal keys
```

Button clarity:

- If `next_step === clear_revision`, the primary button label should be `Revise phrases` and there should not be another competing `Revise phrases` button nearby.
- If next watch is safe, primary button should be `Start recommended watch` or `Start focused watch`; secondary should be `Revise phrases` only if unresolved revision exists.
- `Continue` is too vague for the summary if it can either revise, skip cleanup, or start a watch. Use outcome-specific labels.
- Do not expose `branch.*` keys, `pressure_by_branch`, `pressure_by_type`, matcher terms, or route internals in player-facing summary.
- Details can be available as progressive disclosure for motivated users, but the default must answer: `What happened? What should I do next?`

Localization notes:

- New summary copy must be i18n-keyed. English fallback required.
- Russian current duplicate-action issue is especially visible because `Доработать` / `Сразу в доработку` can appear semantically similar. Use one route label per actual action.
- Long German/Spanish strings may make two-button rows wrap; layout should tolerate one button per line.

## Acceptance criteria before code

Director-Engineer should accept this spec for implementation only if the implementation task can meet these criteria:

- `Answer` button visibly changes to `Checking...` within the same frame/tick as submit and prevents duplicate answer/skip submissions.
- Input, hint, skip, and answer controls have deterministic disabled/readonly behavior during submit and restore correctly on API/network error.
- Status messages for checking, errors, and results are exposed through appropriate live/status semantics without forcing focus jumps.
- Final answer result remains visible before summary; summary cannot replace the final feedback immediately.
- Unified watch card contains prompt, input, hint, and result in one visual flow on desktop and mobile.
- Feedback uses text labels plus color/shape; no correctness meaning depends on color alone.
- All feedback colors pass WCAG contrast against their backgrounds.
- Hint ladder has at least three visible stages before first-letter fallback in beginner/supportive mode, or the implementation explicitly documents why API/content cannot yet support it.
- Right rail exists only where it does not compress the active card; mobile active watch contains no ad placeholder.
- Summary presents one primary next action and no duplicate action buttons with overlapping meanings.
- No internal branch keys, pressure maps, matcher keys, or route internals are visible to players in default summary.
- All new player-facing copy uses i18n keys with English fallback and coverage plan for `en`, `ru`, `de`, `it`, `es`, `sr`, `zh`.
- Mobile QA covers at least 360px width, 390px iPhone-like width, and a horizontal tablet breakpoint.
- Reduced-motion behavior is defined for final transition and any loading animation.
- No production/auth/config/secrets/player identity changes are included in the implementation slice.

## Handoff to Director-Engineer

Recommended implementation slicing:

1. Submit state and final-result hold gate: add busy guard, disabled controls, status/live messages, final feedback before summary.
2. Unified watch card gate: restructure active watch markup/classes so prompt/input/hint/result are one vertical card; keep right rail independent.
3. Feedback tone gate: introduce calmer result classes/tokens and labels; verify contrast and color-independent meaning.
4. Hint ladder gate: coordinate with Semantic Acceptance Architect and content/API availability; stage existing single hint only as temporary fallback if needed.
5. Right rail/mobile gate: reserve desktop/tablet placeholder and remove active-watch mobile ad/placeholder path.
6. Summary simplification gate: one primary action, collapsed details, no internal keys by default.
7. Localization/QA gate: add i18n keys for all new labels and smoke supported locales on mobile.

Risks/open questions:

- Current API/content appears to provide only one `q.hint`; true hint ladder may need API/content schema expansion, outside this role's authority.
- `understood_non_standard` requires Semantic Acceptance Architect and Sea Speak Linguist decisions before feedback categories can be final.
- If future ad vendor scripts are added, layout-shift, privacy, and mobile policy must be reviewed separately before production.
- If Director wants auto-advance after each result, it must still preserve final-answer dwell and provide reduced-motion-safe behavior.

Copy-ready Director decision request:

```text
Watch HUD Interaction Designer report CE-0194B is ready for Director review.
Recommended next gate: Director-Engineer implementation slice for submit busy state + final-answer-before-summary hold, with no ad or hint-schema expansion in the first code gate.
```
