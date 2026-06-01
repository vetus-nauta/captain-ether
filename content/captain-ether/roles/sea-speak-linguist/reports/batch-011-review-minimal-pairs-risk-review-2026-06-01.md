# Batch 011 Review Minimal Pairs Risk Review

Date: 2026-06-01
Task: `TASK-CE-0069`
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: PASS

## Target

```text
content/captain-ether/batches/batch-011-review-minimal-pairs-basics.json
```

## Approved Accepted Answers

- `over`, `roger`, `affirmative`, `say again`, and `read back` are approved
  only for their assigned procedure items.
- `port`, `starboard`, `ahead`, and `astern` stay exact for review drills.
- `channel one six`, `zero nine zero`, and `one four zero zero` remain strict
  spoken-digit review forms.
- `Pan-Pan, not Mayday.` and `Pan Pan not Mayday` are acceptable item-local
  variants for the signal contrast item.
- `Alter course to port.` and `Alter course port` are acceptable item-local
  variants.
- `Give way.` and `Give way vessel.` are acceptable item-local variants.

## Must-Stay-Wrong Answers

- `over` and `out` must not collapse.
- `roger` must not mean `affirmative`.
- `say again` must not mean `read back`.
- `left/right` remain wrong for the standalone `port/starboard` drill.
- `channel sixteen` remains wrong for `channel one six`.
- `nine zero` remains wrong for `zero nine zero`.
- `fourteen hundred` remains wrong for `one four zero zero`.
- `Mayday` and `Securite` remain wrong for the Pan-Pan contrast item.
- `alter course to starboard` remains wrong for the port alteration item.
- `stand on` remains wrong for the give-way item.

## Dangerous Minimal Pairs

Approved as executable regression candidates:

- `over / out`
- `roger / affirmative`
- `say again / read back`
- `port / starboard`
- `ahead / astern`
- `channel one six / channel one three`
- `zero nine zero / nine zero`
- `one four zero zero / one five zero zero`
- `Pan-Pan / Mayday / Securite`
- `alter course to port / alter course to starboard`
- `give way / stand on`

## Matcher Risks

No matcher/API change is requested by this review.

Future matcher risk areas:

- broad procedure-word synonym expansion;
- typo tolerance on short tokens such as `out`, `port`, and `astern`;
- numeric normalization that accepts compressed or alternate time forms;
- signal-family normalization that accepts Pan-Pan, Securite, and Mayday
  interchangeably.

## Check Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-011-review-minimal-pairs-basics.json
```

Result:

```text
PASS
Batch status: linguist_reviewed
Batch items: 15
Batch target_text: 15
Batch should_accept: 30
Batch should_reject: 45
Batch danger_must_accept: 15
Batch danger_must_reject: 45
Known starter warnings: WARN (9)
```

## Engineer Handoff

Batch 011 is approved for Director-Engineer engineering gate.

Do not merge into `starter.json` before engineering gate and QA acceptance.
No production deploy is approved by this review.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.
