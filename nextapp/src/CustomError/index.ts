export default class CustomError extends Error {

  static unauthorized: string;
  static unrecognizedFetchError: string;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
    this.name = "CustomError";
    CustomError.unauthorized = "Unauthorized error, you provide incorrect email or password";
    CustomError.unrecognizedFetchError = "Unknown error, which occurred in fetch";
  }

}