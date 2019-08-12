import express from "./config/express";
import mongoose from "./config/mongoose";
import env from "./config/env";

async function init() {
  await mongoose();
  const app = express();
  app.listen(env.server.port, () =>
    console.log(`Server listening on http://localhost:${env.server.port} 🚀`)
  );
}

init();
