#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

export const REQUIRED_FILES = [
  "profile/README.md",
  "README.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
  "SUPPORT.md",
  "LICENSE",
  ".github/ISSUE_TEMPLATE/config.yml",
  ".github/ISSUE_TEMPLATE/bug_report.yml",
  ".github/ISSUE_TEMPLATE/feature_request.yml",
  ".github/PULL_REQUEST_TEMPLATE.md",
];

const MIN_LENGTH = 50;

export function checkFiles() {
  const missing = [];
  const tooShort = [];

  for (const file of REQUIRED_FILES) {
    const path = join(ROOT, file);
    if (!existsSync(path)) {
      missing.push(file);
      continue;
    }
    const content = readFileSync(path, "utf-8");
    if (content.trim().length < MIN_LENGTH) {
      tooShort.push(file);
    }
  }

  return { missing, tooShort, total: REQUIRED_FILES.length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { missing, tooShort, total } = checkFiles();

  if (missing.length > 0) {
    console.error(`Missing ${missing.length} required file(s):`);
    missing.forEach((f) => console.error(`  - ${f}`));
  }
  if (tooShort.length > 0) {
    console.error(`\n${tooShort.length} file(s) are suspiciously short:`);
    tooShort.forEach((f) => console.error(`  - ${f}`));
  }

  if (missing.length > 0 || tooShort.length > 0) {
    process.exit(1);
  }
  console.log(`All ${total} required org-level files are present and populated.`);
}
