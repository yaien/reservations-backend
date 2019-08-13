import auth from "../middlewares/auth";
import { Application } from "express";
import {
  createUserHandler,
  getUserParam
} from "../controllers/user.controller";
import { createUserValidation } from "../validators/user.validatios";

export function useUserRoutes(app: Application) {
  app.post("/v1/user", auth, createUserValidation, createUserHandler);

  app.param("user", getUserParam);
}
