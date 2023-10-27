import { onError } from "@apollo/client/link/error";
import { FetchResult, Observable } from "apollo-link";
import { globalClient } from "Apollo";
import { refreshAccessToken } from "Apollo/queries/refreshAccessToken";
import CustomError from "CustomError";

export const errorLink = (router) => onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    try {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case '401_401': // user provides invalid credentials
            router.refresh();
            break;
          case 'UNAUTHENTICATED':
            return new Observable<FetchResult>(observer => {
              refreshAccessToken(globalClient)
                .then(refreshResponse => {
                  if (!refreshResponse?.refreshToken.status) throw new CustomError(CustomError.unauthorizedMsg);
                })
                .then(() => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                  };
                  forward(operation).subscribe(subscriber);
                })
                .catch(err => {
                  if (window.location.pathname !== '/') router.replace('/');
                })
            });
        }
      }
    } catch (error) {
      console.warn(error);
    }
  }
  if (networkError && window.location.pathname !== '/') {
    router.replace('/')
  }
});