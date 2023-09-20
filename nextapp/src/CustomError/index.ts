export default class CustomError extends Error {

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
    this.name = "myCustomError";
    this.stack = (new Error()).stack;
  }

}