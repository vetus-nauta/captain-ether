# Batch 015 SAR Relay Coordination Risk Review

Date: 2026-06-02
Task: `TASK-CE-0102`
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: ACCEPTED_WITH_PATCHES

## Target

```text
content/captain-ether/batches/batch-015-sar-relay-coordination-basics.json
```

## Reference Basis

The review checked the batch against SAR and distress-relay wording for:

```text
coastguard / search and rescue / SAR traffic
Mayday relay received / unable to assist
last known position / search area
visual contact / visual contact lost
survivors in sight / debris sighted
rescue boat / rescue helicopter / prepare for evacuation
listening watch for SAR traffic on channel one six
```

## Content Patches Applied

The draft was accepted with a narrow SAR-reference patch:

- removed `last reported position` as an accepted variant for `last known position` drills;
- added `last reported position` variants as explicit wrong answers in the affected items;
- updated dangerous-pair wording to preserve the `last known position / last reported position` distinction;
- removed a duplicate JSON `source_text` artifact during JSON normalization.

Affected item ids:

```text
expr_sar_last_known_position_001
phrase_sar_report_last_known_position_001
phrase_sar_search_area_north_001
phrase_sar_debris_near_last_position_001
```

## Approved Decisions

- Keep `coastguard`, `VTS`, `port control`, and `marina control` separate.
- Keep `Mayday relay`, own `Mayday`, `Pan-Pan relay`, and `readback` separate.
- Keep `last known position`, `last reported position`, `current position`, `destination`, and `course` separate.
- Keep `search area`, `traffic lane`, `anchorage`, and `reporting point` separate.
- Keep `visual contact`, `visual contact lost`, `radio contact`, and `radar contact` separate.
- Keep `survivors in sight`, `no survivors in sight`, `person overboard`, `casualties`, and `debris` separate.
- Keep `rescue boat`, `rescue helicopter`, `liferaft`, `pilot boat`, and `tug` separate.
- Keep evacuation preparation separate from evacuation-not-required, towage, and berthing.
- Keep `SAR traffic on channel one six` separate from VTS traffic and channel seven two.

## Must-Stay-Wrong Answers

These boundaries must remain wrong in QA/matcher gates:

```text
coastguard -> port control
coastguard -> VTS
Mayday relay received -> Mayday received
Mayday relay received -> Pan-Pan relay received
Mayday relay received, unable to assist -> Mayday relay received able to assist
last known position -> last reported position
last known position -> current position
last known position -> destination
Report last known position -> Report last reported position
Search area north of last known position -> Search area north of last reported position
visual contact -> radio contact
visual contact -> visual contact lost
visual contact lost -> visual contact established
survivors in sight -> no survivors in sight
survivors in sight -> person overboard
debris sighted -> survivors sighted
rescue boat -> liferaft
rescue boat -> pilot boat
rescue helicopter -> rescue boat
Rescue helicopter overhead -> rescue helicopter departed
Rescue boat approaching from starboard side -> Rescue boat approaching from port side
SAR traffic on channel one six -> SAR traffic on channel seven two
SAR traffic -> VTS traffic
prepare for evacuation -> evacuation not required
prepare for evacuation -> prepare for towage
```

## Matcher Risks

No matcher/API change is requested by this review.

Future risk areas:

- synonym expansion that treats `last known` and `last reported` as globally interchangeable;
- fuzzy matching that ignores `unable` versus `able` in assistance capability;
- accepting `Pan-Pan relay` as `Mayday relay` because the relay structure is similar;
- accepting `VTS` or `port control` for coastguard SAR authority phrases;
- accepting `fire`, `flashlight`, or `torch` as distress flare;
- accepting `liferaft`, `pilot boat`, or `tug` as rescue boat;
- accepting opposite side reports in rescue-boat approach phrases;
- collapsing channel one six and channel seven two in SAR listening-watch phrases.

## Check Run

```text
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-015-sar-relay-coordination-basics.json
```

Result after patches:

```text
PASS
Batch status: linguist_reviewed
Batch items: 25
Batch grammar_patterns: 10
Batch dangerous_pairs: 6
Batch target_text: 25
Batch should_accept: 44
Batch should_reject: 79
Batch danger_must_accept: 20
Batch danger_must_reject: 42
Known starter warnings: WARN (9)
```

## Engineer Handoff

Batch 015 is approved for Director-Engineer engineering gate after the applied
patches.

Do not merge into `starter.json` before engineering gate and QA acceptance.
No production deploy is approved by this review.

## Scope Preserved

No playable `starter.json`, accept/reject regression outside the batch,
matcher, API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav
Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
