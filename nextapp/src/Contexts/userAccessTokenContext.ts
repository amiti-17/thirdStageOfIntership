import React from "react"

export type UserAccessTokenContextType = {
  userAccessToken: string, 
  setUserAccessToken: React.Dispatch<string>,
}

export const defaultUserAccessToken = {
  userAccessToken: '',
  setUserAccessToken: (some: string) => {},
}

export const UserAccessTokenContext = React.createContext(defaultUserAccessToken);