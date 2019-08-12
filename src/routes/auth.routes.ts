import { Application } from "express";
import { getTokenHandler } from "../controllers/auth.controller";

export function useAuthRoutes(app: Application) {
  app.post("/v1/oauth/token", getTokenHandler);
}
