import React, { SetStateAction } from "react";

export type AlertSearchBarContextType = {
  alertText: string,
  setAlertText: React.Dispatch<SetStateAction<string>>,
}

export const defaultCurrentUser: AlertSearchBarContextType = {
  alertText: '',
  setAlertText: () => {},
}

export const AlertSearchBarContext = React.createContext<AlertSearchBarContextType>({} as AlertSearchBarContextType);