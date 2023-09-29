import { ApolloError, LazyQueryExecFunction } from "@apollo/client";
import CustomError from "../../CustomError";
import { NextRouter } from "next/router";

export async function handleErrorInQueries(
  query: LazyQueryExecFunction<any, any>,
  data: any,
  error: ApolloError,
  router: NextRouter,
  shouldUpdateRefreshToken: boolean,
  setShouldUpdateRefreshToken: React.Dispatch<React.SetStateAction<boolean>>,
) {
  if (!data && error && error.graphQLErrors.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
    setShouldUpdateRefreshToken((shouldUpdateRefreshToken) => !shouldUpdateRefreshToken);
    // const unauthorizedError = error.graphQLErrors.find(el => el.message === CustomError.unauthorized);
    // console.log(unauthorizedError);
    // refreshToken().then(() => {
    //   query();
    // }).catch(e => {
    //   if (error && e.graphQLErrors.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
    //     router.replace('/');
    //     console.error(CustomError.unauthorizedMsg);
    //   }
    // })
    // if (refreshError && refreshError.graphQLErrors.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
    //   router.replace('/');
    //   console.error(CustomError.unauthorizedMsg);
    // }
  }
}