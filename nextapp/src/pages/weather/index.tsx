import React, { useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SafeUserType, users } from "Apollo/users";
import { useRouter } from "next/router";
import CircularIndeterminate from "components/CircularIndeterminate";
import { WeatherSection } from "components/Weather/WeatherSection";
import { CurrentUserContext } from "Contexts/currentUserContext";
import { handleUnauthorized, handleUnauthorizedMutation, handleUnauthorizedQuery } from "functions/fetch/requestDataWithHandleUnauthorized";
import { RefreshTokenContext } from "Contexts/refreshTokenContext";
import { CurrentQueryContext, LazyQueryObjType, MutationObjType } from "Contexts/currentQueryContext";
import { WeatherLayout } from "components/Weather/WeatherLayout";
import { Header } from "components/Weather/Header";
import { auth } from "Apollo/auth";
import CustomError from "CustomError";

const customError = new CustomError('');

export default function Login() {
  
  const [ shouldUpdateRefreshToken, setShouldUpdateRefreshToken ] = React.useState(false);
  const [ 
    getCurrentUser, 
    { data: currentUserData, error: currentUserError, loading: currentUserLoading, refetch } 
  ] = useLazyQuery(users.getCurrentUser); //, {fetchPolicy: "network-only"}
  const [ refreshToken ] = useMutation(auth.refreshToken);
  const [ currentUser, setCurrentUser ] = React.useState<SafeUserType>();
  const [ currentQuery, setCurrentQuery ] = React.useState<LazyQueryObjType>();
  const [ currentMutation, setCurrentMutation ] = React.useState<MutationObjType>();
  const router = useRouter();

  useEffect(() => {
    if (!currentUserData && !currentUserLoading) {
      setCurrentQuery({ query: getCurrentUser, error: currentUserError, refetch });
    }
  }, []);

  useEffect(() => {
    if (currentUserData) {
      setCurrentUser(currentUserData?.getCurrentUser)
    }
  }, [currentUserData]);

  useEffect(() => {
    if (currentQuery) {
      console.log('received new current query: ', currentQuery);
      handleUnauthorizedQuery(
        refreshToken,
        router,
        currentQuery.query,
        currentQuery.refetch,
        currentQuery.error,
        currentQuery.option
      );
      setCurrentQuery(null);
    }
  }, [currentQuery]);

  useEffect(() => {
    if (currentMutation) {
      console.log('received new current mutation: ', currentMutation);
      handleUnauthorizedMutation(
        refreshToken, router,
        currentMutation.mutation,
        currentMutation.error,
        currentMutation.option,
      )
      setCurrentMutation(null);
    }
  })

  // useEffect(() => {
  //   setCurrentUser(currentUserData?.getCurrentUser)
  // }, [currentUserData]);

  // useEffect(() => {
  //   requestDataWithHandleUnauthorized(
  //     getCurrentUser,
  //     currentUserError,
  //     refreshToken,
  //     refreshTokenError,
  //     router
  //   );
  //   console.log({currentUserData});
  //   console.log({currentUserError});
  // }, [currentUserError]);

  // React.useEffect(() => {
  //   getQueryAndHandleError(getCurrentUser, currentUserData, currentUserError, router, shouldUpdateRefreshToken, setShouldUpdateRefreshToken);
  //   // console.log(data?.getCurrentUser);
  //   if (currentUserData?.getCurrentUser) {
  //     setCurrentUser(currentUserData?.getCurrentUser);
  //     console.log({currentUserLoading});
  //     console.log({currentUserError});
  //     console.log(currentUserData);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!refreshTokenLoading) {
  //     console.log("refresh token: ", shouldUpdateRefreshToken);
  //     console.log("refresh token error: ", error);
  //     console.log("refresh token loading: ", refreshTokenLoading);
  //     console.log("refresh token data: ", refreshTokenData);
  //     refreshToken().catch(e => {
  //       console.log("something unclear", e);
  //       if (error && error.graphQLErrors.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
  //         console.log(error);
  //         router.replace('/'); //TODO: make some alert, that credential was expired.
  //       }
  //     });
  //     // router.replace('/weather');
  //   }
  // }, [setShouldUpdateRefreshToken, error]);

  return (
    <WeatherLayout>
      <RefreshTokenContext.Provider value={{ shouldUpdateRefreshToken, setShouldUpdateRefreshToken }}>
        <CurrentQueryContext.Provider value={{ 
          currentQuery, setCurrentQuery,
          currentMutation, setCurrentMutation,
        }}>
          {
            currentUserLoading || currentUserError || !currentUser ? 
              <CircularIndeterminate /> : 
              <CurrentUserContext.Provider value={currentUser}>
                <Header />
                <WeatherSection />
              </CurrentUserContext.Provider>
          }
        </CurrentQueryContext.Provider>
      </RefreshTokenContext.Provider>
    </WeatherLayout>
  );
}
