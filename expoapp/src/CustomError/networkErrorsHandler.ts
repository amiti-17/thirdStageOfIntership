import { NetworkError } from "@apollo/client/errors";
import CustomError from "CustomError";
import { MessageType, defaultMessage } from "config/system/types/Message";

export const networkErrorsHandler = (errors: NetworkError): MessageType => {

  if (errors.name) {
    return {
      message: CustomError.networkError,
      title: 'Error',
    }
  }

  return defaultMessage;
}