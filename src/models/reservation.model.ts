import { Schema, model } from "mongoose";
import { ReservationDocument } from "../interfaces/reservation.interfaces";

const ReservationSchema = new Schema({
  date: Date,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  event: { type: Schema.Types.ObjectId, ref: "Event" }
});

export const Reservation = model<ReservationDocument>(
  "Reservation",
  ReservationSchema
);
