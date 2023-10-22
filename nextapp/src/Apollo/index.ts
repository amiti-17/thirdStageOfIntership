import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  split,
  from
} from "@apollo/client";
import { fetchConstants } from "config/system/constants/fetchConstants";
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { auth } from "./auth";
import { GraphQLError } from "graphql/error";
import { asyncMap } from "@apollo/client/utilities";
import { Observable } from "apollo-link";

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
        case 'UNAUTHENTICATED':
          // error code is set to UNAUTHENTICATED
          // when AuthenticationError thrown in resolver

          // modify the operation context with a new token
          const oldHeaders = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...oldHeaders,
              token: refreshAccessToken().catch(error => {console.warn(error); window.location.replace('/')}),
            },
          });
          // retry the request, returning the new observable
          return forward(operation);
      }
    }
  }
  // if (networkError) {
  //   console.log(`[Network error]: ${networkError}`);
  //   // if you would also like to retry automatically on
  //   // network errors, we recommend that you use
  //   // @apollo/client/link/retry
  // }

  // const Cookie = operation.getContext().req.headers.cookie
  // operation.setContext({Headers: { Cookie }});
  // if (graphQLErrors) {
  //   (async () => {
  //     // try {
  //       let forwardData;
  //       await refreshAccessToken().then(data => {
  //         if (!data) {
  //           throw new GraphQLError('Empty AccessToken');
  //         }
  //         forwardData = forward(operation);
  //       });
          
  //       return new Observable(observer => {
  //         const subscriber = {
  //           next: observer.next.bind(observer),
  //           error: observer.error.bind(observer),
  //           complete: observer.complete.bind(observer),
  //         };
  //         return forward(operation).subscribe(subscriber);
  //       });

  //       // const newData = forward(operation);
  //       // console.log('query, was try again: ', newData, newData.map(el => console.log('el in map:', el)));
  //       // return forwardData;
  //     // } catch (e) {
  //     //   console.error('Apollo client error: ', e);
  //     // }
      
  //   })();
    
  // }
    
  if (networkError) window.location.replace('/'); // TODO: rewrite it to normal way...
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

})

export default client;