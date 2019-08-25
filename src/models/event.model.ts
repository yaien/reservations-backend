import { Schema, model, SchemaType } from "mongoose";
import { EventDocument } from "../interfaces/event.interfaces";

const ScheduleSchema = new Schema({
  day: String,
  start: {
    hour: Number,
    minutes: Number
  }
});

const EventSchema = new Schema({
  type: String,
  name: String,
  address: String,
  picture: String,
  description: String,
  phone: String,
  published: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  location: {
    type: {
      type: String,
      required: true,
      enum: ["Point"]
    },
    cordinates: {
      type: [Number],
      required: true
    }
  },
  date: Date,
  schedule: [ScheduleSchema],
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

export const Event = model<EventDocument>("Event", EventSchema);
