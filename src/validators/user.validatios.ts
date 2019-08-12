import validation from "../helpers/validation";
import { string } from "joi";

export const createUserValidation = validation({
  schema: {
    reference: string().required()
  }
});
