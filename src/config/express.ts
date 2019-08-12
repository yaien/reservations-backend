import express from "express";
import env from "./env";
import compression from "compression";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import routes from "./routes";

export default () => {
  const app = express();
  if (env.production) {
    app.use(compression());
    app.use(helmet());
  } else {
    app.use(morgan("dev"));
  }
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  routes(app);
  return app;
};
