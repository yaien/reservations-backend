import yargs from "yargs";
import argon2 from "argon2";
import mongoose from "../config/mongoose";
import Client from "../models/client.model";

yargs
  .command(
    "client:create",
    "Create a client",
    {
      name: {
        type: "string",
        required: true
      },
      domain: {
        type: "string"
      }
    },
    async args => {
      let db = await mongoose();
      let client = new Client(args);
      console.log(client);
      client.secret = await argon2.hash(client.secret);
      await client.save();
      await db.connection.close();
    }
  )
  .demandCommand()
  .help().argv;
