import React, { ReactNode, useCallback, useContext } from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
} from '@apollo/client';
import { splitLink } from "./components/splitLink";
import { errorLink } from "./components/errorLink";
import { cache } from "./components/cache";
import { globalClientObj } from './components/globalClientObj';
import { NavigatorContext } from 'context/NavigatorContext';

type MyApolloProps = {
  children?: ReactNode,
}

export const MyApollo = ({ children }: MyApolloProps) => {
  const { navigator } = useContext(NavigatorContext);

  const myClient = useCallback(() => {
    const client = new ApolloClient({
      link: ApolloLink.from([ errorLink(navigator), splitLink ]),
      connectToDevTools: true,
      credentials: 'include',
      cache,
    });
    globalClientObj.client = client;
    return client;
  }, []);
  

  return (
    <ApolloProvider client={myClient()}>
      {children}
    </ApolloProvider>
  );
}
