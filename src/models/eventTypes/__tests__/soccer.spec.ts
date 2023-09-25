import { SoccerEventPresentationModel } from "../soccer.js";

describe("SoccerEventPresentationModel", () => {
  describe("name", () => {
    it("should return `aaaaa - bbbbb` when participant1 is `aaaaa` and participant2 is `bbbbb`", () => {
      expect(
        new SoccerEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: "2:1",
        }).getParsedModel().name,
      ).toEqual("aaaaa - bbbbb");
    });
  });

  describe("score", () => {
    it("should return `2:1` when score is `2:1`", () => {
      expect(
        new SoccerEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: "2:1",
        }).getParsedModel().score,
      ).toEqual("2:1");
    });
  });
});
