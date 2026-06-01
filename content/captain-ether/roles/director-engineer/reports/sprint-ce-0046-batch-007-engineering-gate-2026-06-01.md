## CE-SPRINT-0046 Batch 007 Engineering Gate

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: PASS FOR QA ACCEPTANCE

### Sprint Purpose

Run the engineering gate for Batch 007 Traffic / Collision after:

- Content Producer draft;
- Sea Speak Linguist risk review.

This gate decides whether the batch is ready for QA acceptance. It does not
approve merge into `starter.json`, production deploy, runtime/API/UI changes,
matcher changes, router/registry changes, auth/platform changes, Watch Officer,
Nav Desk, production config, deploy/FTP, or secrets work.

### Inputs Reviewed

```text
content/captain-ether/batches/batch-007-traffic-collision-basics.json
content/captain-ether/roles/content-producer/reports/batch-007-traffic-collision-basics-card-2026-06-01.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-007-traffic-collision-risk-review-2026-06-01.md
content/captain-ether/answer-policy.md
content/captain-ether/branch-taxonomy.md
```

### Gate Findings

Batch 007 is a reviewed draft:

```text
status: linguist_reviewed
items: 50
branch: traffic_collision
```

Counts:

```text
word: 10
short_expression: 17
phrase: 23
beginner: 9
intermediate: 19
advanced: 22
```

Modules:

```text
risk_of_collision: 4
overtaking_crossing: 12
passing_arrangements: 14
cpa_tcpa: 11
course_speed_action: 9
```

Schema and integration-risk checks:

```text
required fields present: PASS
qa_notes.should_accept present: PASS
qa_notes.should_reject present: PASS
all items branch traffic_collision: PASS
duplicate IDs inside batch: PASS, none
ID overlap with starter.json: PASS, none
```

### Linguist Decisions Accepted

Accepted as item-local only:

- `change course` for `alter course`;
- `safe pass` for `safe passing`;
- `CPA` / `closest point of approach`;
- `TCPA` / `time to closest point of approach`;
- `give-way vessel` / `give way vessel`;
- `stand-on vessel` / `stand on vessel`;
- `pass astern of your vessel`;
- `pass ahead of your vessel`;
- bearing `opening`, `closing`, and `constant` forms.

Strict boundaries preserved:

- `port / starboard`;
- ordinary `right / left` versus Sea Speak side terms;
- `ahead / astern`;
- `stern / astern`;
- `risk of collision / collision`;
- `CPA / TCPA / ETA`;
- `bearing / heading / course`;
- `give-way vessel / stand-on vessel / stand by`;
- `alter course / change channel`;
- `reduce speed / stop engine`.

### Checks Run

```text
Node batch schema/count/overlap gate: PASS
JSON parse for batch and regression file: PASS
Draft matcher check: PASS batch007 matcher draft checks=306
```

The draft matcher check verified:

- every `target_text` is accepted;
- every `qa_notes.should_accept` example is accepted;
- every `qa_notes.should_reject` example is rejected.

### Engineering Decision

Batch 007 may move to QA acceptance review.

No merge is approved yet. If QA passes, Director-Engineer can decide whether to
merge Batch 007 into `starter.json` and update `accept-reject-qa-pairs.json`.

### QA Acceptance Focus

QA should verify:

- all draft `qa_notes.should_accept` examples pass;
- all draft `qa_notes.should_reject` examples fail;
- dangerous minimal pairs remain protected;
- item-local variants do not imply global matcher expansion;
- `pass ahead/pass astern`, `port/starboard`, `CPA/TCPA/ETA`,
  `bearing/heading/course`, and `give-way/stand-on` boundaries remain strict;
- no playable merge or runtime/API/UI change is hidden inside the batch.

### Scope Preserved

No `starter.json`, matcher, accepted-answer dictionary, regression file,
API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, or player identity data were changed.

### Copy-Ready QA Task Handoff

```text
TASK-CE-0047
Owner: QA
Target: Batch 007 Traffic / Collision acceptance review
Mode: report-only
Batch:
content/captain-ether/batches/batch-007-traffic-collision-basics.json
Reports:
content/captain-ether/roles/content-producer/reports/batch-007-traffic-collision-basics-card-2026-06-01.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-007-traffic-collision-risk-review-2026-06-01.md
Focus:
should_accept/should_reject, dangerous minimal pairs, exact port/starboard,
ahead/astern, CPA/TCPA/ETA, bearing/heading/course, give-way/stand-on, and
pass ahead/pass astern boundaries.
Forbidden:
starter.json, matcher, API/runtime, UI, Atlas, auth, router, registry, Watch
Officer, Nav Desk, production config, deploy/FTP state, secrets.
Next gate:
Director-Engineer acceptance or fix task.
```
