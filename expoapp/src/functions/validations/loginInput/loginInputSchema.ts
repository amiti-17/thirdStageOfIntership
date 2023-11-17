import { z } from 'zod';
import { regexpObj } from '../../../config/system/regex';
import CustomError from 'CustomError';

export const loginInputSchema = z.object({
  email: z.string().trim().email({ message: CustomError.invalidEmail }),
  password: z.string()
    .trim()
    .min(8, { message: CustomError.minLengthPwd })
    .max(256, { message: CustomError.maxLengthPwd })
    .regex(regexpObj.regex.upperCase, { message: CustomError.pwdShouldContainUpperCase })
    .regex(regexpObj.regex.lowerCase, { message: CustomError.pwdShouldContainLowerCase })
    .regex(regexpObj.regex.digit, { message: CustomError.pwdShouldContainDigit }),
}).required();
