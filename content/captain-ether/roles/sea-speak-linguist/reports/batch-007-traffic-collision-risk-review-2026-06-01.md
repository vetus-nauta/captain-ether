## Sea Speak Linguist Report: Batch 007 Traffic / Collision Risk Review

Date: 2026-06-01
Role: Sea Speak Linguist / Captain Ether
Task: `TASK-CE-0045`
Mode: linguistic review with content-side patch allowed for assigned batch only
Status: PASS

### Task Result

PASS for linguistic/content review.

Batch 007 is ready for Director-Engineer engineering gate. No matcher/API/UI
change is requested before the engineering gate. The batch remains draft-only
and is not merged into `starter.json`.

### Changed Files

- `content/captain-ether/batches/batch-007-traffic-collision-basics.json`
- `content/captain-ether/roles/sea-speak-linguist/reports/batch-007-traffic-collision-risk-review-2026-06-01.md`

No `starter.json`, matcher, API/runtime, UI, Atlas, auth, router, registry,
Watch Officer, Nav Desk, production config, deploy/FTP state, secrets, sessions,
cookies, CSRF, SMTP, player email, or player identity data were changed.

### Counts After Review

```text
items: 50
word: 10
short_expression: 17
phrase: 23
beginner: 9
intermediate: 19
advanced: 22
traffic_collision: 50
```

By module:

```text
risk_of_collision: 4
overtaking_crossing: 12
passing_arrangements: 14
cpa_tcpa: 11
course_speed_action: 9
```

### Content-Side Patch

The batch content items were not broadened.

Metadata was updated only to record the review gate:

- top-level `status` changed to `linguist_reviewed`;
- `producer_notes.next_gate` changed to Director-Engineer engineering gate;
- linguist decisions were added under `producer_notes.linguist_review`.

### Approved Accepted-Answer Decisions

Approved item-local variants:

- `change course` for `alter course`, only inside `alter course` items.
- `safe pass` for `safe passing`, only inside the short-expression item.
- `closest point of approach` for `CPA`.
- `time to closest point of approach` for `TCPA`.
- `give way vessel` for `give-way vessel`.
- `stand on vessel` for `stand-on vessel`.
- `pass astern of your vessel` for the astern phrase item.
- `pass ahead of your vessel` for the ahead phrase item.
- `bearing opening` / `bearing closing` as compact forms of the trained bearing
  state items.

These approvals are item-local. They must not become global matcher aliases.

### Must-Stay-Wrong Decisions

The following must remain wrong:

- `port` where the item trains `starboard`, and `starboard` where it trains
  `port`;
- ordinary `right` / `left` in side-passing and course-alteration items;
- `stern` for `astern`;
- `pass ahead` for `pass astern`, and `pass astern` for `pass ahead`;
- missing-object phrase answers such as `pass astern` for `I will pass astern of
  you`;
- `collision` where the item trains `risk of collision`;
- `risk of collision` where the item trains the collision event;
- `danger` for `risk of collision`;
- `CPA` for `TCPA`, and `TCPA` for `CPA`;
- `ETA` for `TCPA`;
- distance units where time is required, and time units where distance is
  required;
- `heading` or `course` for `bearing`;
- `stand by` for `stand-on vessel`;
- `give way` alone for `give-way vessel`;
- `change channel` for `alter course`;
- `stop engine` for `reduce speed`.

### Dangerous Minimal-Pair Decisions

| Pair | Decision |
| --- | --- |
| `port / starboard` | Keep strict. Ordinary right/left stays wrong. |
| `ahead / astern` | Keep strict. These are opposite passing relations. |
| `stern / astern` | Keep strict. Stern is a vessel part; astern is a direction/relation. |
| `alter course / change channel` | Keep strict. `change course` is item-local; `change channel` stays wrong. |
| `reduce speed / stop engine` | Keep separate. Speed reduction is not engine stop. |
| `risk of collision / collision` | Keep strict. Risk state is not collision event. |
| `CPA / TCPA / ETA` | Keep strict. CPA is distance/point; TCPA is time-to-CPA; ETA is arrival time. |
| `give-way vessel / stand-on vessel` | Keep strict and advanced. These are role terms. |
| `crossing / overtaking / passing` | Keep strict. Do not accept broad passing for crossing/overtaking items. |
| `bearing / heading / course` | Keep strict. Bearing-state items must not accept heading/course. |

### Mandatory Review Questions

1. Should `pass ahead` remain in the playable draft?

   Decision: yes, keep it as a high-risk traffic-intention item. It is useful
   only if strict opposite-answer rejects remain in regression.

2. Should `bearing is opening` and `bearing is closing` remain?

   Decision: yes, as advanced traffic-risk language. Keep strict rejects for
   constant bearing, heading, course, and opposite opening/closing states.

3. Are `give-way vessel` and `stand-on vessel` suitable now?

   Decision: yes, as advanced role-language items. Keep them away from beginner
   watches and keep `stand by` rejected.

4. Should CPA/TCPA abbreviation acceptance remain item-local only?

   Decision: yes. No global abbreviation matcher change is requested.

5. Should ordinary-language side references be accepted where Russian source
   text says "right/left" for learner clarity?

   Decision: no. Russian source may clarify learner meaning, but target answer
   must train `port` / `starboard`, not ordinary `left` / `right`.

6. Should `safe pass` be accepted?

   Decision: yes, item-locally for the short-expression `safe passing`. Do not
   accept broad `passing` or `safe speed`.

### Matcher / Runtime Findings For Director-Engineer

No matcher/API changes are requested.

The current matcher accepts the approved item-local variants and rejects the
declared must-stay-wrong examples in this draft check:

```text
PASS batch007 matcher draft checks=306
```

The next engineering gate should convert the accepted/rejected draft examples
into the project regression path before any merge into playable content.

### Localization Impact

Learner source language: `ru`.
Sea Speak target language: `en`.

No UI copy was introduced. Russian source prompts remain learner prompts only;
Sea Speak target meaning is not localized.

### Engineer Handoff

Proceed to Director-Engineer engineering gate for Batch 007.

Required next checks:

- verify batch JSON schema;
- verify no duplicate IDs against `starter.json`;
- prepare regression entries from `qa_notes`;
- keep `pass ahead/pass astern`, `port/starboard`, `CPA/TCPA/ETA`,
  `bearing/heading/course`, and `give-way/stand-on` as dangerous minimal-pair
  groups;
- do not merge into `starter.json` until QA acceptance passes.
