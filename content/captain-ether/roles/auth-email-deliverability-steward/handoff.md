# Auth Email Deliverability Steward Handoff

## Current Trigger

CEO asked whether Captain Ether login-code email should use a common sender or a game-specific sender.

Preliminary Director conclusion:

```text
Use Brkovic Maritime Games <no-reply@brkovic.ltd>.
Do not use a personal sender such as personal_sender_redacted.
Do not create extra mailbox sprawl unless DNS/auth delivery requires it.
```

## First Useful Task

Write a no-secret deliverability decision card and implementation handoff for Platform/Auth if production SMTP needs change.

## Boundaries

Report-only. No SMTP/auth/config changes.
