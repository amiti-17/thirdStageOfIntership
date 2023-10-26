import { onError } from "@apollo/client/link/error";
import { refreshAccessToken } from "Apollo/queries/refreshAccessToken";
import CustomError from "CustomError";
import { FetchResult, Observable } from "apollo-link";
import { globalClient } from "Apollo";

export const errorLink = (router) => onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    try {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case '401_401': // user provides invalid credentials
            router.refresh();
            break;
          case 'UNAUTHENTICATED':
            // refreshAccessToken(client).catch((err) => {
            //   router.replace('/');
            //   window.location.assign('http://localhost:3000');
            // });
            // forward(operation);
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