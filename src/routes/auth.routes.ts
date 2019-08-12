import { Application } from "express";
import { getTokenHandler } from "../controllers/auth.controller";
import { getTokenValidation } from "../validators/auth.validation";

export function useAuthRoutes(app: Application) {
  app.post("/v1/oauth/token", getTokenValidation, getTokenHandler);
}
