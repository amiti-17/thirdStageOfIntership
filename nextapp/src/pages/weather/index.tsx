import React, { useContext, useEffect, useState } from "react";
import CircularIndeterminate from "components/CircularIndeterminate";
import { WeatherSection } from "components/Weather/WeatherSection";
import { UserContext } from "Contexts/userContext";
import { RefreshTokenContext } from "Contexts/refreshTokenContext";
import { CurrentQueryContext, LazyQueryObjType, MutationObjType } from "Contexts/currentQueryContext";
import { WeatherLayout } from "components/Weather/WeatherLayout";
import { LocationFetchedFromSearchString } from "config/system/types/locations";
import { PlacesContext } from "Contexts/placesContext";

export default function WeatherPage() {
  
  const { user } = useContext(UserContext);
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