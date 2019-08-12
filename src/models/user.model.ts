import { Schema, model } from "mongoose";
import { UserDocument } from "../interfaces/user.interfaces";

const UserSchema = new Schema({
  reference: { type: String, index: true }
});

export const User = model<UserDocument>("User", UserSchema);
