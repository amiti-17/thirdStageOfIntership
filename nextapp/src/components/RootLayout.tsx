import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../Apollo';

export default function RootLayout({ children } : { children: React.ReactNode }): JSX.Element {

  return (
    //ToThink: Is UserProvider should be here???
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
  );
}