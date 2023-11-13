import React, { useContext, useEffect, useState } from "react";
import { PlacesContext } from "Contexts/placesContext";
import { UserContext } from "Contexts/userContext";
import CircularIndeterminate from "components/Common/CircularIndeterminate";
import { WeatherWrapper } from "components/Weather/WeatherWrapper";
import { WeatherLayout } from "components/Weather/WeatherLayout";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { useQuery } from "@apollo/client";
import { users } from "Apollo/queries/users";

export default function WeatherPage() {
  
  const { user, setUser } = useContext(UserContext);
  const [ places, setPlaces ] = useState<LocationFetchedFromSearchString[]>([]);

  useQuery(users.getCurrentUser, {
    fetchPolicy: 'network-only',
    onCompleted(data) {
      if (data?.getCurrentUser.email &&  user?.email !== data?.getCurrentUser.email) {
        setUser(data?.getCurrentUser);
      }
    },
  });

  useEffect(() => {
    if (user?.email) {
      setPlaces(user?.locations);
    }
  }, [user]);

  return (
    <WeatherLayout>
      <PlacesContext.Provider value={{places, setPlaces}}>
        { !user && <CircularIndeterminate /> }
        { user && <WeatherWrapper /> }
      </PlacesContext.Provider>
    </WeatherLayout>
  );
}