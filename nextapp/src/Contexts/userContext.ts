import React, { Dispatch, SetStateAction } from "react";
import { SafeUserType } from "config/system/types/SafeUserType";

export type UserContextType = {
  user: SafeUserType | null,
  setUser: Dispatch<SetStateAction<SafeUserType>>,
}

export const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
}

export const UserContext = React.createContext<UserContextType>({} as UserContextType);