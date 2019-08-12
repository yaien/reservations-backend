import joi from "joi";
import { RequestHandler } from "express";

type Target = "body" | "query" | "params";

interface Options {
  schema: joi.SchemaLike;
  target?: Target;
}

function validation({ schema, target = "body" }: Options): RequestHandler {
  return (req, res, next) => {
    let { error, value } = joi.validate(req[target], schema);
    if (error) return res.status(400).send({ validation: error.details });
    req[target] = value;
    next();
  };
}

export default validation;
