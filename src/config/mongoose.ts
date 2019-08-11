import mongoose from "mongoose";
import env from "./env";

export default () => {
  return mongoose.connect(env.mongo.uri, {
    useNewUrlParser: true
  });
};
