import { ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";
import { MessageContext } from "context/MessageContext";
import { MessageType } from "config/system/types/Message";

type MessageProps = {
  children?: ReactNode,
}

export const Message = ({ children }: MessageProps) => {
  const [ message, setMessage ] = useState<MessageType>({} as MessageType);

  const myAlert = (message) => Alert.alert(message.title, message.message, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => console.log('OK Pressed')},
  ]);

  useEffect(() => {
    if ( message.title ) {
      myAlert(message);
    }
  }, [message]);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  )
}