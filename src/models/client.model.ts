import random from "../helpers/random";
import { Schema, model } from "mongoose";
import { ClientDocument } from "../interfaces/client.interfaces";

const ClientSchema = new Schema({
  key: { type: String, required: true, index: true, default: random.hex(16) },
  secret: { type: String, required: true, default: random.hex(32) },
  name: { type: String, required: true },
  domain: String
});

export const Client = model<ClientDocument>("Client", ClientSchema);

export default Client;
