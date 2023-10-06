import { ApolloClient, InMemoryCache } from "@apollo/client";
import { publicConfig } from "../src/config/public";

const client = new ApolloClient({
  uri: publicConfig.BASE_URL + 'graphql',
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