import { Application } from "express";
import { useStatusRoutes } from "../routes/status.routes";

export default (app: Application) => {
  useStatusRoutes(app);
};
