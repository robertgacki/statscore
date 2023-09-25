import { formatSetsScore } from "../../formatters/formatSetsScore.js";
import { EventPresentationModel } from "../eventModel.js";

export type TennisEventResponseModel = {
  participant1: string;
  participant2: string;
  score: string;
};

export class TennisEventPresentationModel extends EventPresentationModel {
  constructor(responseModel: TennisEventResponseModel) {
    super();
    this.name = `${responseModel.participant1} vs ${responseModel.participant2}`;
    this.score = formatSetsScore(responseModel.score);
  }
}
