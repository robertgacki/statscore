import { EventPresentationModel } from "../eventModel.js";

export type SoccerEventResponseModel = {
  participant1: string;
  participant2: string;
  score: string;
};

export class SoccerEventPresentationModel extends EventPresentationModel {
  constructor(responseModel: SoccerEventResponseModel) {
    super();
    this.name = `${responseModel.participant1} - ${responseModel.participant2}`;
    this.score = responseModel.score;
  }
}
