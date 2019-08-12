import jwt from "jsonwebtoken";
import env from "../config/env";
import { ClientDocument } from "../interfaces/client.interfaces";

export interface Payload {
  client_id: string;
  aud: string;
  iss: string;
  exp: number;
}

export function sign(client: ClientDocument) {
  let payload = {
    client_id: client.id,
    aud: client.id,
    iss: env.server.host
  };

  let token = jwt.sign(payload, env.jwt.secret, {
    expiresIn: env.jwt.expiration
  });

  return {
    expires_in: env.jwt.expiration,
    token_type: "Bearer",
    access_token: token
  };
}

export function verify(token: string) {
  return jwt.verify(token, env.jwt.secret) as Payload;
}
