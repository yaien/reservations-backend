import { RequestHandler } from "express";

export const getStatusHandler: RequestHandler = (req, res) => {
  res.send({ status: "Online" });
};
