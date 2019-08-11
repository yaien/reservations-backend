import { RequestHandler } from "express";

export const getStatusHandler: RequestHandler = (req, res) => {
  console.log("WTF");
  res.send({ status: "Online" });
};
