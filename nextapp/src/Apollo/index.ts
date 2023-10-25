import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  from,
  fromPromise
} from "@apollo/client";
import { Observable } from "apollo-link";
import { fetchConstants } from "config/system/constants/fetchConstants";
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { auth } from "./auth";
import CustomError from "CustomError";

export default function getClient(router) {
  const refreshAccessToken = async () => {
    const response = await client.mutate({
        mutation: auth.refreshToken,
    });

    const accessTokenStatus = response.data;
    console.log(accessTokenStatus);
    return accessTokenStatus;
  };

  const wsLink = new GraphQLWsLink(createClient({
    url: process.env.NEXT_PUBLIC_BASE_URL_SUBSCRIPTIONS,
  }));

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward  }) => {

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case '401_401': // user provides invalid credentials
            router.refresh();
            break;
          case 'UNAUTHENTICATED':
            return new Observable(observer => {
              refreshAccessToken()
                .then(refreshResponse => {
                  if (!refreshResponse.refreshToken.status) throw new CustomError(CustomError.unauthorizedMsg);
                })
                .then(() => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                  };

                  // Retry last failed request
                  forward(operation).subscribe(subscriber);
                })
                .catch(error => {
                  // No refresh or client token available, we force user to login
                  observer.error(error);
                });
            });
            break;
        }
      }
    }
    
    // console.log('errors: ', networkError, graphQLErrors)
    if (networkError) router.replace('/'); // TODO: rewrite it to normal way...
  });

  const httpLink = new HttpLink({ 
    uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
    credentials: fetchConstants.include,
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

  const client = new ApolloClient({
    // uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
    link: from([errorLink, splitLink]),
    cache: new InMemoryCache(),
    credentials: fetchConstants.include,

  });
  return client;
};