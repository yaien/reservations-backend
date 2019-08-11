import { Document } from "mongoose";

export interface UserDocument extends Document {
  reference: String;
}
