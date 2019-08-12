import { RequestHandler } from "express";

export const createEventHandler: RequestHandler = (req, res, next) => {
  res.send(req.body);
};
