import { formatSetsScore } from "../../formatters/formatSetsScore.js";
import { EventPresentationModel } from "../eventModel.js";

export type VolleyballEventResponseModel = {
  participant1: string;
  participant2: string;
  score: string;
};

export class VolleyballEventPresentationModel extends EventPresentationModel {
  constructor(responseModel: VolleyballEventResponseModel) {
    super();
    this.name = `${responseModel.participant1} - ${responseModel.participant2}`;
    this.score = formatSetsScore(responseModel.score);
  }
}
