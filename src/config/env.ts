import dotenv from "dotenv";
import joi from "joi";

dotenv.config();

const env = {
  production: process.env.NODE_ENV === "production",
  mongo: {
    uri: process.env.MONGODB_URI
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiration: parseInt(process.env.JWT_EXPIRATION_TIME) || 3600
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST
  }
};

let { error } = joi.validate(
  env,
  joi.object({
    production: joi.boolean(),
    mongo: {
      uri: joi
        .string()
        .uri()
        .required()
    },
    jwt: {
      secret: joi.string().required(),
      expiration: joi.number().min(1)
    },
    server: {
      host: joi.string().required()
    }
  }),
  { allowUnknown: true }
);

if (error) {
  console.error("Environment variables are incomplete\n", error.details);
  process.exit(1);
}

export default env;
