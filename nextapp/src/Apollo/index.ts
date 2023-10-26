import {
  ApolloClient,
  InMemoryCache,
  from
} from "@apollo/client";

import { fetchConstants } from "config/system/constants/fetchConstants";
import { splitLink } from "./components/splitLink";
import { errorLink } from "./components/errorLink";

export let globalClient;

export default function getClient(router) {

  // const errorLink = onError(({ graphQLErrors, networkError, operation, forward  }) => {
  //   if (graphQLErrors) {
  //     try {
  //       for (let err of graphQLErrors) {
  //         switch (err.extensions.code) {
  //           case '401_401': // user provides invalid credentials
  //             router.refresh();
  //             break;
  //           case 'UNAUTHENTICATED':
  //             // refreshAccessToken(client).catch((err) => {
  //             //   router.replace('/');
  //             //   window.location.assign('http://localhost:3000');
  //             // });
  //             return new Observable<FetchResult>(observer => {
  //               refreshAccessToken(client)
  //                 .then(refreshResponse => {
  //                   if (!refreshResponse?.refreshToken.status) throw new CustomError(CustomError.unauthorizedMsg);
  //                 })
  //                 .then(() => {
  //                   const subscriber = {
  //                     next: observer.next.bind(observer),
  //                     error: observer.error.bind(observer),
  //                     complete: observer.complete.bind(observer)
  //                   };
  //                   forward(operation).subscribe(subscriber);
  //                 })
  //                 .catch(err => {
  //                   if (window.location.pathname !== '/') router.replace('/');
                    
  //                 })
  //             });
  //         }
  //       }
  //     } catch (error) {
  //       console.warn(error);
  //     }
  // //   }
  //   if (networkError && window.location.pathname !== '/') {
  //     router.replace('/')
  //   }
  // });

  const client = new ApolloClient({
    // uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
    link: from([errorLink(router), splitLink]),
    cache: new InMemoryCache(),
    credentials: fetchConstants.include,

  });
  globalClient = client;
  return client;
};