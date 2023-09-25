import { formatSetsScore } from "../formatSetsScore.js";

describe("formatSetsScore", () => {
  it("should return `Main score: 3:0 (set1 2:0, set2 0:1, set3 1:1)` when score is `3:0,2:0,0:1,1:1`", () => {
    expect(formatSetsScore("3:0,2:0,0:1,1:1")).toMatchInlineSnapshot(
      `"Main score: 3:0 (set1 2:0, set2 0:1, set3 1:1)"`,
    );
  });

  it("should return `Main score: 99:99 (set1 99:99, set2 99:99, set3 99:99)` when score is `99:99,99:99,99:99,99:99`", () => {
    expect(formatSetsScore("99:99,99:99,99:99,99:99")).toMatchInlineSnapshot(
      `"Main score: 99:99 (set1 99:99, set2 99:99, set3 99:99)"`,
    );
  });
});
