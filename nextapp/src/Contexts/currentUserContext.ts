import React from "react";
import { SafeUserType } from "../Apollo/users";

export const CurrentUserContext = React.createContext<SafeUserType>({} as SafeUserType);