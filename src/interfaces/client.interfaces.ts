import { Document } from "mongoose";

export interface ClientDocument extends Document {
  key: string;
  secret: string;
  name: string;
}
