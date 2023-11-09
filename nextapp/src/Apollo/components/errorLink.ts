import { onError } from "@apollo/client/link/error";
import { FetchResult, Observable } from "apollo-link";
import { globalClient } from "Apollo";
import { auth } from "Apollo/queries/auth";

export const errorLink = (router) => onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    try {
      for (let err of graphQLErrors) {
        switch (err.extensions?.code) {
          case 'UNAUTHENTICATED':
              if (operation.operationName === 'GetNewAccessToken') {
                return document.location.pathname === '/' ? '' : router.push('/');
              };
              return new Observable<FetchResult<Record<string, any>>>(
                (observer) => {
                  (async () => {
                    try {
                      await globalClient.mutate({
                        mutation: auth.refreshToken,
                    });
                      const subscriber = {
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer),
                      };
                      forward(operation).subscribe(subscriber);
                    } catch (e) {
                      // console.warn('onError apollo: ', e);
                      observer.error(e);
                    }
                  })();
                }
              );
        }
      }
    } catch (error) {
      console.warn(error);
    }
  }
  if (networkError && window.location.pathname !== '/') {
    router.push('/')
  }
});