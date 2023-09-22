import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';
import { UserAccessTokenContext, UserAccessTokenContextType, defaultUserAccessToken } from '../src/Contexts/userAccessTokenContext';

export default function RootLayout({ children } : { children: React.ReactNode }): JSX.Element {

  const [userAccessToken, setUserAccessToken] = React.useState<string>('');
  const testObj = {userAccessToken, setUserAccessToken};

  const userAccessTokenContextValue = React.useMemo(() => ({
    userAccessToken, setUserAccessToken,
  }), [userAccessToken]);

  return (
    //ToThink: Is UserProvider should be here???
    <UserAccessTokenContext.Provider value={userAccessTokenContextValue}>
      <UserProvider>
        {children}
      </UserProvider>
    </UserAccessTokenContext.Provider>
    
  );
}