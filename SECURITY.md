# Security Policy

This is the org-wide policy. Individual repositories may add
repo-specific detail (e.g. `ann-lite-contracts`' much stricter
pre-audit warnings) — this document is the floor, not the ceiling.

## Reporting a vulnerability

**Do not open a public GitHub issue for a security vulnerability in
any Ann Lite repository.**

Preferred: use GitHub's private vulnerability reporting on the specific
affected repository (Security tab → "Report a vulnerability").

Alternative: email **security@annlite.org** (placeholder address — see
`ann-lite-docs/TODO.md`; a real monitored inbox must be established
before production launch).

Please include:
- A description of the issue and its potential impact
- Steps to reproduce
- Which repository/version is affected
- Any relevant logs or screenshots — **redact personal data first**,
  especially donor information

## Response targets

| Severity | Acknowledge within | Fix target |
|---|---|---|
| Critical (fund theft, full account takeover, RCE) | 24 hours | Before any further deploys |
| High (auth bypass, significant data exposure) | 48 hours | 7 days |
| Medium (limited data exposure, DoS) | 1 week | 30 days |
| Low (best-practice gaps) | 2 weeks | Scheduled into roadmap |

## Supported versions

Only the latest `v1.x` release of each repository receives security
fixes at this stage of the project (pre-1.0 general availability) —
there is no long-term-support branch yet.

## Special note: ann-lite-contracts

The Celo smart contract in `ann-lite-contracts` has **not been
professionally audited** and must not hold real funds on mainnet. See
that repository's `SECURITY.md` and `docs/AUDIT_CHECKLIST.md`.

## Full detail

`ann-lite-docs/docs/SECURITY.md` is the authoritative, project-wide
security index across all repositories.
