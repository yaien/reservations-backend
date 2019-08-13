import { RequestHandler, RequestParamHandler } from "express";
import { User } from "../models/user.model";
import { Event } from "../models/event.model";
import { UserDocument } from "../interfaces/user.interfaces";

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

export const getUserParam: RequestParamHandler = async (req, res, next, id) => {
  try {
    res.locals.user = await User.findById(id).orFail(new Error());
    next();
  } catch {
    res.status(404).send({ message: "USER_NOT_FOUND " });
  }
};
