## Batch 007 Traffic / Collision Basics Card

Date: 2026-06-01
Task: `TASK-CE-0044`
Owner: Content Producer
Scope: Captain Ether only
Status: PASS

### Result

Created draft batch:

```text
content/captain-ether/batches/batch-007-traffic-collision-basics.json
```

This is a draft only. It is not merged into `starter.json` and is not playable
until Sea Speak Linguist review, Director-Engineer integration, QA regression,
and an explicit merge gate.

### Counts

```text
items: 50
grammar_patterns: 4
dangerous_minimal_pairs: 10
```

By branch:

```text
traffic_collision: 50
```

By type:

```text
word: 10
short_expression: 17
phrase: 23
```

By level:

```text
beginner: 9
intermediate: 19
advanced: 22
```

By module:

```text
risk_of_collision: 4
overtaking_crossing: 12
passing_arrangements: 14
cpa_tcpa: 11
course_speed_action: 9
```

### Content Coverage

The draft covers:

- collision event versus risk of collision;
- crossing and overtaking situations;
- pass astern / pass ahead;
- port/starboard side passing intentions;
- give-way and stand-on vessel roles;
- CPA/TCPA reports;
- bearing constant/opening/closing;
- early collision-avoidance action.

### Risky Variants

The following accepted variants are intentionally item-local and need Sea Speak
Linguist confirmation before any playable merge:

- `change course` for `alter course`;
- `safe pass` for `safe passing`;
- `closest point of approach` for `CPA`;
- `time to closest point of approach` for `TCPA`;
- `give way vessel` for `give-way vessel`;
- `stand on vessel` for `stand-on vessel`;
- `pass ahead of your vessel`;
- `pass astern of your vessel`.

### Dangerous Minimal Pairs

The batch declares these high-risk contrasts:

```text
port / starboard
ahead / astern
stern / astern
alter course / change channel
reduce speed / stop engine
risk of collision / collision
CPA / TCPA / ETA
give-way vessel / stand-on vessel
crossing / overtaking / passing
bearing / heading / course
```

### Draft Matcher Check

Local draft matcher check:

```text
PASS batch007 matcher draft checks=306
```

The check verified:

- every target text is accepted;
- every draft `qa_notes.should_accept` example is accepted;
- every draft `qa_notes.should_reject` example is rejected.

### Open Questions For Sea Speak Linguist

1. Should `pass ahead` remain in the playable draft, or should it be narrowed
   before merge because it is operationally sensitive?
2. Should `bearing is opening` and `bearing is closing` be kept as trained Sea
   Speak, or rewritten into simpler risk-language prompts?
3. Are `give-way vessel` and `stand-on vessel` suitable for the Captain Ether
   yacht-radio training corpus at this stage?
4. Should CPA/TCPA abbreviation acceptance remain item-local only?
5. Should ordinary-language side references stay rejected everywhere in this
   batch, even where Russian source text says "right/left" for learner clarity?

### Localization Impact

Learner source language: `ru`.
Sea Speak target language: `en`.

No UI copy was introduced. Source prompts are Russian as in the existing public
stream. Sea Speak target phrases are not localized.

### Scope Preserved

No `starter.json`, matcher, accepted-answer dictionary, regression file,
API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, or player identity data were changed.

### Next Gate

Sea Speak Linguist risk review for Batch 007.
