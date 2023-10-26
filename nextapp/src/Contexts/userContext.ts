import React, { Dispatch, SetStateAction } from "react";
import { SafeUserType } from "../Apollo/queries/users";


export type UserContextType = {
  user: SafeUserType | null,
  setUser: Dispatch<SetStateAction<SafeUserType>>,
}

export const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
}

export const UserContext = React.createContext<UserContextType>({} as UserContextType);