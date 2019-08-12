import random from "../helpers/random";
import argon2 from "argon2";
import { Schema, model } from "mongoose";
import { ClientDocument } from "../interfaces/client.interfaces";

const ClientSchema = new Schema<ClientDocument>({
  key: { type: String, required: true, index: true, default: random.hex(16) },
  secret: { type: String, required: true, default: random.hex(32) },
  name: { type: String, required: true },
  domain: String
});

ClientSchema.pre("save", async function(this: ClientDocument) {
  this.secret = await argon2.hash(this.secret);
});

ClientSchema.method("verify", function(this: ClientDocument, secret: string) {
  return argon2.verify(this.secret, secret);
});

export const Client = model<ClientDocument>("Client", ClientSchema);
