import { VolleyballEventPresentationModel } from "../volleyball.js";
import * as formatters from "../../../formatters/formatSetsScore.js";

describe("VolleyballEventPresentationModel", () => {
  describe("name", () => {
    it("should return `aaaaa - bbbbb` when participant1 is `aaaaa` and participant2 is `bbbbb`", () => {
      expect(
        new VolleyballEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: "22:33",
        }).getParsedModel().name,
      ).toEqual("aaaaa - bbbbb");
    });
  });

  describe("score", () => {
    const formatSetsScoreMock = "return value from formatSetsScore";

    beforeEach(() => {
      jest.spyOn(formatters, "formatSetsScore").mockReturnValue(formatSetsScoreMock);
    });

    it("should call formatSetsScore when score is `3:0,17:26,26:13,16:71`", () => {
      new VolleyballEventPresentationModel({
        participant1: "aaaaa",
        participant2: "bbbbb",
        score: "3:0,17:26,26:13,16:71",
      });

      expect(formatters.formatSetsScore).toHaveBeenCalledWith("3:0,17:26,26:13,16:71");
    });

    it("should return result from formatSetsScore when score is `3:0,17:26,26:13,16:71`", () => {
      expect(
        new VolleyballEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: "3:0,17:26,26:13,16:71",
        }).getParsedModel().score,
      ).toEqual(formatSetsScoreMock);
    });
  });
});
