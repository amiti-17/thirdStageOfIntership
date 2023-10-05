import { NextRouter, useRouter } from "next/router";
import CustomError from "../../CustomError";
import {
  ApolloError, 
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

export async function handleUnauthorized(
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