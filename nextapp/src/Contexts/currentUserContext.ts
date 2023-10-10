import React from "react";
import { SafeUserType } from "../Apollo/users";

// export type CurrentUserContextType = {
//   currentUser: SafeUserType,
//   setCurrentUser: React.Dispatch<React.SetStateAction<SafeUserType>>,
// }

// export const defaultCurrentUser: CurrentUserContextType = {
//   currentUser: {
//     name: 'user',
//     email: 'user@gmail.com',
//     id: 0,
//     __typename: 'SafeUser',
//   },
//   setCurrentUser: () => {},
// }

export const CurrentUserContext = React.createContext<SafeUserType>({} as SafeUserType);