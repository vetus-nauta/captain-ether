# TASK-CE-0104 Batch 015 Acceptance QA

Date: 2026-06-02
Owner: QA
Assigned by: Director-Engineer
Scope: Captain Ether Batch 015 only
Status: DONE

## Input

```text
content/captain-ether/batches/batch-015-sar-relay-coordination-basics.json
content/captain-ether/roles/sea-speak-linguist/reports/batch-015-sar-relay-coordination-risk-review-2026-06-02.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0103-batch-015-engineering-gate-2026-06-02.md
```

## Required Checks

Verify:

```text
validator --batch PASS
all should_accept examples pass
all should_reject examples fail
dangerous minimal-pair groups are executable
last known position accepts, last reported position rejects
Mayday relay / own Mayday / Pan-Pan relay boundary is preserved
unable to assist / able to assist boundary is preserved
coastguard / VTS / port control boundary is preserved
rescue boat / rescue helicopter / liferaft / pilot boat / tug boundary is preserved
SAR traffic channel one six / channel seven two boundary is preserved
rescue boat starboard / port side boundary is preserved
```

## Output

Create:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0104-batch-015-acceptance-qa-2026-06-02.md
```

The result must be one of:

```text
PASS_FOR_MERGE
PASS_WITH_NON_BLOCKING_NOTES
BLOCKED
```

No merge or production deploy is authorized by this QA task.
