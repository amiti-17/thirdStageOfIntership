import React, { useContext, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SafeUserType, users } from "Apollo/users";
import { useRouter } from "next/router";
import CircularIndeterminate from "components/CircularIndeterminate";
import { WeatherSection } from "components/Weather/WeatherSection";
import { CurrentUserContext } from "Contexts/currentUserContext";
import { handleUnauthorizedMutation, handleUnauthorizedQuery } from "functions/fetch/requestDataWithHandleUnauthorized";
import { RefreshTokenContext } from "Contexts/refreshTokenContext";
import { CurrentQueryContext, LazyQueryObjType, MutationObjType } from "Contexts/currentQueryContext";
import { WeatherLayout } from "components/Weather/WeatherLayout";
import { Header } from "components/Weather/Header";
import { auth } from "Apollo/auth";
import { LocationFetchedFromSearchString } from "config/system/types/locations";
import { PlacesContext } from "Contexts/placesContext";
import { LoginMsgContext } from "Contexts/loginMsgContext";

export default function WeatherPage() {
  
  const { setInfoMsg } = useContext(LoginMsgContext);
  const [ places, setPlaces ] = useState<LocationFetchedFromSearchString[]>([]);
  const [ shouldUpdateRefreshToken, setShouldUpdateRefreshToken ] = React.useState(false);
  const [
    getCurrentUser,
    { data: currentUserData, error: currentUserError, loading: currentUserLoading, refetch }
  ] = useLazyQuery(users.getCurrentUser);
  const [ refreshToken ] = useMutation(auth.refreshToken);
  const [ currentUser, setCurrentUser ] = React.useState<SafeUserType>();
  const [ currentQuery, setCurrentQuery ] = React.useState<LazyQueryObjType>();
  const [ currentMutation, setCurrentMutation ] = React.useState<MutationObjType>();
  const router = useRouter();

  useEffect(() => {
    if (!currentUserData && !currentUserLoading) {
      getCurrentUser();
      // setCurrentQuery({ query: getCurrentUser, error: currentUserError, refetch });
    }
  }, []);
  
  useEffect(() => {
    console.log(currentUserData);
    console.log({currentUserError});
    console.log({currentUserLoading});
    if (currentUserData) {
      setCurrentUser(currentUserData?.getCurrentUser);
      setPlaces(currentUserData?.getCurrentUser.locations);
    }
  }, [currentUserData, currentUserError, currentUserLoading]);

  useEffect(() => {
    if (currentQuery) {
      handleUnauthorizedQuery(
        refreshToken,
        router,
        setInfoMsg,
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
      handleUnauthorizedMutation(
        refreshToken,
        router,
        setInfoMsg,
        currentMutation.mutation,
        currentMutation.error,
        currentMutation.option,
      )
      setCurrentMutation(null);
    }
  }, [currentMutation]);

  return (
    <WeatherLayout>
      <RefreshTokenContext.Provider value={{ shouldUpdateRefreshToken, setShouldUpdateRefreshToken }}>
        <CurrentQueryContext.Provider value={{
          currentQuery, setCurrentQuery,
          currentMutation, setCurrentMutation,
        }}>
          <PlacesContext.Provider value={{places, setPlaces}}>
            {
              currentUserLoading || currentUserError || !currentUser ?
                <CircularIndeterminate /> : 
                <CurrentUserContext.Provider value={currentUser}>
                  <Header />
                  <WeatherSection />
                </CurrentUserContext.Provider>
            }
          </PlacesContext.Provider>
          
        </CurrentQueryContext.Provider>
      </RefreshTokenContext.Provider>
    </WeatherLayout>
  );
}