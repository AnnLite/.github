# Contributing to Ann Lite

This is the org-wide starting point. Each repository has its own,
more specific `CONTRIBUTING.md` — read this first, then that one.

## Which repository do I want?

| I want to... | Repository |
|---|---|
| Fix something in the website UI, add a page, change styling | `ann-lite-web` |
| Change backend logic, add an API endpoint, touch the database | `ann-lite-api` |
| Work on the donation smart contract | `ann-lite-contracts` (read `docs/THREAT_MODEL.md` first — security-critical) |
| Write or edit a prayer, reflection, or Bible metadata record | `ann-lite-content` |
| Change the staff dashboard | `ann-lite-admin` |
| Fix or add documentation, policy, or architecture diagrams | `ann-lite-docs` |
| Update the org profile or these org-wide defaults | this repository |

## General expectations across every repository

- Read `docs/PROJECT_OVERVIEW.md` in `ann-lite-docs` for the project's
  non-negotiable ethical principles before contributing anywhere.
- No secrets, keys, or `.env` files committed, ever.
- Every repository's CI (lint, typecheck, test, build) must pass before
  merge.
- Trilingual content (`ann-lite-content`, and any user-facing text in
  `ann-lite-web`) must be written in Haitian Creole, French, and
  English together — not added in one language "for now."
- Security-sensitive changes (`ann-lite-api`'s auth/donations,
  `ann-lite-contracts` entirely) get extra scrutiny — see those repos'
  own `CONTRIBUTING.md` for specifics.

## Code of Conduct

By contributing to any Ann Lite repository, you agree to follow
`CODE_OF_CONDUCT.md`.
