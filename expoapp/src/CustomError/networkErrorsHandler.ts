import { GraphQLErrors } from "@apollo/client/errors";
import CustomError from "CustomError";
import { MessageType, defaultMessage } from "config/system/types/Message";

export const networkErrorsHandler = (errors: GraphQLErrors): MessageType => {

  if (networkErrorsHandler.name) {
    console.warn('networkErrorsHandler: ', networkErrorsHandler);
    return {
      message: CustomError.networkError,
      title: 'Error',
    }
  }

  return defaultMessage;
}