import { describe, expect, it } from "vitest";
import { checkFiles, REQUIRED_FILES } from "../scripts/check-files.mjs";

describe("org-level file completeness", () => {
  it("has all required files present", () => {
    const { missing } = checkFiles();
    expect(missing, `Missing: ${missing.join(", ")}`).toEqual([]);
  });

  it("has no suspiciously short placeholder files", () => {
    const { tooShort } = checkFiles();
    expect(tooShort, `Too short: ${tooShort.join(", ")}`).toEqual([]);
  });

  it("tracks the expected set of required files", () => {
    expect(REQUIRED_FILES).toContain("profile/README.md");
    expect(REQUIRED_FILES).toContain("SECURITY.md");
  });
});
