import React, { SetStateAction } from "react";

export type LoginMsgContextType = {
  errorMsg: string;
  setErrorMsg: React.Dispatch<SetStateAction<string>>
  infoMsg: string;
  setInfoMsg: React.Dispatch<SetStateAction<string>>
}

export const defaultLoginMsg: LoginMsgContextType = {
  errorMsg: '',
  setErrorMsg: () => {},
  infoMsg: '',
  setInfoMsg: () => {},
}

export const LoginMsgContext = React.createContext<LoginMsgContextType>({} as LoginMsgContextType);