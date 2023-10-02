import React, { useContext, useEffect } from "react";
import { WeatherLayout } from "../../src/components/Weather/WeatherLayout";
import { useLazyQuery } from "@apollo/client";
import { SafeUserType, users } from "../../Apollo/users";
import CustomError from "../../src/CustomError";
import { RefreshTokenContext } from "../../src/Contexts/refreshTokenContext";
import { useRouter } from "next/router";
import { handleErrorInQueries } from "../../src/functions/fetch/handleErrorsInQueries";
import { Header } from "../../src/components/Weather/Header";
import CircularIndeterminate from "../../src/components/CircularIndeterminate";
import { WeatherSection } from "../../src/components/Weather/WeatherSection";
import { CurrentUserContext } from "../../src/Contexts/currentUserContext";

const customError = new CustomError('');

export default function Login() {
  const [getCurrentUser, {data, error: currentUserError, loading}] = useLazyQuery(users.getCurrentUser);
  const [ currentUser, setCurrentUser ] = React.useState<SafeUserType>();
  const { shouldUpdateRefreshToken, setShouldUpdateRefreshToken } = useContext(RefreshTokenContext);
  const router = useRouter();
    
  React.useEffect(() => {
    getCurrentUser();
  }, [data]);

  React.useEffect(() => {
    handleErrorInQueries(getCurrentUser, data, currentUserError, router, shouldUpdateRefreshToken, setShouldUpdateRefreshToken);
    // console.log(data?.getCurrentUser);
    if (data?.getCurrentUser) {
      setCurrentUser(data?.getCurrentUser);
      // console.log(currentUser)
    }
  }, [currentUserError, data]);

  return (
    <WeatherLayout>
      {
        loading || currentUserError || !data?.getCurrentUser ? 
          <CircularIndeterminate /> : 
          <CurrentUserContext.Provider value={data.getCurrentUser}>
            <Header />
            <WeatherSection />
          </CurrentUserContext.Provider>
      }
    </WeatherLayout>
  );
}
