# Batch 009 Onboard Operations Risk Review

Date: 2026-06-01
Task: `TASK-CE-0057`
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: PASS

## Target

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

## Approved Accepted Answers

- `hand over watch` and `handover watch` are acceptable item-local variants for
  the handover item.
- `take over watch` remains the accepted takeover wording.
- `port helm`, `helm to port`, `starboard helm`, and `helm to starboard` are
  accepted item-locally for helm orders.
- `midships` and `helm midships` are accepted for the midships helm order.
- `let go anchor`, `let go the anchor`, `heave up anchor`, and `weigh anchor`
  are approved only for the assigned anchor-handling items.
- `make fast`, `make fast the line`, `let go lines`, and `let go the lines`
  are approved only for assigned line-handling items.
- `lifebuoy` and `life buoy` are accepted item-locally for the lifebuoy item.

## Must-Stay-Wrong Answers

- Ordinary `left` and `right` wording stays wrong for `port helm` and
  `starboard helm` items.
- `hand over watch` and `take over watch` must remain strict opposites.
- `order completed` and `action completed` must stay item-specific in this
  batch.
- `anchor ready`, `anchor down`, `anchor aweigh`, and `anchor dragging` must
  remain separate anchor states.
- `let go anchor` and `heave up anchor` must remain opposite anchor operations.
- `make fast` and `let go lines` must remain opposite line operations.
- `bow station`, `stern station`, `port station`, and `starboard station` must
  remain exact station positions.
- `stand by` as a command and `standing by` as a readiness status must not
  collapse.
- `safety check` must remain separate from emergency action.
- `fire on board`, `flooding on board`, and `man overboard` must remain
  separate emergency categories.

## Dangerous Minimal Pairs

Approved as executable regression candidates:

- `hand over watch / take over watch`
- `helm order / action completed`
- `port helm / starboard helm`
- `anchor / moor / berth`
- `let go anchor / heave up anchor`
- `make fast / let go lines`
- `bow station / stern station / port station / starboard station`
- `stand by / standing by`
- `safety check / emergency action`
- `fire / flooding / man overboard`

## Matcher Risks

No matcher/API change is requested by this review.

Future matcher risk areas:

- broad synonym expansion that accepts ordinary `left/right` for helm orders;
- fuzzy matching that collapses `stand by` and `standing by`;
- loose action matching that accepts `order completed` for `action completed`;
- collapsing anchor states or opposite anchor actions;
- treating onboard emergency-action language as a distress radio-call
  substitute.

## Check Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

Result:

```text
PASS
Batch status: linguist_reviewed
Batch items: 50
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 35
Batch danger_must_reject: 105
Known starter warnings: WARN (9)
```

## Engineer Handoff

Batch 009 is approved for Director-Engineer engineering gate.

Do not merge into `starter.json` before engineering gate and QA acceptance.
No production deploy is approved by this review.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.
