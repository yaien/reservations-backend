import { Application } from "express";
import { createEventValidation } from "../validators/events.validations";
import {
  createEventHandler,
  getUserEventsHandler,
  getAllEventsHandler,
  getEventParam,
  getEventHandler,
  updateEventHandler,
  getUserEventParam
} from "../controllers/event.controller";
import auth from "../middlewares/auth";

export function useEventRoutes(app: Application) {
  app
    .route("/v1/user/:user/event")
    .all(auth)
    .get(getUserEventsHandler)
    .post(createEventValidation, createEventHandler);

  app
    .route("/v1/user/:user/event/:user_event")
    .all(auth)
    .get(getEventHandler)
    .put(createEventValidation, updateEventHandler);

  app.get("/v1/event", auth, getAllEventsHandler);

  app
    .route("/v1/event/:event")
    .all(auth)
    .get(getEventHandler);

  app.param("event", getEventParam);
  app.param("user_event", getUserEventParam);
}
