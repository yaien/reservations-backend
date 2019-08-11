import express from "./config/express";
import env from "./config/env";

async function init() {
  const app = express();
  app.listen(env.server.port, () =>
    console.log(`Server listening on http://localhost:${env.server.port} 🚀`)
  );
}

init();
