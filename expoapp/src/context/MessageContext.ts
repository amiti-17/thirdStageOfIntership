import { MessageType } from "config/system/types/Message";
import React, { Dispatch, SetStateAction } from "react";

type MessageContextType = {
  message: MessageType,
  setMessage: Dispatch<SetStateAction<MessageType>>,
}

export const defaultMessageContext: MessageContextType = {
  message: {} as MessageType,
  setMessage: () => {},
}

export const MessageContext = React.createContext<MessageContextType>(defaultMessageContext);