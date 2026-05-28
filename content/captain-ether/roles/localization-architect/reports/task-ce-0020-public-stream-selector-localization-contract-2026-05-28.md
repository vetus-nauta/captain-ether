# Localization Report: TASK-CE-0020 Public Stream Selector Localization Contract

Date: 2026-05-28
Role: Localization Architect / Captain Ether
Mode: report-only localization contract

## Status

PASS

The public `Practice stream` selector localization contract is ready for
Director-Engineer synthesis.

No runtime/API/UI files, i18n JS, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, player data, sessions, cookies, CSRF, email, or secrets were
changed.

## Contract Rule

UI language and learner stream remain independent.

```text
ui_locale: en | ru | de | it | es | sr | zh
learner_stream: ru_source | english_native
```

Browser/system locale may choose interface copy. It must never silently choose
`english_native` training content.

Unsupported system languages still fall back to English UI only. They do not
fall into English-native practice.

## Required I18n Keys

Minimum key set for implementation:

| Key | Purpose |
| --- | --- |
| `stream.label` | Selector heading. |
| `stream.ruSource.title` | RU-source option title. |
| `stream.ruSource.copy` | RU-source option short helper. |
| `stream.englishNative.title` | English-native option title. |
| `stream.englishNative.copy` | English-native option short helper. |
| `stream.englishNative.badge` | Pilot/release badge if needed. |
| `stream.helper` | UI language does not change practice stream. |
| `stream.keepsProgress` | Progress remains attached to each stream. |
| `stream.current` | Current-stream chip label. |
| `stream.loading` | Loading stream availability. |
| `stream.unavailable` | Stream unavailable for this user/release. |
| `stream.error` | Generic stream preference error. |

Implementation may split keys further if the UI needs shorter chip labels, but
it must not hardcode stream labels outside the i18n layer.

## Canonical English Fallback Copy

English fallback strings:

| Key | Copy |
| --- | --- |
| `stream.label` | `Practice stream` |
| `stream.ruSource.title` | `Russian prompts` |
| `stream.ruSource.copy` | `Practice Sea Speak from Russian source text.` |
| `stream.englishNative.title` | `English prompts` |
| `stream.englishNative.copy` | `Practice Sea Speak from English source text.` |
| `stream.englishNative.badge` | `Pilot` |
| `stream.helper` | `Interface language does not change the practice stream.` |
| `stream.keepsProgress` | `Progress stays with each stream.` |
| `stream.current` | `Current stream` |
| `stream.loading` | `Loading practice streams...` |
| `stream.unavailable` | `This stream is not available yet.` |
| `stream.error` | `Practice stream could not be updated.` |

## Per-Locale Copy Contract

Candidate copy for implementation review:

| Locale | Label | RU-source title | English-native title | Helper |
| --- | --- | --- | --- | --- |
| `en` | Practice stream | Russian prompts | English prompts | Interface language does not change the practice stream. |
| `ru` | Учебный поток | Русские подсказки | Английские подсказки | Язык интерфейса не меняет учебный поток. |
| `de` | Übungsstrom | Russische Vorgaben | Englische Vorgaben | Die Sprache der Oberfläche ändert den Übungsstrom nicht. |
| `it` | Flusso di pratica | Tracce in russo | Tracce in inglese | La lingua dell'interfaccia non cambia il flusso di pratica. |
| `es` | Flujo de práctica | Indicaciones en ruso | Indicaciones en inglés | El idioma de la interfaz no cambia el flujo de práctica. |
| `sr` | Tok vežbe | Ruski podsticaji | Engleski podsticaji | Jezik interfejsa ne menja tok vežbe. |
| `zh` | 练习流 | 俄语提示 | 英语提示 | 界面语言不会改变练习流。 |

Copy constraints:

- Keep `Sea Speak` unchanged in helper/detail strings.
- Do not translate `learner_stream`, `ru_source`, `english_native`, or `all`
  into learner-visible copy.
- Do not call the selector a language selector.
- Avoid wording that implies German, Italian, Spanish, Serbian/Montenegrin/
  Croatian, or Mandarin source-prompt content exists.
- Keep helper text to one short sentence.
- Use Latin Serbian/Montenegrin/Croatian shared UI style for `sr`.
- Use compact Mandarin copy under `zh`; Traditional Chinese policy remains a
  separate Director decision if needed.

## Locale And Alias Behavior

Existing UI locale aliases remain valid:

- `en`, `en-*` -> `en`;
- `ru`, `ru-*` -> `ru`;
- `de`, `de-*` -> `de`;
- `it`, `it-*` -> `it`;
- `es`, `es-*` -> `es`;
- `sr`, `sr-*`, `hr`, `hr-*`, `bs`, `bs-*`, `me`, `me-*` -> `sr`;
- `zh`, `zh-*` -> `zh`;
- unsupported or blocked locale -> `en`.

None of these aliases changes `learner_stream`.

## Mobile Length Risk

High-risk locales for width:

- `de`: long compounds and helper copy;
- `ru`: longer option titles on narrow mobile;
- `es`: helper sentence length;
- `sr`: Latin shared copy can expand;
- `zh`: compact but must remain semantically distinct.

QA must check the selector at narrow mobile widths and confirm:

- no horizontal overflow;
- option titles wrap cleanly;
- helper remains readable;
- level-start buttons remain reachable;
- watch chip does not crowd the side panel.

## QA Locale Matrix

Required future smoke cases:

| Locale input | Expected UI | Expected stream behavior |
| --- | --- | --- |
| `en-US` | English | Default remains `ru_source` unless user explicitly selects another released stream. |
| `ru-RU` | Russian | Current RU-source flow remains unchanged. |
| `de-DE` | German | No German-source stream implied. |
| `it-IT` | Italian | No Italian-source stream implied. |
| `es-ES` | Spanish | `es`, not `esp`, is the runtime locale key. |
| `hr-HR` | Shared Latin `sr` | No Balkan-source stream implied. |
| `sr-Latn-RS` | Shared Latin `sr` | No locale-to-stream inference. |
| `me-ME` | Shared Latin `sr` | No locale-to-stream inference. |
| `zh-CN` | Mandarin `zh` | No Mandarin-source stream implied. |
| `zh-TW` | `zh` under current alias policy | No Traditional-specific source stream implied. |
| `fr-FR` | English fallback | No English-native auto-enrollment. |
| blocked/empty language API | English fallback | Product default remains independent of locale. |

## Implementation Handoff

Director-Engineer should:

- add all selector keys to `I18N.en` first;
- add all selector keys to `ru`, `de`, `it`, `es`, `sr`, and `zh`;
- keep English as missing-key fallback;
- keep stream ids internal;
- use `stream.current` for watch/summary/Lost Oars context;
- run `node content/captain-ether/tools/check-pwa-i18n.mjs` after adding keys;
- include locale override or deterministic browser-language setup in future QA.

## Result

PASS: Localization approves the public selector copy contract as long as UI
locale and learner stream remain independent and unsupported locale fallback to
English does not select English-native practice.

Changed files in this role task:

- `content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md`
