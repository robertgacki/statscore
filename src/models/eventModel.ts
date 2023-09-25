import { SPORT_TYPES } from "../config/sportTypes.js";
import { BasketballEventResponseModel } from "./eventTypes/basketball.js";
import { HandballEventResponseModel } from "./eventTypes/handball.js";
import { SoccerEventResponseModel } from "./eventTypes/soccer.js";
import { TennisEventResponseModel } from "./eventTypes/tennis.js";
import { VolleyballEventResponseModel } from "./eventTypes/volleyball.js";

export type EventParsedModel = {
  name: string;
  score: string;
};

export abstract class EventPresentationModel {
  protected name: string = "";
  protected score: string = "";

  getParsedModel(): EventParsedModel {
    return {
      name: this.name,
      score: this.score,
    };
  }
}

export type EventResponseModel = {
  sport: SPORT_TYPES | string;
} & (
  | BasketballEventResponseModel
  | HandballEventResponseModel
  | SoccerEventResponseModel
  | TennisEventResponseModel
  | VolleyballEventResponseModel
);
