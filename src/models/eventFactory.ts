import { SPORT_TYPES } from "../config/sportTypes.js";
import { EventPresentationModel, EventResponseModel } from "./eventModel.js";
import {
  BasketballEventPresentationModel,
  BasketballEventResponseModel,
} from "./eventTypes/basketball.js";
import {
  HandballEventPresentationModel,
  HandballEventResponseModel,
} from "./eventTypes/handball.js";
import { SoccerEventPresentationModel, SoccerEventResponseModel } from "./eventTypes/soccer.js";
import { TennisEventPresentationModel, TennisEventResponseModel } from "./eventTypes/tennis.js";
import {
  VolleyballEventPresentationModel,
  VolleyballEventResponseModel,
} from "./eventTypes/volleyball.js";

export class EventFactory {
  static createEventPresentationModel(event: Partial<EventResponseModel>): EventPresentationModel {
    switch (event.sport) {
      case SPORT_TYPES.SOCCER:
        return new SoccerEventPresentationModel(event as SoccerEventResponseModel);
      case SPORT_TYPES.BASKETBALL:
        return new BasketballEventPresentationModel(event as BasketballEventResponseModel);
      case SPORT_TYPES.TENNIS:
        return new TennisEventPresentationModel(event as TennisEventResponseModel);
      case SPORT_TYPES.HANDBALL:
        return new HandballEventPresentationModel(event as HandballEventResponseModel);
      case SPORT_TYPES.VOLLEYBALL:
        return new VolleyballEventPresentationModel(event as VolleyballEventResponseModel);
      default:
        throw new Error(`Invalid sport: ${event.sport}`);
    }
  }
}
