# Batch 014 Medical Repair Risk Review

Date: 2026-06-02
Task: `TASK-CE-0095`
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: ACCEPTED_WITH_PATCHES

## Target

```text
content/captain-ether/batches/batch-014-medical-repair-basics.json
```

## Reference Basis

The review checked the batch against maritime urgency and onboard-repair wording for:

```text
injury / illness / bleeding / fracture / hypothermia
first aid / medical advice / medical assistance / medical evacuation / rescue
person conscious / person unconscious / person overboard / person missing
temporary repair / engine restarted / steering restored
leak controlled / water ingress reduced / bilge pump running
no immediate danger / immediate danger / Mayday medical escalation
```

## Content Patches Applied

The draft was accepted with a narrow flooding-control patch:

- canonicalized generic `pump running` to `bilge pump running` for flooding-control context;
- kept short `pump running` as item-local accepted wording only where the Russian source says the pump is working in leak-control context;
- kept `fire pump running` as an explicit wrong answer to preserve fire-pump/bilge-pump separation;
- updated grammar-pattern examples and dangerous-pair wording to reflect `bilge pump` as canonical.

Affected item ids:

```text
expr_repair_pump_running_001
phrase_repair_leak_controlled_pump_running_001
repair_leak_controlled_pump_running
```

## Approved Decisions

- Keep `injury`, `illness`, vessel `damage`, and generic `emergency` separate.
- Keep `medical advice`, `medical assistance`, `medical evacuation`, and `rescue` separate.
- Keep `person conscious`, `person unconscious`, `person overboard`, and `person missing` separate.
- Keep `hypothermia`, `hyperthermia`, `seasickness`, and `shock` separate.
- Keep `engine restarted`, `engine failed`, `steering restored`, and `steering failed` separate.
- Keep `water ingress reduced` separate from `water ingress increasing`, `water tank reduced`, and `flooding uncontrolled`.
- Keep evacuation negation strict in `Medical evacuation not required, advice needed.`
- Keep `Medical situation, no immediate danger.` separate from Mayday or rescue escalation.

## Must-Stay-Wrong Answers

These boundaries must remain wrong in QA/matcher gates:

```text
injury -> illness
illness -> injury
injury -> damage
bleeding -> breathing
hypothermia -> hyperthermia
person unconscious -> person conscious
person conscious -> person unconscious
person unconscious -> person overboard
medical advice required -> medical assistance required
medical evacuation not required -> medical evacuation required
engine restarted -> engine failed
engine restarted -> steering restored
steering restored -> steering failed
leak controlled -> leak increasing
bilge pump running -> pump failed
bilge pump running -> fire pump running
water ingress reduced -> water tank reduced
no immediate danger -> immediate danger
no immediate danger -> Mayday medical situation
assistance not required -> rescue required
```

## Matcher Risks

No matcher/API change is requested by this review.

Future risk areas:

- synonym expansion that collapses advice, assistance, evacuation, and rescue;
- fuzzy matching that ignores negation around `not required`;
- accepting opposite medical states because phrase structure is otherwise similar;
- accepting `fire pump` as a flooding-control `bilge pump` answer;
- collapsing `water ingress` with potable/tank-water wording.

## Check Run

```text
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-014-medical-repair-basics.json
```

Result after patches:

```text
PASS
Batch status: linguist_reviewed
Batch items: 25
Batch grammar_patterns: 11
Batch dangerous_pairs: 6
Batch target_text: 25
Batch should_accept: 44
Batch should_reject: 76
Batch danger_must_accept: 22
Batch danger_must_reject: 43
Known starter warnings: WARN (9)
```

## Engineer Handoff

Batch 014 is approved for Director-Engineer engineering gate after the applied
patches.

Do not merge into `starter.json` before engineering gate and QA acceptance.
No production deploy is approved by this review.

## Scope Preserved

No playable `starter.json`, accept/reject regression outside the batch,
matcher, API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav
Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
