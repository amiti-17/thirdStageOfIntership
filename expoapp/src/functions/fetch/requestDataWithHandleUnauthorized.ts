import { NextRouter } from "next/router";
import CustomError from "../../CustomError";
import {
  ApolloError, 
  ApolloQueryResult, 
  LazyQueryExecFunction, 
  LazyQueryHookExecOptions, 
  MutationFunction, 
  OperationVariables
} from "@apollo/client";
import { SetStateAction } from "react";
import { localStorageKeys } from "config/system/localStorage";

const customError = new CustomError('');

export async function requestDataWithHandleUnauthorized( // Deprecated
  currentRequest: LazyQueryExecFunction<any, OperationVariables>, 
  currentUserError: ApolloError, 
  refreshToken: MutationFunction,
  refreshTokenError: ApolloError,
  router: NextRouter,
  setInfoMsg,
  options?: LazyQueryHookExecOptions,
) {
  try {
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
      if (await handleUnauthorized(refreshToken, router, setInfoMsg)) {
        try {
          console.warn('update access token...')
          await options ? currentRequest(options) : currentRequest();
        } catch (error) {
          console.warn('secondError: ', error);
        }
      }
    } else throw error;
  }
}

export async function handleUnauthorized (
  refreshToken: MutationFunction,
  router: NextRouter,
  setInfoMsg: React.Dispatch<SetStateAction<string>>,
): Promise<true> {
  try {
    await refreshToken();
    return true;
  } catch (error) {
    console.warn("something unclear refresh token error in weather/index.ts", error);
    if (error && error.graphQLErrors.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
      console.warn(error);
      localStorage.setItem(localStorageKeys.loginInfoMsg, CustomError.requiredLoginAgain);
      router.push('/');
    } else throw error;
  }
}

export async function handleUnauthorizedQuery(
  refreshToken: MutationFunction, 
  router: NextRouter,
  setInfoMsg: React.Dispatch<SetStateAction<string>>,
  query: LazyQueryExecFunction<any, any> | null,
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>,
  error: ApolloError,
  option: LazyQueryHookExecOptions = {}, 
) {
  if (query) {
    const data = await query(option);
    if (error || data.error?.graphQLErrors) {
      if (
        error?.message === customError.unauthorized || 
        error?.graphQLErrors?.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized ||
        data.error?.graphQLErrors?.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized
      ) {
        if (await handleUnauthorized(refreshToken, router, setInfoMsg)) {
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
        if (await handleUnauthorized(refreshToken, router, setInfoMsg)) {
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

export async function handleUnauthorizedMutation(
  refreshToken: MutationFunction, 
  router: NextRouter,
  setInfoMsg: React.Dispatch<SetStateAction<string>>,
  mutation: MutationFunction,
  error: ApolloError,
  option: OperationVariables = {},
  ) {
    if (mutation) {
      try {
        const data = await mutation(option);
      } catch (e) {
        if (e) {
          if (
            e?.message === customError.unauthorized || 
            e?.graphQLErrors?.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized
          ) {
            if (await handleUnauthorized(refreshToken, router, setInfoMsg)) {
              try {
                console.warn('update refresh token...');
                await mutation(option);
              } catch (error) {
                console.warn('secondError: ', error);
              }
            }
          }
        }
      }
    }
}