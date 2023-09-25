import { TennisEventPresentationModel } from "../tennis.js";
import * as formatters from "../../../formatters/formatSetsScore.js";

describe("TennisEventPresentationModel", () => {
  describe("name", () => {
    it("should return `aaaaa - bbbbb` when participant1 is `aaaaa` and participant2 is `bbbbb`", () => {
      expect(
        new TennisEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: "22:33",
        }).getParsedModel().name,
      ).toEqual("aaaaa vs bbbbb");
    });
  });

  describe("score", () => {
    const formatSetsScoreMock = "return value from formatSetsScore";

    beforeEach(() => {
      jest.spyOn(formatters, "formatSetsScore").mockReturnValue(formatSetsScoreMock);
    });

    it("should call formatSetsScore when score is `2:1,7:6,6:3,6:7`", () => {
      new TennisEventPresentationModel({
        participant1: "aaaaa",
        participant2: "bbbbb",
        score: "2:1,7:6,6:3,6:7",
      });

      expect(formatters.formatSetsScore).toHaveBeenCalledWith("2:1,7:6,6:3,6:7");
    });

    it("should return result from formatSetsScore when score is `2:1,7:6,6:3,6:7`", () => {
      expect(
        new TennisEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: "2:1,7:6,6:3,6:7",
        }).getParsedModel().score,
      ).toEqual(formatSetsScoreMock);
    });
  });
});
