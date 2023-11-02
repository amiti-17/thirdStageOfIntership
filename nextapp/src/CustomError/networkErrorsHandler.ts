import { GraphQLErrors } from "@apollo/client/errors";
import { ShowMsgType, showMsgDefault } from "./ShowMshType";
import CustomError from "CustomError";

export const networkErrorsHandler = (errors: GraphQLErrors): ShowMsgType => {

  if (networkErrorsHandler.name) {
    console.warn('networkErrorsHandler: ', networkErrorsHandler);
    return {
      message: CustomError.networkError,
      severity: 'error',
    }
  }

  return showMsgDefault;
}