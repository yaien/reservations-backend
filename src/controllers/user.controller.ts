import { RequestHandler } from "express";
import { User } from "../models/user.model";

export const createUserHandler: RequestHandler = async (req, res, next) => {
  try {
    let data = { reference: req.body.reference };
    let user = await User.findOne(data);
    if (!user) {
      user = await User.create(data);
    }
    res.send({ user });
  } catch (err) {
    next(err);
  }
};
