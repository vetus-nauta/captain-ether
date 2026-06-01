# Batch 008 VTS / Port Control Risk Review

Date: 2026-06-01
Task: `TASK-CE-0051`
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: PASS

## Target

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## Approved Accepted Answers

- `VTS`, `v t s`, and `vessel traffic service` are acceptable item-local
  variants for the VTS station item.
- `VTS` and `Port Control` are both valid station identities in this branch,
  but they remain separate items and must not substitute for each other.
- `request clearance` and `request permission` are acceptable item-local
  variants for port entry/departure requests.
- `contact VTS` is acceptable as an item-local variant for `call VTS`.
- `keep a listening watch` is acceptable for the VTS-context listening-watch
  item.
- `tug assistance requested` and `require tug assistance` are acceptable only
  in the assigned tug-assistance items.
- `pilot on board` and `pilot is on board` are acceptable item-local status
  variants.

## Must-Stay-Wrong Answers

- `VTS`, `port control`, `marina control`, and `pilot station` must not collapse
  as station identities.
- `instruction`, `advice`, and `traffic information` must remain separate
  authority/message categories.
- `request` and `report` must remain separate radio actions.
- `pilot`, `tug`, and `tow/towing assistance` must remain separate service
  categories in this batch.
- `enter port` and `leave port` must remain opposite port movements.
- `port entry is permitted` and `port entry is not permitted` must remain
  opposite permission results.
- `port closed` remains wrong for `Port entry is not permitted`; the item trains
  permission/refusal wording, not general closure information.
- `channel 12`, `channel 13`, `channel 16`, and `channel 72` must remain exact.
- `reporting point`, `anchorage`, `berth`, and `fairway` must remain separate
  location concepts.
- `proceed`, `hold`, and `wait` must remain separate movement instructions.
- `inbound` and `outbound` must remain opposite traffic directions.

## Content Patch

One accepted-answer cleanup was made:

```text
phrase_vts_traffic_crossing_ahead_001
removed accepted_answers value: traffic information traffic crossing ahead
```

Reason: duplicated nonstandard wording. The canonical accepted wording remains
covered by `traffic information vessel crossing ahead`.

## Dangerous Minimal Pairs

Approved as executable regression candidates:

- `request / report`
- `instruction / advice / information`
- `VTS / port control / marina control / pilot station`
- `pilot / tug / tow`
- `enter port / leave port`
- `permitted / not permitted`
- `reporting point / anchorage / berth / fairway`
- `channel 12 / channel 13 / channel 16 / channel 72`
- `proceed / hold / wait`
- `inbound / outbound`

## Matcher Risks

No matcher/API change is requested by this review.

The main future matcher risks are:

- broad synonym expansion that treats `instruction`, `advice`, and
  `information` as interchangeable;
- fuzzy station identity matching that accepts `VTS` for `Port Control` or
  `Pilot Station`;
- loose service matching that accepts `tug`, `tow`, and `pilot` as equivalents;
- numeric fuzzing of VTS channel numbers;
- accepting negation loss in `permitted` versus `not permitted`;
- accepting traffic direction reversal in `inbound` versus `outbound`.

## Check Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Result:

```text
PASS
Batch status: linguist_reviewed
Batch items: 50
Batch target_text: 50
Batch should_accept: 109
Batch should_reject: 150
Batch danger_must_accept: 39
Batch danger_must_reject: 117
Known starter warnings: WARN (9)
```

## Engineer Handoff

Batch 008 is approved for Director-Engineer engineering gate.

Do not merge into `starter.json` before engineering gate and QA acceptance.
No production deploy is approved by this review.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.
