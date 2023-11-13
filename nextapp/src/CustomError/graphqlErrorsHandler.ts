import { GraphQLErrors } from "@apollo/client/errors";
import { ShowMsgType, showMsgDefault } from "./ShowMsgType";
import CustomError from "CustomError";

const customError = new CustomError('');

export const graphqlErrorsHandler = (errors: GraphQLErrors): ShowMsgType => {

  if (errors.find(el => el.message === customError.unauthorized)) {
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