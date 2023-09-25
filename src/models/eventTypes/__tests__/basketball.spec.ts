import { BasketballEventPresentationModel } from "../basketball.js";

describe("BasketballEventPresentationModel", () => {
  describe("name", () => {
    it("should return `aaaaa - bbbbb` when participant1 is `aaaaa` and participant2 is `bbbbb`", () => {
      expect(
        new BasketballEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: [
            ["11:22", "33:44"],
            ["55:66", "77:88"],
          ],
        }).getParsedModel().name,
      ).toEqual("aaaaa - bbbbb");
    });
  });

  describe("score", () => {
    it("should return 11:22,33:44,55:66,77:88 when score is `[['11:22', '33:44'],['55:66', '77:88']]`", () => {
      expect(
        new BasketballEventPresentationModel({
          participant1: "aaaaa",
          participant2: "bbbbb",
          score: [
            ["11:22", "33:44"],
            ["55:66", "77:88"],
          ],
        }).getParsedModel().score,
      ).toEqual("11:22,33:44,55:66,77:88");
    });
  });
});
