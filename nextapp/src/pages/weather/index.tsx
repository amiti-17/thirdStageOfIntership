import React, { useContext, useEffect, useState } from "react";
import { PlacesContext } from "Contexts/placesContext";
import { UserContext } from "Contexts/userContext";
import CircularIndeterminate from "components/CircularIndeterminate";
import { WeatherSection } from "components/Weather/WeatherSection";
import { WeatherLayout } from "components/Weather/WeatherLayout";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";

export default function WeatherPage() {
  
  const { user } = useContext(UserContext);
  const [ places, setPlaces ] = useState<LocationFetchedFromSearchString[]>([]);
  
  useEffect(() => {
    if (user?.email) {
      setPlaces(user?.locations);
    }
  }, [user]);

  return (
    <WeatherLayout>
      <PlacesContext.Provider value={{places, setPlaces}}>
        { !user && <CircularIndeterminate /> }
        { user && <WeatherSection /> }
      </PlacesContext.Provider>
    </WeatherLayout>
  );
}