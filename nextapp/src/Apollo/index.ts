import { ApolloClient, HttpLink, InMemoryCache, split, from } from "@apollo/client";
import { fetchConstants } from "config/system/constants/fetchConstants";
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from "@apollo/client/link/error";
import { GraphQLError } from "graphql";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { auth } from "./auth";

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
  // console.log(graphQLErrors, operation)
  // if (graphQLErrors) {
  //   graphQLErrors.forEach(({ message, locations, path }) =>
  //     // console.log(
  //     //   `[GraphQL error]: Message: ${message}, Location: ${Object.keys(locations[0]).map(key => key + "- : -" + locations[0][key])}, Path: ${path}`
  //     // )
  //   );
  //   (async () => {
  //     try {
  //       const updateAccessToken = await refreshAccessToken();
  //       if (!updateAccessToken) {
  //         throw new GraphQLError('Empty AccessToken');
  //       }
  //       forward(operation);
  //     } catch (e) {
  //       // console.error('Apollo client error: ', e)
  //     }
  //   })();
    
  // }
    
  // if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL })

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