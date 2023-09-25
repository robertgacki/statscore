import { EventFactory } from "./models/eventFactory.js";
import { EventParsedModel, EventResponseModel } from "./models/eventModel.js";

export const parseEvents = (events: Partial<EventResponseModel>[]): EventParsedModel[] => {
  const parsedEvents: EventParsedModel[] = [];

  events.forEach((event) => {
    try {
      parsedEvents.push(EventFactory.createEventPresentationModel(event).getParsedModel());
    } catch (e) {
      // todo: handle error
    }
  });

  return parsedEvents;
};
