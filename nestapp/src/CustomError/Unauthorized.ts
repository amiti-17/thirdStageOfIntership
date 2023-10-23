import CustomError from '.';

export class UnauthorizedError extends CustomError {
  extensions: { code: string };
  constructor(message: string = 'User provide incorrect credentials') {
    super(message);
    this.extensions = {
      code: '401_401',
    };
  }
}
