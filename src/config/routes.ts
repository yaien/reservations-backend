import { Application } from "express";
import { useStatusRoutes } from "../routes/status.routes";
import { useAuthRoutes } from "../routes/auth.routes";

export default (app: Application) => {
  useStatusRoutes(app);
  useAuthRoutes(app);
};
