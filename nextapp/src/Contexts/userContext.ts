import React, { Dispatch, SetStateAction } from "react";
import { UserType } from "config/system/types/UserType";

export type UserContextType = {
  user: UserType | null,
  setUser: Dispatch<SetStateAction<UserType>>,
}

export const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
}

export const UserContext = React.createContext<UserContextType>({} as UserContextType);