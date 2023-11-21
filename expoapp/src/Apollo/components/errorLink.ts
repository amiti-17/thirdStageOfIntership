import { onError } from "@apollo/client/link/error";
import { FetchResult, Observable } from "apollo-link";
import { auth } from "Apollo/queries/auth";
import { globalClientObj } from "./globalClientObj";
import { pages } from "config/system/pages";

export const errorLink = (navigator) => onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions?.code) {
        case 'UNAUTHENTICATED':
          if (operation.operationName === 'GetNewAccessToken') {
            if (!navigator?.navigate) return
            navigator?.navigate(pages.login);
            return
          };
          return new Observable<FetchResult<Record<string, any>>>(
            (observer) => {
              (async () => {
                try {
                  await globalClientObj.client?.mutate({
                    mutation: auth.refreshToken,
                  });
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                  };
                  forward(operation).subscribe(subscriber);
                } catch (e) {
                  observer.error(e);
                }
              })();
            }
          );
      }
    }
  }
  if (networkError) {
    if (!navigator?.navigate) return
    navigator?.navigate(pages.login);
    return;
  }
});