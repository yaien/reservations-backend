import { RequestHandler, Request } from "express";
import { verify } from "../helpers/jwt";
import { Client } from "../models/client.model";

function getTokenFromReq(req: Request) {
  let header = req.get("Authorization");
  return header && header.replace("Bearer ", "");
}

const auth: RequestHandler = async (req, res, next) => {
  try {
    let token = getTokenFromReq(req);
    let payload = verify(token);
    res.locals.client = await Client.findById(payload.client_id).orFail(
      Error("CLIENT_NOT_FOUND")
    );
    next();
  } catch (err) {
    res.status(401).send({ code: "UNAUTHORIZED", message: err.message });
  }
};

export default auth;
