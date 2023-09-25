import { HandballEventPresentationModel } from "../handball.js";

describe("HandballEventPresentationModel", () => {
  describe("name", () => {
    it("should return `aaaaa - bbbbb` when participant1 is `aaaaa` and participant2 is `bbbbb`", () => {
      expect(
        new HandballEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: "22:33",
        }).getParsedModel().name,
      ).toEqual("aaaaa vs bbbbb");
    });
  });

  describe("score", () => {
    it("should return `22:33` when score is `22:33`", () => {
      expect(
        new HandballEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: "22:33",
        }).getParsedModel().score,
      ).toEqual("22:33");
    });
  });
});
