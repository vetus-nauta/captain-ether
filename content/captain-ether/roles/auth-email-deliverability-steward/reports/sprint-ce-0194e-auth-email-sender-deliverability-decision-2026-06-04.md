# CE-SPRINT-0194E Auth Email Sender Deliverability Decision

Date: 2026-06-04
Role: Auth Email Deliverability Steward
Scope: Captain Ether login-code sender identity and deliverability decision card
Status: REPORT_READY_FOR_DIRECTOR_REVIEW
Mode: Report-only; no auth/config/SMTP/DNS/runtime/UI/content JSON/production changes

## Status: REPORT_READY_FOR_DIRECTOR_REVIEW

Task result: PASS.

Recommendation for Director decision:

```text
Use common sender:
Brkovic Maritime Games <no-reply@brkovic.ltd>
```

Do not use a personal sender address. Do not create one mailbox per game. Keep the visible sender stable across Brkovic maritime games unless Platform/Auth chooses a dedicated transactional subdomain for authentication/reputation isolation.

## Current App Sender/Config Structure Without Secrets

Observed from non-secret structural review only:

- `private/config.example.php` defines `smtp_config_path`, `mail_from`, and `mail_from_name`.
- The example sender identity is `no-reply@brkovic.ltd` with display name `Brkovic Maritime Games`.
- `private/bootstrap.php` loads `private/config.php` when present, otherwise the example config, and can merge optional secret overrides by path. No secret values were read into this report.
- Production login-code sending uses SMTP when `smtp_config()` returns a configured SMTP array; otherwise it falls back to PHP `mail()`.
- SMTP path uses SMTP `MAIL FROM` from `smtp.from_email` or the SMTP username, and header `From` from that same sender plus `smtp.from_name` or app `mail_from_name`.
- PHP `mail()` fallback uses app `mail_from` and `mail_from_name` for the header `From`.
- Structural implication: if production uses SMTP, sender alignment depends primarily on the SMTP sender domain, DKIM signing domain, and provider DNS setup, not only on `mail_from` in the app config.

Project-specific inference: the app is already structurally prepared for the CEO-preferred common identity, but Platform/Auth must verify the actual production SMTP sender, DKIM signer, envelope sender/return-path, and DNS records before relying on deliverability.

## Current Technology / Deliverability Basis With Citations

Authoritative sources reviewed on 2026-06-04:

- Google Email sender guidelines: https://support.google.com/a/answer/81126?hl=en
- Google Email sender guidelines FAQ: https://support.google.com/a/answer/14229414?hl=en-EN
- Yahoo Sender Hub best practices: https://senders.yahooinc.com/best-practices/?is_listing=false
- RFC 7489 DMARC: https://www.rfc-editor.org/rfc/rfc7489
- RFC 7208 SPF: https://www.rfc-editor.org/rfc/rfc7208
- RFC 6376 DKIM: https://www.rfc-editor.org/rfc/rfc6376

Current basis:

- Google requires all senders to use SPF or DKIM, and bulk senders to use SPF, DKIM, and DMARC. Google also recommends setting up all three for domains that send mail. Source: Google Email sender guidelines, lines 62-91.
- Google states DMARC passes when SPF or DKIM authenticates and the authenticating domain matches the message `From:` header domain. Source: Google Email sender guidelines, lines 88-91.
- Google FAQ says Gmail bulk-sender status is counted across the same primary domain, including subdomains; for example root plus promotional subdomain traffic aggregates to the same primary domain. Source: Google sender FAQ, lines 36-44.
- Google FAQ lists non-aligned `From:` header/authentication, missing SPF/DKIM authentication, missing PTR, missing TLS, invalid RFC 5322 format, high spam rate, and missing DMARC policy as sender-requirement issues. Source: Google sender FAQ, lines 76-89.
- Google FAQ states that for direct mail to personal Gmail accounts, the organizational domain in the sender `From:` header must align with either the SPF organizational domain or the DKIM organizational domain. Google currently requires both SPF and DKIM for bulk senders, but only one needs to align; Google recommends full alignment to both and warns that full alignment may become a future requirement. Source: Google sender FAQ, lines 224-235.
- Google FAQ excludes transactional mail examples such as password reset messages from one-click unsubscribe requirements. Login-code mail is project-inferred as transactional, not promotional. Source: Google sender FAQ, lines 173-178.
- Yahoo requires all senders to authenticate with SPF or DKIM at minimum, keep spam complaints low, have valid forward/reverse DNS, and comply with RFC 5321/5322. Yahoo bulk-sender requirements add both SPF and DKIM plus a valid DMARC policy with at least `p=none`, DMARC pass, and `From:` alignment with either SPF or DKIM domain. Source: Yahoo Sender Hub best practices.
- SPF authorizes sending hosts for the `MAIL FROM` or `HELO` identity via DNS evaluation. Source: RFC 7208, sections 2.4 and 4.
- DKIM signs message content/headers with a domain-controlled key published in DNS; DKIM `d=` is the domain identity relevant to DMARC alignment. Source: RFC 6376, sections 3.5 and 3.6.
- DMARC is centered on the RFC5322 `From` domain and requires alignment with an authenticated SPF or DKIM identifier. Source: RFC 7489, sections 3.1 and 4.1.

Project-specific inference: even if Captain Ether is not currently a high-volume sender, the safest 2026 baseline is to meet bulk-style authentication for transactional login mail now: SPF pass, DKIM pass, DMARC pass, aligned `From`, TLS, valid forward/reverse DNS, low complaint rate, and monitoring.

## Decision: Common No-Reply Or Game-Specific Sender

Decision recommendation:

```text
Use common product-family sender: no-reply@brkovic.ltd
Display name: Brkovic Maritime Games
Do not use personal sender addresses.
Do not create per-game mailboxes such as captain-ether@... unless a real mailbox is operationally required.
```

Rationale:

- Common sender reduces mailbox sprawl while preserving a stable brand identity for login-code mail across Brkovic maritime games.
- `brkovic.ltd` is the organizational domain visible to the user and can align with DKIM or SPF if Platform/Auth configures the sending service correctly.
- A personal sender creates trust, continuity, and offboarding risk. It also weakens product-brand consistency and may encourage replies to a human mailbox not designed for auth operations.
- A game-specific local part or mailbox does not improve deliverability by itself. Deliverability is driven by authentication, alignment, reputation, DNS, message quality, and recipient engagement.
- A game-specific visible sender such as `no-reply@game.brkovic.ltd` is only justified if Platform/Auth wants a dedicated transactional subdomain for reputation isolation, bounce handling, or ESP requirements.

Project-specific inference: because Google aggregates bulk status by primary domain, moving from `brkovic.ltd` to `game.brkovic.ltd` does not by itself avoid primary-domain sender requirements. It may still help operational isolation, but not as a compliance bypass.

## DNS/Authentication Requirements

Minimum required before production confidence:

- SPF: the domain used by SMTP envelope sender/return-path must authorize the actual sending service or server.
- DKIM: outbound login-code mail must be signed with a DKIM key whose `d=` domain aligns with `brkovic.ltd` or a controlled subdomain under it.
- DMARC: publish a valid DMARC record for the visible `From:` organizational domain with at least `p=none` while monitoring; progress toward stronger enforcement only after all legitimate senders are inventoried.
- Alignment: the visible header `From` domain must align with either SPF domain or DKIM domain; target both SPF and DKIM alignment as a future-proof baseline.
- DNS hygiene: sending IPs must have valid forward and reverse DNS; SMTP should use TLS; message format must remain RFC 5322-compliant.
- Monitoring: configure DMARC aggregate reports (`rua`) to a monitored processor/mailbox, not an unmanaged personal inbox.

Preferred root-domain setup:

```text
Header From: no-reply@brkovic.ltd
Display name: Brkovic Maritime Games
DKIM d=: brkovic.ltd or an aligned subdomain accepted by DMARC relaxed alignment
Envelope sender/return-path: aligned with brkovic.ltd when provider supports it
DMARC: _dmarc.brkovic.ltd
```

Acceptable subdomain setup if Platform/Auth chooses isolation:

```text
Header From: no-reply@mail.brkovic.ltd or no-reply@game.brkovic.ltd
Display name: Brkovic Maritime Games
DKIM d=: same subdomain, or organizationally aligned brkovic.ltd/subdomain under relaxed alignment
Envelope sender/return-path: same subdomain or aligned bounce domain
DMARC: _dmarc.<chosen-subdomain> plus parent-domain policy review
```

Subdomain tradeoff:

- Root domain is simpler and matches current example config.
- Dedicated transactional subdomain can isolate mail-stream reputation and provider records, but adds DNS records, monitoring, and operational inventory.
- Subdomain does not remove Google primary-domain aggregation or the need for SPF/DKIM/DMARC alignment.

## Display Name And Envelope/Header Guidance

Recommended visible sender:

```text
Brkovic Maritime Games <no-reply@brkovic.ltd>
```

Guidance:

- Keep display name stable: `Brkovic Maritime Games`.
- Avoid personal names, individual employee addresses, and misleading game-specific human personas.
- Keep `Reply-To` consistent with the no-reply sender only if no support mailbox is staffed; otherwise Platform/Auth may choose a monitored support address, but it must not create game-by-game mailbox sprawl.
- Ensure SMTP `MAIL FROM`, header `From`, DKIM `d=`, and DMARC policy are intentionally aligned. Do not rely on display name for authentication; mailbox providers authenticate domains, not brand text.
- If SMTP provider forces an envelope sender on a provider domain, require aligned DKIM for `brkovic.ltd` so DMARC still passes.
- Do not use a malformed no-reply variant. The intended address is `no-reply@brkovic.ltd`.

Project-specific inference: the current SMTP function sets `Reply-To` equal to the SMTP from address. That is acceptable for no-reply only if the mailbox/provider handles bounces and replies safely; otherwise Platform/Auth should explicitly decide reply handling.

## Operational Risk And Monitoring

Risks:

- If SMTP `from_email` differs from app `mail_from`, the actual production sender may not match the Director-approved visible sender.
- If DKIM signs with a provider domain and SPF also uses a provider return-path, DMARC may fail despite SPF/DKIM individually passing.
- PHP `mail()` fallback may have weaker deliverability unless the host has correct SPF, DKIM signing, reverse DNS, TLS, and bounce handling.
- DMARC aggregate reports can contain operational metadata and must be routed to a controlled reporting endpoint, not committed to repository files.
- Login-code mail is transactional, but high complaint rates still harm reputation. Avoid promotional content in login-code messages.
- DMARC policy hardening can break legitimate senders if the full sender inventory is incomplete.

Monitoring requirements:

- Verify a real test message at Gmail with message-original authentication results: SPF pass, DKIM pass, DMARC pass, aligned `From`.
- Add/verify Google Postmaster Tools for the relevant domain after DNS is production-ready.
- If Yahoo volume or complaints become meaningful, verify Yahoo Sender Hub where appropriate.
- Review bounce/rejection logs for Gmail/Yahoo error codes related to SPF, DKIM, DMARC, PTR, TLS, and alignment.
- Track complaint/spam rate; Google recommends below 0.1% and avoiding 0.3% or higher for bulk traffic.

## Platform/Auth Implementation Handoff

No implementation was performed by this role. If Director accepts this decision, route the following to Platform/Auth:

1. Confirm actual production sender path: SMTP provider vs PHP `mail()` fallback.
2. Confirm actual SMTP `from_email`, header `From`, envelope sender/return-path, and DKIM `d=` domain without exposing secrets.
3. Set or preserve visible sender as `Brkovic Maritime Games <no-reply@brkovic.ltd>` unless Platform/Auth chooses a dedicated transactional subdomain.
4. If using root domain, ensure `brkovic.ltd` SPF includes the production sender and DKIM signing is aligned with `brkovic.ltd` or an aligned subdomain.
5. If using a subdomain, define one transactional subdomain only, not one mailbox per game; configure SPF, DKIM, DMARC, return-path/bounce handling, and monitoring for that subdomain.
6. Publish or verify DMARC with at least `p=none` and aggregate reporting during observation; do not move to `quarantine` or `reject` until all legitimate senders pass alignment.
7. Send controlled test messages to Gmail/Yahoo test inboxes and record only pass/fail/authentication status in internal ops notes; do not store player emails or login codes.
8. Decide whether no-reply replies are discarded, bounced, or routed to a shared monitored support mailbox.

Acceptance criteria for Platform/Auth:

```text
SPF: PASS
DKIM: PASS
DMARC: PASS
Header From: aligned with SPF or DKIM organizational domain
Display name: Brkovic Maritime Games
No personal sender
No per-game mailbox sprawl
No secrets in repo/report/log output
```

## Localization Impact

N/A for UI/content localization. This report changes no player-facing text. If Platform/Auth later changes login-code email subject/body, that copy should be treated as player-facing transactional auth copy and routed through the existing localization/i18n decision path if localized email is introduced.

## No-Secret Confirmation

- No auth implementation was edited.
- No SMTP config was edited.
- No DNS was edited.
- No production state was touched.
- No private config values were printed.
- No SMTP host, username, password, token, API key, `.netrc`, cookie, session, CSRF value, player email, or real login code was written to this report.
- Only the assigned report file was created/updated.
