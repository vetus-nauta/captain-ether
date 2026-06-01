## CE-SPRINT-0044 Batch 007 Traffic / Collision Draft

Date: 2026-06-01
Owner: Director-Engineer
Content role: Content Producer
Scope: Captain Ether only
Status: PASS FOR DRAFT GATE

### Sprint Purpose

Start M3 corpus growth by drafting the first empty branch:

```text
traffic_collision
```

### Result

Content Producer task closed:

```text
content/captain-ether/roles/content-producer/tasks/task-ce-0044-batch-007-traffic-collision-draft-2026-06-01.md
```

Draft batch created:

```text
content/captain-ether/batches/batch-007-traffic-collision-basics.json
```

Producer report:

```text
content/captain-ether/roles/content-producer/reports/batch-007-traffic-collision-basics-card-2026-06-01.md
```

### Batch Counts

```text
items: 50
word: 10
short_expression: 17
phrase: 23
beginner: 9
intermediate: 19
advanced: 22
branch traffic_collision: 50
```

By module:

```text
risk_of_collision: 4
overtaking_crossing: 12
passing_arrangements: 14
cpa_tcpa: 11
course_speed_action: 9
```

### Checks

```text
batch 007 JSON parse: PASS
batch 007 required field check: PASS
batch 007 duplicate id check: PASS
starter id overlap check: PASS, 0 overlaps
draft matcher check: PASS batch007 matcher draft checks=306
```

### Important Correction During Sprint

Initial draft validation found the batch had `64` items, not the assigned `50`.
The draft was narrowed before reporting. This is why the final file is exactly
`50` items and the lower-priority extra phrases were not kept.

The draft matcher check also found two `should_accept` examples missing from
`accepted_answers`. Those were corrected before closure.

### Risk Notes

This batch is deliberately high-risk. Sea Speak Linguist must review before any
engineering merge:

- `pass ahead` wording;
- port/starboard side passing;
- `give-way vessel` / `stand-on vessel`;
- CPA/TCPA abbreviations and long forms;
- bearing opening/closing phrasing;
- `alter course` versus `change channel`;
- `risk of collision` versus actual collision event.

### Localization Impact

Learner source language is `ru`; Sea Speak target language is `en`. No UI copy
was added and no Sea Speak target phrase was localized.

### Scope Preserved

No `starter.json`, matcher, accepted-answer dictionary, regression file,
API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, or player identity data were changed.

### Next Gate

Open Sea Speak Linguist review for Batch 007.
