import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

// const httpLink = new HttpLink({
//   uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
// })

// const wsLink = new GraphQLWsLink(createClient({
//   url: process.env.NEXT_PUBLIC_BASE_URL_SUBSCRIPTIONS,
// }))

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// )

const client = new ApolloClient({
  // link: httpLink,
  uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
  cache: new InMemoryCache(),
  credentials: "include",
  // onError: ({ graphQLErrors, networkError, operation, forward }) => {
  //   if (graphQLErrors) {
  //     for (let err of graphQLErrors) {
  //       // handle errors differently based on its error code
  //       switch (err.extensions.code) {
  //         case 'UNAUTHENTICATED':
  //           // old token has expired throwing AuthenticationError,
  //           // one way to handle is to obtain a new token and 
  //           // add it to the operation context
  //           operation
  //           // Now, pass the modified operation to the next link
  //           // in the chain. This effectively intercepts the old
  //           // failed request, and retries it with a new token
  //           return forward(operation);
          
  //         // handle other errors
  //         case 'ANOTHER_ERROR_CODE':
  //           // ...
  //       }
  //     }
  //   }
  // }
})

// const client = new ApolloClient({
//   uri: publicConfig.BASE_URL + 'graphql',
//   fetchOptions: {
//     credentials: "include",
//   },
//   cache: new InMemoryCache(),
//   credentials: "include",
//   onError: ({ graphQLErrors, networkError, operation, forward }) => {
//     if (graphQLErrors) {
//       console.log(graphQLErrors);
//     }
//     return forward(operation);
//   }
// })

export default client;