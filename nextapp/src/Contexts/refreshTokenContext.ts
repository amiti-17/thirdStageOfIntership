import { ApolloError } from "@apollo/client";
import React from "react";

export type RefreshTokenContextType = {
  shouldUpdateRefreshToken: boolean,
  setShouldUpdateRefreshToken: React.Dispatch<React.SetStateAction<boolean>>,
}

export const defaultRefreshToken: RefreshTokenContextType = {
  shouldUpdateRefreshToken: false,
  setShouldUpdateRefreshToken: () => {},
}

export const RefreshTokenContext = React.createContext(defaultRefreshToken);