import { Schema, model } from "mongoose";
import { UserDocument } from "../interfaces/user.interfaces";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

export const User = model<UserDocument>("User", UserSchema);

export default User;
