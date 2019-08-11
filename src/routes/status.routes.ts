import { Application } from "express";
import { getStatusHandler } from "../controllers/status.controller";

export function useStatusRoutes(app: Application) {
  app.all("/v1/status", getStatusHandler);
}
