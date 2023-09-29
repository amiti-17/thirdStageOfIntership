import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';
import { UserAccessTokenContext, UserAccessTokenContextType, defaultUserAccessToken } from '../Contexts/userAccessTokenContext';
import { ApolloProvider } from '@apollo/client';
import client from '../../Apollo';

export default function RootLayout({ children } : { children: React.ReactNode }): JSX.Element {

  const [userAccessToken, setUserAccessToken] = React.useState<string>('');
  const testObj = {userAccessToken, setUserAccessToken};

  const userAccessTokenContextValue = React.useMemo(() => ({
    userAccessToken, setUserAccessToken,
  }), [userAccessToken]);

  return (
    //ToThink: Is UserProvider should be here???
    <UserAccessTokenContext.Provider value={userAccessTokenContextValue}>
      <ApolloProvider client={client}>
        <UserProvider>
          {children}
        </UserProvider>
      </ApolloProvider>
      
    </UserAccessTokenContext.Provider>
    
  );
}