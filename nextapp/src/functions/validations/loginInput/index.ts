import {loginInputSchema} from "./loginInputSchema";


function validateValue(schema: typeof loginInputSchema, value: string) {
  return schema.parse(value);
}

export const validateInputValue = validateValue.bind(null, loginInputSchema);
