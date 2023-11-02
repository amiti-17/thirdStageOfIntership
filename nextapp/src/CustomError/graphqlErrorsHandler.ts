import { GraphQLErrors } from "@apollo/client/errors";
import { ShowMsgType, showMsgDefault } from "./ShowMshType";
import CustomError from "CustomError";

const customError = new CustomError('');

export const graphqlErrorsHandler = (errors: GraphQLErrors): ShowMsgType => {
  console.warn(errors.find(el => console.warn(el.extensions.code)));
  if (errors.find(el => el.message === customError.unauthorized)) {
    return {
      message: CustomError.unauthorizedMsg,
      severity: 'error',
    }
  }

  if (errors.find(el => el.extensions.code === CustomError['401_401'])) {
    return {
      message: CustomError.unauthorizedMsg,
      severity: 'error',
    }
  }

  if (errors.find(el => Boolean(el.message))) return {
    message: CustomError.strangeError,
    severity: 'error',
  }

  return showMsgDefault
}