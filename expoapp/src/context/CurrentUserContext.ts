import { UserType } from "config/system/types/UserType";
import React, { Dispatch, SetStateAction } from "react";

type CurrentUserContextType = {
  currentUser: UserType,
  setCurrentUser: Dispatch<SetStateAction<UserType>>,
}

export const defaultCurrentUserContext: CurrentUserContextType = {
  currentUser: {} as UserType,
  setCurrentUser: () => {},
}

export const CurrentUserContext = React.createContext<CurrentUserContextType>(defaultCurrentUserContext);