import { NextRouter, useRouter } from "next/router";
import CustomError from "../../CustomError";
import {
  ApolloError, 
  ApolloQueryResult, 
  LazyQueryExecFunction, 
  LazyQueryHookExecOptions, 
  MutationFunction, 
  OperationVariables
} from "@apollo/client";

const customError = new CustomError('');

export async function requestDataWithHandleUnauthorized(
  currentRequest: LazyQueryExecFunction<any, OperationVariables>, 
  currentUserError: ApolloError, 
  refreshToken: MutationFunction,
  refreshTokenError: ApolloError,
  router: NextRouter,
  options?: LazyQueryHookExecOptions,
) {
  try {
    console.log('options: ', options)
    await options ? currentRequest(options) : currentRequest();
    
    if (currentUserError?.graphQLErrors.find(el => el.message === customError.unauthorized)) {
      throw new CustomError(customError.unauthorized);
    }
  } catch (error) {
    console.warn('firstError: ', error);
    if (
      error?.message === customError.unauthorized || 
      error?.graphQLErrors?.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized
    ) {
      if (await handleUnauthorized(refreshToken, router)) {
        try {
          console.warn('update refresh token...')
          await options ? currentRequest(options) : currentRequest();
        } catch (error) {
          console.warn('secondError: ', error);
        }
      }
    } else throw error;
  }

  // try {
  //   await currentRequest();
  // } catch (error) {
  //   console.warn('secondError: ', error);
  // }
}

export async function handleUnauthorized (
  refreshToken: MutationFunction,
  router: NextRouter,
): Promise<true> {
  try {
    await refreshToken();
    return true;
  } catch (error) {
    console.warn("something unclear refresh token error in weather/index.ts", error);
    if (error && error.graphQLErrors.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
      console.warn(error);
      router.replace('/'); //TODO: make some alert, that credential was expired (on the login page).
    } else throw error;
  }
}

export async function handleUnauthorizedQuery(
  refreshToken: MutationFunction, 
  router: NextRouter,
  query: LazyQueryExecFunction<any, any> | null,
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>,
  error: ApolloError,
  option: LazyQueryHookExecOptions = {}, 
) {
  if (query) {
    const data = await query(option);
    // console.log('current query executed: ', data, error);
    if (error || data.error?.graphQLErrors) {
      if (
        error?.message === customError.unauthorized || 
        error?.graphQLErrors?.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized ||
        data.error?.graphQLErrors?.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized
      ) {
        if (await handleUnauthorized(refreshToken, router)) {
          try {
            console.warn('update refresh token...');
            await refetch(option.variables);
          } catch (error) {
            console.warn('secondError: ', error);
          }
        }
      }
    }
  } else {
    try {
      const data = await refetch(option.variables);
    } catch (error) {
      console.error('catch error in requestDataWithHandleUnauthorized.ts...', error);
      if (error?.graphQLErrors?.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
        if (await handleUnauthorized(refreshToken, router)) {
          try {
            console.warn('update refresh token...');
            await refetch(option.variables);
          } catch (error) {
            console.warn('secondError: ', error);
          }
        }
      }
    }
    
  }
  
}