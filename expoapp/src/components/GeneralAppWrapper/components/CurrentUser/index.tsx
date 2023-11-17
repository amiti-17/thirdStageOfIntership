import { ReactNode, useState } from "react";
import { UserType } from "config/system/types/UserType";
import { CurrentUserContext } from "context/CurrentUserContext";

type CurrentUserProps = {
  children: ReactNode,
}

export const CurrentUser = ({ children }: CurrentUserProps) => {

  const [ currentUser, setCurrentUser ] = useState<UserType>({} as UserType);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}