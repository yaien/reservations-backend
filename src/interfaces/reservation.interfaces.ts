import { UserDocument } from "./user.interfaces";
import { EventDocument } from "./event.interfaces";
import { Document } from "mongoose";

export interface ReservationDocument extends Document {
  date: Date;
  user: UserDocument;
  event: EventDocument;
}
