import React, { ReactNode } from 'react';
import { ApolloClient, ApolloProvider, from } from '@apollo/client';
import { splitLink } from "./components/splitLink";
import { errorLink } from "./components/errorLink";
import { cache } from "./components/cache";

export let globalClient;

const client = new ApolloClient({
  link: from([ errorLink(), splitLink ]),
  credentials: 'include',
  cache,
});

globalClient = client;

export const MyApollo = ({ children }: { children: ReactNode}) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);