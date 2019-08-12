import validation from "../helpers/validation";
import { alternatives, string, object, equal } from "joi";

export const getTokenValidation = validation({
  schema: alternatives(
    object({
      grant_type: equal("client_credentials").required(),
      client_id: string().required(),
      client_secret: string().required(),
      scope: string()
    })
  )
});
