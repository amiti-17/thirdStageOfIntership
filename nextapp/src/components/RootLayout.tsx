import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';
import { ApolloProvider, useMutation } from '@apollo/client';
import client from '../Apollo';

export default function RootLayout({ children } : { children: React.ReactNode }): JSX.Element {

  return (
    //ToThink: Is UserProvider should be here???
      <ApolloProvider client={client}>
        <UserProvider>
          {children}
        </UserProvider>
      </ApolloProvider>
      
    
  );
}