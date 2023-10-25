import CustomError from 'CustomError';
import { regexpObj } from 'config/system/regex';
import * as Yup from 'yup';

export const yupValidationSchema = Yup.object({
    email: Yup.string()
      .email(CustomError.invalidEmail)
      .required(CustomError.requiredEmail),
    password: Yup.string()
      .min(8, CustomError.minLengthPwd )
      .max(256, CustomError.maxLengthPwd )
      .matches(regexpObj.regex.upperCase, CustomError.pwdShouldContainUpperCase )
      .matches(regexpObj.regex.lowerCase, CustomError.pwdShouldContainLowerCase )
      .matches(regexpObj.regex.digit, CustomError.pwdShouldContainDigit )
      .required(CustomError.requiredPassword),
  });