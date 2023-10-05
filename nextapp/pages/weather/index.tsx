import React, { useEffect } from "react";
import { WeatherLayout } from "../../src/components/Weather/WeatherLayout";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SafeUserType, users } from "../../Apollo/users";
import CustomError from "../../src/CustomError";
import { useRouter } from "next/router";
import { Header } from "../../src/components/Weather/Header";
import CircularIndeterminate from "../../src/components/CircularIndeterminate";
import { WeatherSection } from "../../src/components/Weather/WeatherSection";
import { CurrentUserContext } from "../../src/Contexts/currentUserContext";
import { auth } from "../../Apollo/auth";
import { requestDataWithHandleUnauthorized } from "../../src/functions/fetch/requestDataWithHandleUnauthorized";

const customError = new CustomError('');

export default function Login() {
  // const [ shouldUpdateRefreshToken, setShouldUpdateRefreshToken ] = React.useState(false);
  const [ 
    getCurrentUser, 
    { data: currentUserData, error: currentUserError, loading: currentUserLoading } 
  ] = useLazyQuery(users.getCurrentUser);
  const [ 
    refreshToken, 
    { error: refreshTokenError, loading: refreshTokenLoading, data: refreshTokenData } 
  ] = useMutation(auth.refreshToken);
  const [ currentUser, setCurrentUser ] = React.useState<SafeUserType>();
  const router = useRouter();

  useEffect(() => {
    setCurrentUser(currentUserData?.getCurrentUser)
  }, [currentUserData])

  useEffect(() => {
    requestDataWithHandleUnauthorized(
      getCurrentUser,
      currentUserError,
      refreshToken,
      refreshTokenError,
      router
    );
    console.log({currentUserData});
    console.log({currentUserError});
  }, [currentUserError]);

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
      {/* <RefreshTokenContext.Provider value={{ shouldUpdateRefreshToken, setShouldUpdateRefreshToken }}> */}
        {
          currentUserLoading || currentUserError || !currentUser ? 
            <CircularIndeterminate /> : 
            <CurrentUserContext.Provider value={currentUser}>
              <Header />
              <WeatherSection />
            </CurrentUserContext.Provider>
        }
      {/* </RefreshTokenContext.Provider> */}
    </WeatherLayout>
  );
}
