import CustomError from ".";

export default class ValidationError extends CustomError {

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.name = "myValidationError";
    this.stack = (new Error()).stack;

  }
}