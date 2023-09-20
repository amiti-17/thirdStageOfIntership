import * as schemas from "./loginInputSchema";


export default function validateValue(value: string, schema: typeof schemas.loginInputSchema) {
  return schema.parse(value);
}