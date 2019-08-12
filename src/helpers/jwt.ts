import jwt from "jsonwebtoken";
import env from "../config/env";

export function sign(data: {}) {
  let payload = {
    ...data,
    iss: env.server.host,
    exp: env.jwt.expiration
  };

  let token = jwt.sign(payload, env.jwt.secret);

  return {
    expires_in: env.jwt.expiration,
    token_type: "Bearer",
    access_token: token
  };
}
