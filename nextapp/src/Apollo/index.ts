import {
  ApolloClient,
  InMemoryCache,
  from
} from "@apollo/client";
import { Observable, FetchResult } from "apollo-link";
import { onError } from "@apollo/client/link/error";

import { fetchConstants } from "config/system/constants/fetchConstants";
import CustomError from "CustomError";
import { refreshAccessToken } from "./queries/refreshAccessToken";
import { splitLink } from "./components/splitLink";

export default function getClient(router) {

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward  }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case '401_401': // user provides invalid credentials
            router.refresh();
            break;
          case 'UNAUTHENTICATED':
            return new Observable<FetchResult>(observer => {
              refreshAccessToken(client)
                .then(refreshResponse => {
                  if (!refreshResponse.refreshToken.status) throw new CustomError(CustomError.unauthorizedMsg);
                })
                .then(() => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                  };

                  forward(operation).subscribe(subscriber);
                })
                .catch(error => {
                  //TODO: No refresh or client token available, we force user to login
                  observer.error(error);
                });
            });
        }
      }
    }
    
    if (networkError) router.replace('/'); // TODO: rewrite it to normal way...
  });

  const client = new ApolloClient({
    // uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
    link: from([errorLink, splitLink]),
    cache: new InMemoryCache(),
    credentials: fetchConstants.include,

  });
  return client;
};