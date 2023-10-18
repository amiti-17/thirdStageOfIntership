export default class CustomError extends Error {

  unauthorized: string;
  static unauthorized: string;
  static unauthorizedMsg: string;
  static unrecognizedFetchError: string;
  static requiredLoginAgain: string;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
    this.name = "CustomError";
    this.unauthorized = "Unauthorized";
    CustomError.unauthorized = "Unauthorized";
    CustomError.unauthorizedMsg = "Unauthorized error, you provide incorrect email or password";
    CustomError.unrecognizedFetchError = "Unknown error, which occurred in fetch";
    CustomError.requiredLoginAgain = "Credential data is expired, please login again";
  }

}