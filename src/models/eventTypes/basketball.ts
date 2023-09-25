import { EventPresentationModel } from "../eventModel.js";

export type BasketballEventResponseModel = {
  participant1: string;
  participant2: string;
  score: [[string, string], [string, string]];
};

export class BasketballEventPresentationModel extends EventPresentationModel {
  constructor(responseModel: BasketballEventResponseModel) {
    super();
    this.name = `${responseModel.participant1} - ${responseModel.participant2}`;
    this.score = this.formatScore(responseModel.score);
  }

  private formatScore(score: [[string, string], [string, string]]): string {
    return score[0][0] + "," + score[0][1] + "," + score[1][0] + "," + score[1][1];
  }
}
