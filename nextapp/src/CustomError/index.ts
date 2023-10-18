export default class CustomError extends Error {

  unauthorized: string;
  static unauthorized: string;
  static unauthorizedMsg: string;
  static unrecognizedFetchError: string;
  static requiredLoginAgain: string;
  static invalidEmail: string;
  static minLengthPwd: string;
  static maxLengthPwd: string;
  static pwdShouldContainUpperCase: string;
  static pwdShouldContainLowerCase: string;
  static pwdShouldContainDigit: string;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
    this.name = "CustomError";
    this.unauthorized = "Unauthorized";
    CustomError.unauthorized = "Unauthorized";
    CustomError.unauthorizedMsg = "Unauthorized error, you provide incorrect email or password";
    CustomError.unrecognizedFetchError = "Unknown error, which occurred in fetch";
    CustomError.requiredLoginAgain = "Credential data is expired, please login again";
    CustomError.invalidEmail = "Invalid email address";
    CustomError.minLengthPwd = "Must be 8 or more characters long";
    CustomError.maxLengthPwd = "Must be 256 or less characters long";
    CustomError.pwdShouldContainUpperCase = "Must contain at least one letter in Uppercase";
    CustomError.pwdShouldContainLowerCase = "Must contain at least one letter in lowercase";
    CustomError.pwdShouldContainDigit = "Must contain at least one digit";
  }

}