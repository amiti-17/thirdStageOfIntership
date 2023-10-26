import React, { useContext, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SafeUserType, users } from "Apollo/queries/users";
import { useRouter } from "next/router";
import CircularIndeterminate from "components/CircularIndeterminate";
import { WeatherSection } from "components/Weather/WeatherSection";
import { CurrentUserContext } from "Contexts/currentUserContext";
import { handleUnauthorizedMutation, handleUnauthorizedQuery } from "functions/fetch/requestDataWithHandleUnauthorized";
import { RefreshTokenContext } from "Contexts/refreshTokenContext";
import { CurrentQueryContext, LazyQueryObjType, MutationObjType } from "Contexts/currentQueryContext";
import { WeatherLayout } from "components/Weather/WeatherLayout";
import { Header } from "components/Header";
import { auth } from "Apollo/queries/auth";
import { LocationFetchedFromSearchString } from "config/system/types/locations";
import { PlacesContext } from "Contexts/placesContext";
import { LoginMsgContext } from "Contexts/loginMsgContext";

export default function WeatherPage() {
  
  const { user } = useContext(CurrentUserContext);
  const [ places, setPlaces ] = useState<LocationFetchedFromSearchString[]>([]);
  const [ shouldUpdateRefreshToken, setShouldUpdateRefreshToken ] = React.useState(false);
  const [ currentQuery, setCurrentQuery ] = React.useState<LazyQueryObjType>();
  const [ currentMutation, setCurrentMutation ] = React.useState<MutationObjType>();
  
  useEffect(() => {
    if (user?.email) {
      setPlaces(user?.locations);
    }
  }, [user]);

  return (
    <WeatherLayout>
      <RefreshTokenContext.Provider value={{ shouldUpdateRefreshToken, setShouldUpdateRefreshToken }}>
        <CurrentQueryContext.Provider value={{
          currentQuery, setCurrentQuery,
          currentMutation, setCurrentMutation,
        }}>
          <PlacesContext.Provider value={{places, setPlaces}}>
            { !user && <CircularIndeterminate /> }
            { user && <WeatherSection /> }
          </PlacesContext.Provider>
        </CurrentQueryContext.Provider>
      </RefreshTokenContext.Provider>
    </WeatherLayout>
  );
}