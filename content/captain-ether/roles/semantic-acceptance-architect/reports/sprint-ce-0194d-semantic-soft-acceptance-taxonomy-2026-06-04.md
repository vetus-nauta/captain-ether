# Sprint CE-0194d Semantic Soft Acceptance Taxonomy

Date: 2026-06-04
Role: Semantic Acceptance Architect
Status: REPORT_READY_FOR_DIRECTOR_REVIEW
Mode: report-only
Allowed file changed: `content/captain-ether/roles/semantic-acceptance-architect/reports/sprint-ce-0194d-semantic-soft-acceptance-taxonomy-2026-06-04.md`
Forbidden scope respected: no matcher edits, no regression edits, no content JSON edits, no API/UI edits, no auth/config/secrets, no production changes, no other games.

## Current binary matcher problem

Captain Ether currently has a pragmatic but mostly binary answer outcome model:

- `exact`: accepted at full credit when normalized text matches an accepted answer.
- `variant`: accepted at full credit when token alias/optional-word normalization matches an accepted answer.
- `spelling`: accepted at full credit when a conservative same-token-count Levenshtein typo check passes.
- `wrong`: rejected with weak feedback.
- `skip`: rejected.

The gap is that meaning-preserving but non-standard answers can fall to `wrong` because they are neither in `accepted_answers`, nor token-equivalent, nor a same-token-count typo. CEO examples:

- Standard: `bring first aid kit`; user: `bring first aid`.
- Standard clearance phrases using `QUESTION`, `REQUEST`, `ANSWER`, permission, or clearance grammar; user supplies a non-standard but understandable paraphrase.

This creates three problems:

- Learning fairness: the player may have shown operational understanding but receives a full wrong outcome.
- Feedback poverty: the player does not see a clear user-answer vs standard-form comparison.
- Safety ambiguity: if the matcher is widened naively, Captain Ether could accept dangerous maritime meaning drift, especially in message markers, numbers, channels, permissions, bearings, side/direction, distress/urgency/safety signals, and procedure words.

Project-specific inference from current code: the matcher is deterministic and deliberately conservative, so `understood_non_standard` should be designed as a separate reviewed class, not as broader typo fuzzing or open-ended synonym expansion.

## Current technology / maritime / assessment basis with citations

Current basis checked on 2026-06-04.

### Maritime phraseology basis

- IMO states that the Standard Marine Communication Phrases (SMCP) were adopted by Resolution A.918(22) and recommended for wide circulation to users and maritime education authorities. IMO describes SMCP as simplified maritime English for routine and emergency safety-related communications, intended to reduce language-barrier misunderstandings. Source: [IMO Standard Marine Communication Phrases](https://www.imo.org/en/ourwork/safety/pages/standardmarinecommunicationphrases.aspx).
- IMO Resolution A.918(22) states that ability to use and understand SMCP is required for certification of officers in charge of a navigational watch on qualifying ships under STCW. It also states that SMCP is not a comprehensive maritime English syllabus, which implies a training product may teach broader English competence while still preserving SMCP as the standard target. Source: [IMO Resolution A.918(22) PDF](https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/AssemblyDocuments/A.918%2822%29.pdf).
- IMO SMCP defines message markers including `INSTRUCTION`, `ADVICE`, `WARNING`, `INFORMATION`, `QUESTION`, `ANSWER`, `REQUEST`, and `INTENTION`. It explicitly uses markers to improve whether the message purpose is understood. Source: [IMO Resolution A.918(22), message markers](https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/AssemblyDocuments/A.918%2822%29.pdf).
- IMO SMCP flags ambiguous English words such as `may`, `might`, `should`, `could`, and `can`, and gives standard replacements such as `QUESTION. Do I have permission...` / `ANSWER. You have permission...`. Source: [IMO Resolution A.918(22), ambiguous words](https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/AssemblyDocuments/A.918%2822%29.pdf).

Project-specific inference for Captain Ether: non-standard answers may show understanding, but standard phraseology remains the instructional target. Soft acceptance must never teach that casual English is operationally equivalent to SMCP in safety-critical radio contexts.

### Language assessment basis

- CEFR Companion Volume broadens language assessment beyond isolated grammar toward communicative activities and descriptors. Source: [Council of Europe CEFR page](https://www.coe.int/en/web/common-european-framework-reference-languages/home?MvBriefArticleId=17487).
- Cambridge English writing assessment separates criteria such as content, communicative achievement, organisation, and language, with banded scores rather than a single binary result. Source: [Cambridge English assessing writing performance guide](https://www.cambridgeenglish.org/images/231794-cambridge-english-assessing-writing-performance-at-level-b1.pdf).
- ETS TOEFL iBT says writing scoring focuses on clear/effective communication rather than a perfect first draft, while also measuring grammar, vocabulary, and purpose. Source: [ETS TOEFL iBT Writing Section](https://www.ets.org/toefl/test-takers/ibt/about/content/writing.html).

Project-specific inference for Captain Ether: a response can demonstrate communicative meaning while still needing correction to the standard form. A lower-credit accepted category is consistent with modern language-assessment practice.

### Feedback, accessibility, and plain-language basis

- WCAG 2.2 is the current W3C accessibility line for this task. The CEO-provided seed source is the W3C WCAG 2.2 editor draft, which identifies itself as the latest editor draft and links to the latest published version; the stable published recommendation should remain the implementation reference when code is planned. WCAG 2.2 includes input assistance guidance: when an input error is detected and correction suggestions are known, suggestions should be provided unless doing so would compromise the purpose. Sources: [W3C WCAG 2.2 editor draft seed](https://w3c.github.io/wcag/guidelines/22/) and [W3C WCAG 2.2 published recommendation](https://www.w3.org/TR/WCAG22/).
- W3C's 2026-updated Understanding WCAG 2.2 index groups relevant guidance under readable content, input assistance, error identification, error suggestion, and status messages. Source: [W3C Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/).
- Digital.gov / PlainLanguage.gov guidance states that public-facing content should be clear, easy to understand, and written for the specific audience. Source: [Digital.gov Plain Language Guide Series](https://digital.gov/guides/plain-language).

Project-specific inference for Captain Ether: feedback should plainly show what the learner wrote, the standard form, and the exact learning reason, without raw technical diffs or shame language.

### Semantic matching / AI technology basis

- NIST AI RMF and the Generative AI Profile emphasize trustworthiness, measurement, evaluation, and risk management across the AI lifecycle. Source: [NIST AI RMF Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence).
- NIST AI work highlights testing, evaluation, verification, and validation (TEVV) for AI systems. Source: [NIST Artificial Intelligence](https://www.nist.gov/artificial-intelligence).

Project-specific inference for Captain Ether: modern semantic systems can use embeddings, LLM judges, or hybrid matchers, but maritime safety demands deterministic guardrails, human-reviewed examples, logs, and regression before any model-assisted acceptance. This report recommends taxonomy and review workflow, not an AI matcher implementation.

## Proposed result taxonomy

Recommended result classes, from safest/fullest acceptance to hard rejection:

| Result class | Correct? | Suggested credit | Meaning | Example | Review requirement |
| --- | --- | ---: | --- | --- | --- |
| `clean_standard` | true | 100% | Exact normalized standard form. | `bring first aid kit` for target `bring first aid kit` | None beyond existing content QA. |
| `accepted_standard_variant` | true | 100% | Sea Speak-approved equivalent or item-local accepted answer. | Approved alternate phrase already in `accepted_answers`. | Sea Speak Linguist approval before dictionary growth. |
| `minor_spelling` | true | 100% | Typo does not change maritime token, number, side, procedure, or signal. | `firsd aid kit` if safely close and not protected. | Regression coverage for recurring spelling. |
| `understood_non_standard` | true | 80% | Operational meaning is understood, but phrase is not standard enough for full credit. | `bring first aid` for `bring first aid kit`, when item context makes `kit` recoverable. | Must be logged and reviewable; initial whitelist or item-local rules only. |
| `needs_linguist_review` | false for live scoring until approved | 0% live / review candidate | Potential missing variant or soft accept candidate, but not safe to accept automatically. | A new clearance paraphrase not in reviewed examples. | Answer-log route to Answer Log Analyst and Sea Speak Linguist. |
| `wrong_meaning` | false | 0% | Meaning, role, action, object, permission, or standard procedure is wrong. | `bring medicine` for first aid kit if the trained object is equipment. | Optional reject regression if repeated. |
| `dangerous_drift` | false | 0% | Answer crosses a safety-critical distinction or could teach unsafe radio meaning. | `repeat` for `say again`; `starboard` for `port`; wrong channel/time. | Mandatory hard-reject regression before matcher changes. |

Project-specific implementation inference for Director-Engineer only: this taxonomy should not collapse `understood_non_standard` into existing `variant`, because `variant` currently means accepted full-credit equivalence. Soft acceptance needs its own `match_type`, score, feedback copy, and log kind.

## `understood_non_standard` definition and 80% scoring

Definition:

`understood_non_standard` is an accepted-but-corrected answer where the player's intent and operational meaning match the target item, but the wording omits or substitutes non-critical standard phraseology, grammar, or a recoverable term. It is not a synonym pass. It is a pedagogical partial-credit class.

Required conditions:

- The core action is unchanged.
- The core object, status, position, permission, or response meaning is unchanged or recoverable from item context without operational ambiguity.
- No protected maritime distinction is crossed.
- No number, channel, time, bearing, heading, distance, speed, side, direction, distress/urgency/safety signal, message marker, or procedure-word boundary changes.
- The standard answer can be displayed immediately as the taught form.
- The example is either pre-approved item-locally or routed through review before becoming generally accepted.

80% scoring rule:

- Award approximately 80% item credit.
- Count as not creating a Lost Oar if the product currently treats accepted answers as avoiding recovery loops.
- Do not count as full mastery for progression if a later progression algorithm distinguishes fluency from understanding.
- Store `match_type=understood_non_standard` and `score_factor=0.8` or equivalent if Director-Engineer later implements scoring metadata.
- Feedback must say the meaning was understood but the standard phrase is different.

Example decisions:

- `bring first aid` vs `bring first aid kit`: candidate `understood_non_standard` for a beginner onboard command if the item target is equipment retrieval and no nearby item distinguishes first aid knowledge, first aid treatment, first aid person, or first aid kit.
- `need clearance to leave` vs a target like `REQUEST. Permission to depart`: candidate `understood_non_standard` only for lower-level learning if the task is meaning recognition, not a message-marker drill.
- `can I enter` vs `QUESTION. Do I have permission to enter`: candidate soft accept only outside strict SMCP ambiguity drills. In a drill explicitly teaching `QUESTION` or permission form, it should be wrong or at most review-only, because IMO SMCP marks `can/may` permission wording as ambiguous.
- `clear to enter` vs `you have permission to enter`: not automatically soft-accepted. Speaker role and direction matter; if the learner must answer as port/VTS vs vessel, this may be wrong or dangerous.

## User answer vs standard comparison feedback

Recommended feedback shape for soft acceptance:

```text
Understood, but use the standard form.
You wrote: "bring first aid"
Standard: "bring first aid kit"
Note: In radio/onboard commands, name the equipment clearly: "first aid kit".
Score: 80%
```

Rules for comparison feedback:

- Always show `You wrote` and `Standard` for `understood_non_standard`, `minor_spelling`, and `accepted_standard_variant` when the submitted text differs from the standard form.
- Keep the note semantic, not technical. Avoid raw edit-distance language, JSON field names, or token-normalization terms.
- Keep tone calm: `Understood`, `Use the standard form`, `Check the standard phrase`.
- For `dangerous_drift`, do not say `almost`. Say the distinction directly: `Not accepted: port and starboard are opposite sides.`
- For strict SMCP marker drills, say why strictness matters: `This drill is training the message marker QUESTION.`
- English fallback is required if UI copy is later implemented; translations must preserve Sea Speak target phrases in English.

Localization risk:

- Learner source language should be explicit per content task. This report assumes learner UI may be localized, but Sea Speak/SMCP target phrases remain English.
- Feedback labels can be localized, but the standard phrase, user answer, and dangerous-pair explanation must not translate or paraphrase the trained Sea Speak target.

## Dangerous drift hard-reject boundaries

`understood_non_standard` must never accept these changes without a separate Director-Engineer decision, Sea Speak Linguist approval, and regression:

- Opposites: `port/starboard`, `ahead/astern`, `arrival/departure`, `affirmative/negative`, `enter/leave`, `open/closed`, `safe/unsafe`.
- Procedure words: `over/out`, `say again/repeat`, `roger/affirmative/correct`, `stand by/wait out/do not answer/go ahead`.
- Message markers: omitting, adding, or substituting `QUESTION`, `ANSWER`, `REQUEST`, `INSTRUCTION`, `ADVICE`, `WARNING`, `INFORMATION`, `INTENTION` when the item explicitly teaches markers or marker meaning.
- Permission and authority: `can`, `may`, `clear`, `permission`, `instruction`, `advice`, and `request` cannot be treated as freely interchangeable.
- Speaker/role reversal: vessel answer vs VTS/port authority answer; called-station-first order where trained; user speaking as the wrong station.
- Navigation and identifiers: channels, MMSI/call signs, berth IDs, headings, bearings, courses, positions, distances, speeds, draughts, ETAs, UTC/local time, charted place names.
- Emergency signals: `MAYDAY`, `PAN PAN`, `SECURITE/SECURITE`, distress/urgency/safety categories, person-overboard, fire, flooding, collision, grounding, abandon-vessel.
- Equipment/material substitutions where safety changes: `line/rope`, `fender/bumper`, `berth/dock/quay/pier/slip` when item-specific, `fuel/water/shore power`, `first aid kit/medicine/doctor/medical aid` unless item explicitly trains that meaning.
- Negation/modality: missing `not`, `no`, `unable`, `cannot`, `must`, `will`, `will not`, `do not`, `permission denied`.
- Quantities and units: any digit, number word, UTC marker, degrees, nautical miles, cables, knots, metres, tugs count, persons count.

Hard-reject feedback examples:

- `Not accepted: "repeat" has a different radio meaning here. Use "say again".`
- `Not accepted: channel numbers must be exact.`
- `Not accepted: this drill requires the message marker "QUESTION".`
- `Not accepted: port and starboard are opposite sides.`

## Answer-log and Sea Speak Linguist review route

Recommended route for real player answers:

1. Runtime logs `understood_non_standard` as a disputed-useful answer, not as clean canonical activity.
2. `captain_answer_logs` adds or reuses a log kind such as `understood_non_standard` / `soft_accept` when Director-Engineer implements it.
3. Admin answer-log `review_groups` should expose grouped soft accepts with counts, top observed answers, target text, item ID, level, topic, prompt, and risk flags, without player identity.
4. Answer Log Analyst clusters repeated non-standard answers by item and proposes candidate categories: `promote_to_accepted_variant`, `keep_soft_accept`, `reject_as_wrong`, `reject_as_dangerous_drift`, or `prompt_confusing`.
5. Sea Speak Linguist decides maritime meaning and dangerous pairs.
6. Director-Engineer decides runtime implementation, score behavior, UI/API fields, and regression patch.
7. QA verifies accepted/rejected outcomes, feedback copy, log contents, privacy, and localization fallback.

Review flags to add when implemented:

- `soft_accept_review`: repeated `understood_non_standard` answer needs linguist confirmation.
- `dangerous_near_miss`: wrong answer is close to a protected maritime distinction.
- `prompt_role_confusion`: answers suggest learner is unsure whether speaking as vessel, VTS, marina, crew, or passenger.
- `standard_form_friction`: many learners preserve meaning but omit the same standard token.

Decision principle:

- Promote to `accepted_standard_variant` only when the non-standard form is genuinely standard-safe and should receive full credit.
- Keep as `understood_non_standard` when meaning is clear for learning but the standard form remains materially better.
- Add to hard rejects when the observed answer is close enough to be tempting but unsafe.

## Regression acceptance criteria before code

Before any matcher/API/UI implementation, Director-Engineer should require a regression card with at least these cases:

### Soft-accept positives

- `bring first aid` vs `bring first aid kit` returns `understood_non_standard`, accepted, 80% credit, standard-form feedback.
- A vetted non-standard clearance request in a non-marker beginner meaning item returns `understood_non_standard` only if speaker role and permission direction are unchanged.
- Minor missing article/politeness remains handled as existing variant/normalization, not incorrectly downgraded.
- Existing `exact`, `variant`, and `spelling` behavior remains unchanged unless explicitly redesigned.

### Strict drill negatives

- Marker drill target `QUESTION. Do I have permission to enter the fairway?` must reject `may I enter the fairway?` or classify review-only, not soft-accept, when the item purpose is marker/ambiguity training.
- Target `ANSWER. You have permission to enter` must reject user forms that reverse speaker role or ask a question.
- `REQUEST` must not substitute for `QUESTION` or `INSTRUCTION` in marker drills.

### Dangerous-pair negatives

- `repeat` remains rejected for `say again`.
- `over and out` remains rejected for either `over` or `out` drills.
- Wrong channel, time, berth ID, heading, or ETA remains rejected.
- `port`/`starboard`, `ahead`/`astern`, `affirmative`/`negative`, and `roger`/`affirmative` remain protected.
- Emergency signal substitutions remain rejected.

### Feedback and logging criteria

- Soft accept response exposes standard text and user text, or enough API data for UI to show both.
- Soft accept feedback does not expose matcher internals.
- Soft accept is logged for review; clean exact answer is not newly over-logged.
- Admin answer-log grouping omits player identity and keeps existing privacy policy.
- UI localization has English fallback and does not translate Sea Speak target phrases.

Acceptance gate:

- No code should ship until Sea Speak Linguist approves the first soft-accept examples and dangerous boundaries, Director-Engineer designs the runtime fields, and QA has a regression file covering both accepted soft examples and hard rejects.

## Handoff to Director-Engineer

Task result: PASS / REPORT_READY_FOR_DIRECTOR_REVIEW.

Recommended Director-Engineer decision:

- Accept `understood_non_standard` as a separate soft-accept class with accepted=true and approximately 80% credit.
- Do not implement broad fuzzy semantic matching first. Start with item-local reviewed examples and logged review workflow.
- Preserve current conservative typo protections and dangerous minimal-pair regression.
- Route clearance/permission examples to Sea Speak Linguist before implementation because IMO SMCP treats marker and permission wording as safety-relevant.
- If runtime implementation proceeds, define explicit API/result fields before UI work: `correct`, `match_type`, `score_factor`, `feedback_title`, `feedback_note`, `user_answer`, `standard_answer`, and `review_flag` or equivalent.

Checks performed:

- Read assigned Captain Ether protocol, role README, office manifest, Semantic Acceptance Architect rules and handoff.
- Read CEO session findings report.
- Read answer policy and answer-log policy.
- Inspected `_answer-matching.php` for analysis only; no edit made.
- Inspected `accept-reject-qa-pairs.json` for examples only; no edit made.
- Browsed current authoritative sources listed above and cited them.

Open questions:

- Should `understood_non_standard` avoid Lost Oar creation but still count as less than mastery for progression? This report recommends yes, but progression scoring belongs to Director-Engineer / Progression Algorithm Architect.
- Should first implementation be dictionary-driven per item, rule-driven by taxonomy, or hybrid? This report recommends item-local dictionary first, then logs and linguist review before broader rules.
- Should clearance phrasing soft acceptance be disabled for all marker drills by default? This report recommends yes.
