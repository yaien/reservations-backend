import { Application } from "express";
import { createEventValidation } from "../validators/events.validations";
import {
  createEventHandler,
  getUserEventsHandler,
  getAllEventsHandler,
  getEventParam,
  getEventHandler,
  updateEventHandler,
  getUserEventParam,
  deleteEvent,
  publishEvent,
  unpublishEvent
} from "../controllers/event.controller";
import auth from "../middlewares/auth";

export function useEventRoutes(app: Application) {
  app
    .route("/v1/user/:user/event")
    .get(getUserEventsHandler)
    .post(createEventValidation, createEventHandler);

  app
    .route("/v1/user/:user/event/:user_event")
    .get(getEventHandler)
    .put(createEventValidation, updateEventHandler)
    .delete(deleteEvent);

  app.patch("/v1/user/:user/event/:user_event/publish", publishEvent);
  app.patch("/v1/user/:user/event/:user_event/unpublish", unpublishEvent);

  app.get("/v1/event", getAllEventsHandler);

  app
    .route("/v1/event/:event")
    .all(auth)
    .get(getEventHandler);

  app.param("event", getEventParam);
  app.param("user_event", getUserEventParam);
}
