import { Application } from "express";
import { useStatusRoutes } from "../routes/status.routes";
import { useAuthRoutes } from "../routes/auth.routes";
import { useUserRoutes } from "../routes/user.routes";
import { useEventRoutes } from "../routes/event.routes";

export default (app: Application) => {
  useStatusRoutes(app);
  useAuthRoutes(app);
  useUserRoutes(app);
  useEventRoutes(app);
};
