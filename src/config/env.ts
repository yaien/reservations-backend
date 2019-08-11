import dotenv from "dotenv";

dotenv.config();

const env = {
  production: process.env.NODE_ENV === "production",
  mongo: {
    uri: process.env.MONGODB_URI
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiration: process.env.JWT_EXPIRATION_TIME || 3600
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST
  }
};

export default env;
