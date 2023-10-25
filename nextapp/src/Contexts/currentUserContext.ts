import React from "react";
import { SafeUserType } from "../Apollo/queries/users";

export const CurrentUserContext = React.createContext<SafeUserType>({} as SafeUserType);