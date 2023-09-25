import { EventPresentationModel } from "../eventModel.js";

export type HandballEventResponseModel = {
  participant1: string;
  participant2: string;
  score: string;
};

export class HandballEventPresentationModel extends EventPresentationModel {
  constructor(responseModel: HandballEventResponseModel) {
    super();
    this.name = `${responseModel.participant1} vs ${responseModel.participant2}`;
    this.score = responseModel.score;
  }
}
