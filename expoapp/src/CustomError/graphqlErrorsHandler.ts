import { GraphQLErrors } from "@apollo/client/errors";
import CustomError from "CustomError";
import { strConstants } from "config/system/constants/strConstants";
import { MessageType, defaultMessage } from "config/system/types/Message";

const customError = new CustomError(strConstants.emptyStr);

export const graphqlErrorsHandler = (errors: GraphQLErrors): MessageType => {

  if (errors.find(el => el.message === customError.unauthorized)) {
    return {
      message: CustomError.unauthorizedMsg,
      title: 'Error',
    }
  }

  if (errors.find(el => Boolean(el.message))) return {
    message: CustomError.strangeError,
    title: 'Error',
  }

  return defaultMessage;
}