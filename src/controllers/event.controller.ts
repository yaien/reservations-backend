import { RequestHandler, RequestParamHandler } from "express";
import { Event } from "../models/event.model";
import { EventDocument } from "../interfaces/event.interfaces";

export const createEventHandler: RequestHandler = async (req, res, next) => {
  try {
    let event = await Event.create({ ...req.body, user: res.locals.user._id });
    res.send(event);
  } catch (err) {
    next(err);
  }
};

export const getUserEventsHandler: RequestHandler = async (req, res, next) => {
  try {
    let events = await Event.find({ user: res.locals.user._id });
    res.send(events);
  } catch (err) {
    next(err);
  }
};

export const getAllEventsHandler: RequestHandler = async (req, res, next) => {
  try {
    let events = await Event.find();
    res.send(events);
  } catch (err) {
    next(err);
  }
};

export const getEventParam: RequestParamHandler = async (_, res, next, id) => {
  try {
    res.locals.event = await Event.findById(id).orFail(Error());
    next();
  } catch {
    res.status(404).send({ message: "EVENT_NOT_FOUND" });
  }
};

export const getUserEventParam: RequestParamHandler = async (
  _,
  res,
  next,
  id
) => {
  try {
    res.locals.event = await Event.findOne({
      _id: id,
      user: res.locals.user._id
    }).orFail(Error());
    next();
  } catch {
    res.status(404).send({ message: "EVENT_NOT_FOUND" });
  }
};

export const getEventHandler: RequestHandler = async (req, res) => {
  res.send(res.locals.event);
};

export const updateEventHandler: RequestHandler = async (req, res, next) => {
  try {
    let event = res.locals.event;
    if (event.published) {
      throw new Error("PUBLISHED_EVENT");
    }
    await event.set(req.body).save();
    res.send(event);
  } catch (err) {
    next(err);
  }
};

export const publishEvent: RequestHandler = async (req, res, next) => {
  try {
    let event = res.locals.event;
    event.published = true;
    await event.save();
    res.send(event);
  } catch (err) {
    next(err);
  }
};

export const unpublishEvent: RequestHandler = async (req, res, next) => {
  try {
    let event = res.locals.event;
    event.published = false;
    await event.save();
    res.send(event);
  } catch (err) {
    next(err);
  }
};

export const deleteEvent: RequestHandler = async (req, res, next) => {
  let event = res.locals.event;
  if (event.published) return next(new Error("PUBLISHED_EVENT"));
  event.deleted = true;
  await event.save();
  res.send(event);
};
