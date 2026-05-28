# UX/HUD Report: TASK-CE-0019 Public Stream Selector UX Contract

Date: 2026-05-28
Role: UX/HUD Designer / Captain Ether
Mode: report-only UX contract

## Status

PASS

The public `Practice stream` selector UX contract is ready for Localization
Architect and Director-Engineer synthesis.

No runtime/API/UI files, CSS, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, player data, sessions, cookies, CSRF, email, or secrets were
changed.

## Recommended Selector Model

Use a compact non-blocking selector on the Captain Ether level-select screen.

Placement:

- inside `renderLevelSelect()`;
- after the level-screen title/copy;
- before the beginner/intermediate/advanced level cards;
- outside any level card;
- not inside the watch question card.

Visual model:

- label: `Practice stream`;
- control: two-option segmented/radio group;
- option 1: current `ru_source`, selected by default;
- option 2: `english_native`, opt-in only when public release is explicitly
  enabled;
- one helper line under the control;
- one progress-safety line only when the player changes selection.

The selector must not become a first-run modal or mandatory gate for existing
players. Existing Captain Ether users must still be able to land on the level
screen and start the current RU-source watch without answering a new setup
question.

## Affected Screens

Level select:

- shows selector;
- defaults to `ru_source`;
- shows unavailable state if a stream exists in the contract but is not
  released for the current user;
- sends selected stream only through the Director-approved API contract.

Watch screen:

- primary question area remains unchanged;
- show stream context only as a small chip in the side panel, not in the prompt
  stage;
- do not repeat long stream explanations during the watch.

Summary:

- show stream as compact context near the summary title or stats;
- no warning language unless a stream switch just happened.

Lost Oars:

- show current stream near the heading;
- lost items must come only from the selected stream;
- do not mix RU-source and English-native lost items in the same list.

Answer log admin:

- stream is a filter/context field;
- admin may see `all`;
- learner-facing UI must never expose `all`.

## State Model

Required UX states:

| State | UX behavior |
| --- | --- |
| `ru_source` selected | Default state. Existing flow remains calm and unchanged except visible context. |
| `english_native` selected | Explicit opt-in. Shows English-source practice context. |
| loading | Disable stream controls and level-start buttons until stream availability is known. |
| unavailable | Keep option visible only if Director wants teaser/disabled state; otherwise hide it. Never start an unavailable stream. |
| error | Fall back to `ru_source` selection display and show a localized, short retry/error line. |

Switching stream:

- explicit click/tap only;
- reversible before watch start;
- does not delete or overwrite progress;
- updates level-screen context before the player starts a watch;
- should not switch an already-running watch.

## Mobile Constraints

Mobile layout requirements:

- one-column selector at narrow widths;
- stable option height across locales;
- option labels may wrap to two lines;
- helper text may wrap below options;
- no horizontal scroll at common mobile widths;
- first level-start button remains reachable without excessive scroll;
- the watch screen keeps prompt, answer input, hint, skip, and feedback as the
  dominant interaction path.

Do not use paragraph-heavy option cards. The selector is a mode control, not a
marketing block.

## Accessibility

Required behavior:

- use radio-group or equivalent segmented-control semantics;
- each option must have a visible label and programmatic value;
- selected state must not rely on color alone;
- disabled/unavailable state must be announced;
- touch targets must remain usable on mobile;
- focus should stay predictable when switching stream;
- keyboard navigation must allow choosing stream and then level.

## Forbidden UX Patterns

Do not implement:

- auto-selection from browser locale, UI locale, `document.lang`, or product
  copy language;
- blocking first-run chooser for existing players;
- destructive warning copy that implies progress will be erased;
- stream selector inside the question/prompt card;
- hidden stream id text shown to learners;
- `all` stream selector in learner UI;
- language-selector wording such as "Choose interface language";
- a disabled option that looks like an active start button.

## Localization Impact

Localization must provide short labels for:

- selector label;
- RU-source option;
- English-native option;
- helper text that separates interface language from practice stream;
- progress safety line;
- unavailable and loading states;
- current-stream chip.

All locales must preserve the product distinction:

```text
ui_locale != learner_stream
```

`Sea Speak` should remain a product/target term unless Localization Architect
decides otherwise.

## Implementation Handoff

Director-Engineer should implement this only after Localization Architect
provides the copy contract.

Implementation should:

- keep default `ru_source`;
- hydrate selected stream before rendering level-start buttons;
- pass selected stream to stream-aware API calls only where the API contract
  allows it;
- keep submit/finish tied to the watch session stream;
- show stream context in watch side panel, summary, and Lost Oars;
- keep `english_native` public availability behind an explicit Director release
  gate;
- add mobile smoke checks for all supported UI locales.

## Result

PASS: UX/HUD approves a visible, compact, opt-in `Practice stream` selector on
the level-select screen. The selector must not block existing users, must not
infer stream from UI locale, and must keep progress for each stream separate.

Changed files in this role task:

- `content/captain-ether/roles/ux-hud-designer/reports/task-ce-0019-public-stream-selector-ux-contract-2026-05-28.md`
