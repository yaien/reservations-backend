import validation from "../helpers/validation";
import {
  string,
  object,
  equal,
  array,
  number,
  valid,
  date,
  when,
  forbidden
} from "joi";
import { EventType, Day } from "../constants/event.constants";

const location = object({
  type: equal("Point").required(),
  cordinates: array()
    .length(2)
    .items(
      number()
        .min(-180)
        .max(180)
        .required(),
      number()
        .min(-90)
        .max(90)
        .required()
    )
    .required()
});

const schedule = array()
  .min(1)
  .items(
    object({
      day: valid(Object.values(Day)).required(),
      duration: number().min(0).required(),
      start: number().min(0).max(86399).required().label("minutes from 0:00 to 23:59")
    })
  );

export const createEventValidation = validation({
  schema: {
    name: string()
      .min(3)
      .max(255)
      .required(),
    address: string(),
    phone: string(),
    picture: string().uri(),
    description: string(),
    location: location.required(),
    type: valid(Object.values(EventType)).required(),
    schedule: when("type", {
      is: EventType.Recurrent,
      then: schedule.required(),
      otherwise: forbidden()
    }),
    date: when("type", {
      is: EventType.Unique,
      then: date()
        .iso()
        .required()
        .min("now")
        .raw(),
      otherwise: forbidden()
    }),
    duration: when("type", {
      is: EventType.Unique,
      then: number()
        .min(0)
        .required(),
      otherwise: forbidden()
    })
  }
});
