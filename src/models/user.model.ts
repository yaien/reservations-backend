import { Schema, Document, model } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

export const User = model<UserDocument>("User", UserSchema);

export default User;
