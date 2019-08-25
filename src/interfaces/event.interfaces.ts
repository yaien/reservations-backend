import { EventType, Day } from "../constants/event.constants";
import { Document } from "mongoose";
import { UserDocument } from "./user.interfaces";
import { ObjectID } from "bson";

export interface Schedule extends Document {
  day: Day;
  duration: number;
  start: { hours: number; minutes: number };
}

export interface BaseEvent extends Document {
  type: EventType;
  name: string;
  address: string;
  picture: string;
  description: string;
  location: { type: "Point"; cordinates: [number, number] };
  published: boolean;
  deleted: boolean;
  owner: UserDocument | ObjectID;
}

export interface RecurrentEvent extends BaseEvent {
  type: EventType.Recurrent;
  schedule: Schedule[];
}

export interface UniqueEvent extends BaseEvent {
  type: EventType.Unique;
  date: Date;
  duration: number;
}

export type EventDocument = UniqueEvent | RecurrentEvent;
