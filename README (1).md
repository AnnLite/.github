# .github

Organization-wide defaults for the `ann-lite` GitHub organization:
the profile page (`profile/README.md`, shown on
github.com/ann-lite) and community health files (`CONTRIBUTING.md`,
`CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`,
`.github/ISSUE_TEMPLATE/`, `.github/PULL_REQUEST_TEMPLATE.md`).

## How this repository works

GitHub automatically uses the files in a `.github` repository as the
**default** community health files for any repository in the
organization that doesn't define its own. Every one of Ann Lite's six
product repositories (`ann-lite-web`, `ann-lite-api`,
`ann-lite-contracts`, `ann-lite-content`, `ann-lite-admin`,
`ann-lite-docs`) already defines its own tailored versions of these
files — so in practice, this repository's files are the fallback for
any *new* repository added to the org before it has its own, and the
single source of truth for the org profile page itself.

## What's here

```
profile/README.md          org profile page (github.com/ann-lite)
CONTRIBUTING.md              org-wide contribution starting point
CODE_OF_CONDUCT.md           org-wide code of conduct
SECURITY.md                  org-wide vulnerability reporting policy
SUPPORT.md                   how to get help
LICENSE
.github/ISSUE_TEMPLATE/      default issue forms
.github/PULL_REQUEST_TEMPLATE.md
.github/workflows/ci.yml     verifies this repo's own required files exist
```

## Verifying this repository

```bash
npm ci
npm run check-files
npm test
```

`npm run check-files` is pure Node (no dependencies) and was actually
run during this repository's generation:

```
All required org-level files are present and populated.
```

## Creating the GitHub repository

The repository name **must be exactly `.github`** (not
`ann-lite-github` or similar) for GitHub to apply these org-wide
defaults automatically.

```bash
cd dot-github          # this folder; rename on push, see below
git init
git add .
git commit -m "Initial commit: .github org defaults v1.0.0"
git branch -M main

gh repo create ann-lite/.github \
  --public \
  --description "Organization-wide community health files and profile for Ann Lite." \
  --source=. --remote=origin --push

git tag -a v1.0.0 -m ".github v1.0.0"
git push origin v1.0.0
gh release create v1.0.0 --title ".github v1.0.0" --notes-file CHANGELOG.md
```

Note: this working directory is named `dot-github` (not `.github`)
purely so it isn't treated as a hidden folder by tools that list this
delivery's contents — `git init`/`gh repo create` above work
identically regardless of the local folder name; what matters is the
repository name on GitHub (`ann-lite/.github`).

## License

MIT — see `LICENSE`.
