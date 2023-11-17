import { ApolloError, LazyQueryExecFunction } from "@apollo/client";
import CustomError from "../../CustomError";

export async function getQueryAndHandleError(
  data: any,
  error: ApolloError,
  setShouldUpdateRefreshToken: React.Dispatch<React.SetStateAction<boolean>>,
) {
  if (!data && error && error.graphQLErrors.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
    setShouldUpdateRefreshToken((shouldUpdateRefreshToken) => !shouldUpdateRefreshToken);
  }
}
