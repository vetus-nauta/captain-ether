# CE-SPRINT-0194A First-Launch Funnel Spec

Date: 2026-06-04
Role: Onboarding Flow Architect
Status: REPORT_READY_FOR_DIRECTOR_REVIEW
Mode: report-only
Allowed file: `content/captain-ether/roles/onboarding-flow-architect/reports/sprint-ce-0194a-first-launch-funnel-spec-2026-06-04.md`

## Status: REPORT_READY_FOR_DIRECTOR_REVIEW

Task result: PASS.

Scope confirmation:

- `code_changed=false`
- `runtime_changed=false`
- `ui_changed=false`
- `content_json_changed=false`
- `auth_config_changed=false`
- `production_changed=false`
- `other_games_changed=false`
- `secrets_logged=false`

Checks performed:

- Read required Captain Ether role/protocol files.
- Read CEO sprint CE-0193 findings and agent roster report.
- Inspected `public/assets/app.js` only to understand current route and first-run flow.
- Browsed current 2026-relevant UX, accessibility, browser, auth, and i18n guidance before recommendations.

## Current observed flow map

Observed from `public/assets/app.js` inspection only.

Current app boot:

```text
boot()
-> register service worker if available
-> GET /api/auth/me.php
-> set state.user/state.csrf
-> renderProfile()
-> renderCurrentRoute()
```

Current root route `/`:

```text
/ or /index.html
-> renderHome()
-> language reminder
-> Maritime Games hub hero
-> Open Captain Ether CTA
-> Lost Oars CTA
-> Answer log CTA for admin only
-> progress overview for logged-in users
-> active/planned game cards
-> management panel
-> disclaimer panel
```

Current Captain Ether route:

```text
/captain-ether entry route from registry
-> renderGameRoute(captain_ether)
-> if not logged in: renderLogin()
-> if logged in: renderLevelSelect()
```

Current login route/layer:

```text
renderLogin()
-> email form
-> POST /api/auth/request-code.php
-> code form
-> POST /api/auth/verify-code.php
-> state.user/state.csrf updated
-> renderProfile()
-> renderCurrentRoute()
```

Current level/watch layer:

```text
renderLevelSelect()
-> Beginner / Intermediate / Advanced cards
-> Start watch CTA on each card
-> startWatch(level)
-> POST /api/captain-ether/start-watch.php
-> renderWatch()
```

Current active watch:

```text
renderWatch()
-> question card
-> previous-result box
-> answer form
-> hint button
-> skip button
-> right-side watch metadata
-> Exit to hub
-> submitAnswer()
-> render next question OR finishWatch()
```

Current completion/revision loop:

```text
finishWatch()
-> summary stats and recommended next action
-> Lost Oars CTA
-> Continue CTA
-> if next_step clear_revision: renderLostOars()
-> otherwise may call skip-cleanup then start recommended watch

renderLostOars()
-> revision list
-> check/hint per item
-> auto-return to recommended watch when cleared
-> Hub CTA
-> Return to recommended watch CTA
```

Observed first-launch mental model:

```text
Game hub / platform marketing / progress / management / disclaimer
  mixed with
Captain Ether login gate
  mixed with
manual level picker
  mixed with
active-watch training HUD
  mixed with
revision/retention loop
  mixed with
admin answer-log entry points
```

## Problems and severity

Severity scale:

- S1: blocks or seriously confuses first successful watch.
- S2: causes hesitation, wrong mental model, or repeated avoidable friction.
- S3: polish/local clarity issue that should be solved before broad release.

Findings:

- S1: First-run entry has no single primary job. Root route presents game hub, platform stats, progress, Lost Oars, answer log, game cards, management copy, and disclaimer before the new player has taken the first watch.

- S1: Captain Ether route jumps from login directly to `Choose a watch`. A first-time user is asked to choose level before the product has framed the recommended beginner path, what a watch is, and what happens after login.

- S1: Returning-player loop and first-player funnel are not separated. Progress overview, recommended watch, Lost Oars, and summary continuation are valuable after data exists, but they compete with onboarding when no completed watch exists.

- S2: The hub and game identities are blurred. The hero says `Maritime Games`, the Captain Ether route says `Captain Ether`, and the level screen says `Choose a watch`; this is structurally valid for a platform, but confusing as a first-run funnel for one active game.

- S2: Login is framed as a standalone screen rather than a step inside taking the first watch. The current copy says login saves watches and Lost Oars, but does not answer whether the user is blocked, whether email code is temporary, or what comes next.

- S2: Browser history reflects only route-level transitions, not onboarding substeps. Email form -> code form, level select -> watch loading, and summary -> revision are state changes inside the same route/screen model. This can make Back behavior feel inconsistent or surprising.

- S2: Loading/status messages are visual text only in the inspected flow. The funnel uses status text such as warming/checking/loading; before implementation, these should be specified as non-interruptive live status messages.

- S2: The first-run path includes advanced choices too early. Beginner/intermediate/advanced cards are useful later, but a novice first launch should default to a guided short watch and hide or de-emphasize advanced levels until the user understands the mechanic.

- S2: Exit destinations are inconsistent with state. `Exit to hub` from active watch goes to the platform hub, while `To watches` in answer log goes to level select. First-run should distinguish platform home, Captain Ether home, and active watch exit.

- S3: Admin answer log is correctly role-gated, but admin affordances still appear inside the same screen family as learner watch selection. For clean onboarding, admin tools should not be part of the learner funnel even for admin users unless explicitly opened from a management area.

- S3: Localization has uneven first-run risk. English and Russian are fuller; other locales use partial overrides over English fallback. The funnel must be resilient when untranslated keys fall back to English and when labels expand in German/Italian/Spanish/Serbian.

## Current technology / best-practice basis with citations

Authoritative/current basis reviewed before recommendations:

- W3C WCAG 2.2 is the current accessibility baseline for this flow. W3C notes WCAG 2.2 became a W3C Recommendation on 2023-10-05 and adds criteria relevant to modern onboarding: focus not obscured, target size, consistent help, redundant entry, and accessible authentication. Source: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/

- W3C WCAG 2.2 Editor's Draft dated 2026-06-01 is the authoritative seed source requested for this report. It states that WCAG 2.2 addresses accessibility across desktops, laptops, kiosks, and mobile devices, and that following the guidelines often improves general usability. It also lists the relevant success criteria used below: Focus Visible 2.4.7, Focus Not Obscured 2.4.11, Consistent Navigation 3.2.3, Consistent Help 3.2.6, Accessible Authentication 3.3.8, and Status Messages 4.1.3. Source: https://w3c.github.io/wcag/guidelines/22/

- W3C WCAG 2.2 SC 4.1.3 Status Messages says status messages in markup must be programmatically determinable through role/properties so assistive technologies can present them without receiving focus. Project-specific inference: Captain Ether first-launch status text such as `Warming up the radio`, `Code sent`, `Checking call sign`, `Checking answer`, and `Watch closed` must be implemented as accessible status updates, not visual-only text. Seed source: https://w3c.github.io/wcag/guidelines/22/#status-messages

- W3C WCAG 2.2 SC 3.2.6 Consistent Help says repeated help mechanisms across a set of pages must occur in the same order relative to other page content unless the user initiates a change. Project-specific inference: Captain Ether help, hint, disclaimer/help, and route-back affordances should stay in predictable locations across intro, login, take-watch, active-watch, and summary states. Seed source: https://w3c.github.io/wcag/guidelines/22/#consistent-help

- W3C WCAG 2.2 SC 2.4.7 Focus Visible requires a visible keyboard focus indicator, and SC 2.4.11 Focus Not Obscured requires keyboard-focused UI components not to be entirely hidden by author-created content. Project-specific inference: first-run screen transitions must define focus placement; mobile keyboard layouts must not hide the active email/code/answer field; CTA focus states must be visibly distinct from hover/active states. Seed sources: https://w3c.github.io/wcag/guidelines/22/#focus-visible and https://w3c.github.io/wcag/guidelines/22/#focus-not-obscured-minimum

- W3C WCAG 2.2 SC 3.2.3 Consistent Navigation says repeated navigation mechanisms within a set of pages must occur in the same relative order unless changed by the user. Project-specific inference: Captain Ether should consistently separate `Back to Maritime Games`, `Captain Ether home`, `Exit watch`, and `Continue/revise` navigation rather than reusing `Hub` for different destinations. Seed source: https://w3c.github.io/wcag/guidelines/22/#consistent-navigation

- W3C WCAG 2.2 SC 3.3.8 Accessible Authentication requires authentication flows not to depend on cognitive function tests unless supported by alternatives or mechanisms; W3C explicitly discusses code/OTP entry needing mechanisms such as copy/paste or user-agent assistance. Source: https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum

- W3C WCAG 2.2 SC 2.5.8 Target Size Minimum requires touch/click targets to be at least 24 CSS px or sufficiently spaced. This matters for mobile first-run CTAs, level cards, hint/skip, and auth controls. Source: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum

- W3C WCAG 2.2 SC 2.4.11 Focus Not Obscured requires focused controls not to be hidden by author-created content. This matters for mobile keyboards, sticky headers, auth forms, and watch answer input. Source: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html

- W3C WCAG SC 4.1.3 Status Messages requires status changes that do not move focus to be programmatically available to assistive technologies. This directly applies to `Warming up the radio`, `Code sent`, `Checking call sign`, answer checking, and watch loading states. Source: https://w3c.github.io/wcag/understanding/status-messages.html

- MDN documents `role="status"` as a polite live region for advisory information and advises not moving focus to the status when it updates. This is suitable for non-blocking auth/watch progress updates. Source: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role

- MDN documents the History API as the established SPA mechanism for browser session history, `pushState`, `replaceState`, and `popstate`. Source: https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API

- web.dev notes the Navigation API became Baseline Newly Available in 2026 and improves browser navigation handling, including automatic accessibility primitives such as focus restoration. Inference for Captain Ether: keep the current History API path for compatibility unless the Director-Engineer chooses a broader router modernization, but specify route/state/focus behavior now so the implementation can later migrate cleanly. Source: https://web.dev/blog/baseline-navigation-api

- Apple Human Interface Guidelines for onboarding advise that onboarding should be fast, fun, optional when possible, and should teach through interactivity rather than long instruction. Source: https://developer.apple.com/design/human-interface-guidelines/onboarding

- Material Design onboarding guidance frames onboarding as part of a longer journey ending in the first key action, recommends showing onboarding to first-time users and not returning users, and describes the Quickstart model as landing users directly into core functionality after sign-in/setup. Source: https://m2.material.io/design/communication/onboarding.html

- Material Design communication guidance states acknowledgements reduce uncertainty about actions and background system results. Inference for Captain Ether: first watch start, code sent, answer submitted, and watch closed should acknowledge state changes clearly without modal overuse. Source: https://m2.material.io/design/communication/confirmation-acknowledgement.html

- OWASP Session Management Cheat Sheet recommends secure session cookies with `Secure`, `HttpOnly`, and `SameSite` protections and warns against exposing session identifiers in URLs or script-accessible storage. Source: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html

- MDN documents `autocomplete="one-time-code"` as an autocomplete token. Inference for Captain Ether: OTP/code input should allow paste and browser assistance, with numeric input mode only as keyboard hint, not as a barrier. Source: https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/autocomplete

- MDN documents the HTML `lang` attribute as the mechanism for declaring page and part languages, with WCAG accessibility relevance for screen-reader pronunciation. Source: https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/lang

## Proposed first-run funnel

Design principle:

```text
First launch should not be a platform tour. It should get the player into one calm beginner watch with clear identity, minimal choices, safe auth, and obvious continuation.
```

Recommended primary funnel for first-time unauthenticated player entering Captain Ether:

```text
1. Captain Ether intro
2. Save progress / login status
3. Take first watch
4. Active first watch
5. Watch closed summary
6. Next step: revise, continue, or return to Captain Ether home
```

Detailed sequence:

```text
Step 0: Route resolution
- If URL is Captain Ether entry route, enter Captain Ether funnel directly.
- If URL is platform `/`, keep platform hub, but make `Open Captain Ether` route into the same Captain Ether funnel.
- Do not show multi-game discovery inside the Captain Ether first-run route.
```

```text
Step 1: Captain Ether intro
Screen job: explain one thing and offer one action.
Primary message: Captain Ether is a maritime English radio-watch trainer.
Primary CTA: Take first watch.
Secondary CTA: I already have progress / Log in.
Tertiary link: Back to Maritime Games.
Do not show: Lost Oars, answer log, management panel, advanced levels, progress dashboard, or full disclaimer wall.
```

```text
Step 2: Login/status gate
Screen job: save progress without making auth feel like a separate product.
If logged in: show signed-in status and continue automatically or with one CTA.
If not logged in: ask for email code inside the funnel.
Copy frame: `Save this watch and your revision route.`
Required support: paste code, browser OTP/autocomplete, resend path, non-secret status messages, clear error state.
```

```text
Step 3: Take first watch
Screen job: make the first watch choice obvious.
Default: Beginner short watch.
Primary CTA: Start beginner watch.
Secondary disclosure: Change level.
Level choices may exist behind disclosure or below the fold after the recommended beginner card.
Do not ask new players to choose among three equally weighted levels before the first watch.
```

```text
Step 4: Active first watch
Screen job: one question, one answer, supportive controls.
Keep first watch inside active-watch HUD ownership, but onboarding spec requires:
- clear progress count;
- connected question/input/result card;
- disabled/checking submit state;
- hint as learning support, not hidden trivia;
- exit confirmation or clear safe-exit language if leaving loses current unsaved active state.
```

```text
Step 5: First summary
Screen job: close the loop and teach the system.
Show: clean count, supported/hint count, to-revise count, score only if it does not dominate.
Explain Lost Oars as calm revision, not punishment.
Primary next action based on result:
- if revision load exists: Revise 2 phrases.
- if clean enough: Start next short watch.
- always: Captain Ether home.
```

```text
Step 6: Returning-player Captain Ether home
Screen job: route based on progress.
Only after at least one completed watch, show:
- recommended watch;
- Lost Oars count;
- recent watch;
- level change;
- disclaimer/help;
- platform/game hub link.
```

Recommended route/layer model:

```text
Platform hub layer:
/ -> Maritime Games hub

Captain Ether product layer:
/captain-ether -> first-run or returning Captain Ether home

Auth layer:
/captain-ether/login or in-flow auth state, not platform login detour

Setup layer:
/captain-ether/first-watch or equivalent internal state

Watch layer:
/captain-ether/watch/{watch_id or active-session token if safe}

Summary/revision layer:
/captain-ether/summary
/captain-ether/lost-oars

Admin layer:
/captain-ether/admin/answer-log or management-only entry
```

Implementation inference for Director-Engineer:

- If route expansion is too large for the next slice, keep a single Captain Ether route but persist a strict funnel state machine internally: `intro -> auth -> first_watch_ready -> active_watch -> summary -> returning_home`.
- Do not rely on copy alone to fix layer mixing; the screen inventory and primary CTA hierarchy must change.
- WCAG-specific project inference: route/state cleanup is not only polish; it supports predictable navigation, consistent help placement, focus-visible transitions, and assistive-technology-readable status messages.

## Auth/session handling without secrets

This report does not inspect or change auth implementation, config, SMTP, cookies, session storage, codes, or secrets.

Funnel-level requirements:

- Never expose login codes, sessions, CSRF values, player email, SMTP details, cookies, or auth tokens in reports, logs, screenshots, player-facing debug copy, URLs, or analytics events.

- Treat email-code login as an in-funnel progress-saving step, not as a marketing/account-registration wall.

- Existing visible copy for local/dev code must not appear in production. If a dev-only code path remains, it must be environment-gated outside player-facing production.

- OTP/code field should allow paste and browser assistance; do not split code into six hostile inputs unless paste and autofill are excellent. Prefer one field with `inputmode="numeric"`, maxlength guidance, and autocomplete support if implemented.

- Status updates must be specific and non-secret: `Code sent`, `Checking code`, `Signed in`, `Code expired`, `Try again`.

- Auth success should return the player to the exact funnel intent: `Take first watch`, not generic hub.

- Auth failure should keep email context, preserve typed email, focus the actionable field, and provide a resend option without revealing whether an email belongs to a real player account.

- Session state should be represented as `signed in / not signed in / checking session / session expired`, never by exposing raw token/session values.

- If session expires during active watch, preserve local unsent answer text if safe, stop submission, and ask the player to sign in again before saving.

Security basis: OWASP recommends protected cookies and avoiding session identifiers in URLs/script-accessible locations; this funnel spec only defines UX states and defers implementation to Director-Engineer / auth owner.

## Desktop/mobile behavior

Desktop:

- Captain Ether first-run route should use one dominant left-to-right hierarchy: intro/action card plus compact status/help card.

- Platform hub may remain richer, but Captain Ether first-run must not show the full hub inventory.

- Level choice should show beginner as the recommended default; intermediate/advanced should be lower emphasis or behind `Change level`.

- Right column in first-run should be educational/status/help only. No advertising or admin widgets in first-run or active watch.

- Active watch desktop may reserve a right column for watch metadata, but the primary question/input/result column must be visually dominant.

Mobile:

- First visible viewport should contain identity, one-sentence value, and the primary CTA without requiring scrolling past platform/disclaimer content.

- Auth fields and primary CTAs must remain visible when the software keyboard opens; focused inputs must not be obscured.

- Touch targets must meet WCAG target-size expectations and have enough spacing around hint/skip/submit controls.

- Avoid multi-card level grids as the first mobile decision. Use a single recommended beginner card first.

- Active watch must not include ads, admin tools, or dense side metadata in the learning column.

- If a summary has multiple next actions, use one primary action and one secondary action. Avoid three equal buttons on narrow screens.

- Long translated labels must wrap without truncating meaning. Especially test German, Russian, Spanish, Serbian, and Chinese layouts.

## i18n/copy implications

Supported UI set remains: `en`, `ru`, `de`, `it`, `es`, `sr`, `zh`; unsupported system languages should still start in English.

Required copy architecture before implementation:

- Add/reuse i18n keys for every player-facing first-run string; do not hardcode visible copy.

- English remains the root fallback.

- Captain Ether first-run copy should avoid idioms that are hard to translate, except deliberate game vocabulary already accepted by the Director.

- `watch`, `Lost Oars`, `Sea Speak`, and `Captain Ether` need term decisions per locale. Do not translate Sea Speak meaning as UI localization.

- The intro must distinguish UI language from target language: the learner translates into English Sea Speak even when UI is Russian/German/etc.

- For language accessibility, ensure document `lang` follows resolved UI locale and any English Sea Speak prompt/standard phrase inside non-English UI can be marked or otherwise handled consistently if implementation supports mixed-language parts.

- Copy length risks:
  - German tends to expand labels and compound nouns.
  - Russian can expand explanatory copy and wrap action labels.
  - Serbian Latin may fit similarly to English but must be checked on narrow mobile widths.
  - Chinese labels are compact, but mixed English terms such as `Sea Speak` and `Lost Oars` need spacing checks.

Suggested English fallback copy skeleton for implementation planning only:

```text
Intro eyebrow: Captain Ether
Intro title: Take your first radio watch
Intro body: Practise maritime English radio phrases in short, calm calls.
Primary CTA: Take first watch
Secondary CTA: Log in to continue
Back link: Maritime Games

Auth title: Save your watch progress
Auth body: Enter your email and we will send a short sign-in code.
Code title: Enter the code
Code help: Paste the code from your email.
Signed-in status: Signed in. Ready for watch.

First-watch title: Beginner short watch
First-watch body: 12 calm calls: words, short phrases, and first replies on air.
Primary CTA: Start beginner watch
Disclosure: Change level
```

Localization risk: final wording should be reviewed by Localization Architect if the Director-Engineer activates that role. This report defines structure, not final production copy.

## Acceptance criteria before code

Director-Engineer should not implement until these are accepted or narrowed:

- A single first-run state model is approved: `intro -> auth/status -> take first watch -> active watch -> summary -> returning home`.

- Platform hub and Captain Ether first-run are defined as separate layers.

- New players do not see Lost Oars, progress dashboard, answer log, management panel, or advanced-level choice as primary first-run controls.

- Returning players with progress may bypass intro and land on Captain Ether home/recommended watch.

- Auth success returns to the player intent that triggered auth.

- Auth flow has no production debug code exposure and no secrets in player-facing output.

- OTP/code flow allows paste and user-agent assistance.

- Status/loading/checking messages are specified as accessible status messages.

- Repeated help and hint mechanisms keep a consistent location and order across first-run screens unless the user intentionally opens a different mode.

- Repeated navigation controls keep stable meaning and order: platform back link, Captain Ether home, active-watch exit, summary continue/revise.

- Browser Back behavior is defined for all major states: platform hub, Captain Ether intro/home, auth email step, code step, level/select step, active watch, summary, Lost Oars.

- Focus behavior is defined after each in-place screen transition and after validation errors.

- Visible focus indicators are present for all keyboard-operable controls and are not hidden by panels, headers, overlays, or the mobile keyboard.

- Mobile first viewport shows the primary action without platform clutter.

- Touch targets and spacing meet WCAG 2.2 target-size expectations.

- Copy is routed through i18n keys with English fallback and supported locale coverage plan.

- The first watch beginner pool and difficulty correction are coordinated with Beginner Curriculum Curator; this funnel must not promise beginner calmness if runtime still serves advanced/onboard/station-side items.

- Watch HUD interaction details are handed off to Watch HUD Interaction Designer before UI implementation.

## Handoff to Watch HUD Interaction Designer and Director-Engineer

Handoff to Watch HUD Interaction Designer:

- Own the active-watch card after `Start beginner watch`.

- Required interaction proposals:
  - one connected vertical question/input/result card;
  - submit disabled/loading/checking state;
  - no double submit;
  - clear hint affordance and progressive hint framing;
  - calm correct/soft/wrong feedback states;
  - mobile-safe layout with no active-watch ad slot;
  - summary next-action hierarchy.

- Respect funnel boundary: active watch should not expose platform hub clutter, admin answer log, or advertising in the learning path.

Handoff to Director-Engineer:

- Decide implementation slice size:
  - Option A: minimal internal state-machine change under existing Captain Ether route.
  - Option B: route-level cleanup with distinct Captain Ether intro/home/login/watch/revision paths.

- Route/auth decisions remain Director-Engineer/auth-owner scope. This report does not authorize code, auth, config, production, or public asset edits.

- Coordinate with Beginner Curriculum Curator before calling the first watch `beginner` or `calm`, because CEO findings show current beginner content may include too-hard items.

- Coordinate with Localization Architect if new first-run copy keys are approved.

- Keep admin answer log reachable only from an admin/management path, not from learner first-run or level selection.

Open questions for Director-Engineer:

- Should first launch require login before the first watch, or allow a guest/demo first watch with login at summary before save? Current implementation requires login; this report can support either, but auth-before-watch is simplest with existing session/progress model.

- Should Captain Ether have a distinct returning-player home separate from platform `/`, or should existing `/captain-ether` level select evolve into that home?

- Should browser URLs represent substeps now, or should the first implementation keep substeps internal and only fix visual hierarchy?
