import { Application } from "express";
import { createEventValidation } from "../validators/events.validations";
import { createEventHandler } from "../controllers/event.controller";
import auth from "../middlewares/auth";

export function useEventRoutes(app: Application) {
  app.post("/v1/event", auth, createEventValidation, createEventHandler);
}
