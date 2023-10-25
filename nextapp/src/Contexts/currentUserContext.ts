import React, { Dispatch, SetStateAction } from "react";
import { SafeUserType } from "../Apollo/queries/users";


export type CurrentUserContextType = {
  user: SafeUserType,
  setUser: Dispatch<SetStateAction<SafeUserType>>,
}

export const defaultCurrentUserContext: CurrentUserContextType = {
  user: {} as SafeUserType,
  setUser: () => {},
}

export const CurrentUserContext = React.createContext<CurrentUserContextType>({} as CurrentUserContextType);