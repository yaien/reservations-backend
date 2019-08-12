import { Client } from "../models/client.model";
import { RequestHandler } from "express";
import { sign } from "../helpers/jwt";

export const getTokenHandler: RequestHandler = async (req, res, next) => {
  try {
    let client = await Client.findOne({ key: req.body.client_id }).orFail(
      new Error("CLIENT_NOT_FOUND")
    );

    if (!(await client.verify(req.body.client_secret))) {
      throw new Error("INCORRECT_SECRET");
    }

    let auth = sign(client);

    res.send(auth);
  } catch (err) {
    return res.status(401).send({ code: err.message });
  }
};
