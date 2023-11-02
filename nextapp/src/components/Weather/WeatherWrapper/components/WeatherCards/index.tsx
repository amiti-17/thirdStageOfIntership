import React, { useContext } from "react";
import { useSubscription } from "@apollo/client";
import { PlacesContext } from "Contexts/placesContext";
import { locations as apolloLocations } from "Apollo/queries/locations";
import { WeatherCard } from "./components/weatherCard";
import { UserContext } from "Contexts/userContext";
import { WeatherCardsStyled } from "./styled/WeatherCardsStyled";

export function WeatherCards() {

  const { places, setPlaces } = useContext(PlacesContext);
  const { user } = useContext(UserContext);

  useSubscription(apolloLocations.onLocationAdded, {
    variables: { input: user.id },
    onData(options) {
      setPlaces(prev => {
        if (prev.find(el => el.id === options.data?.data.locationAdded.id)) {
          return prev;
        }
        return [options.data?.data.locationAdded, ...prev ];
      })
    },
  });

  useSubscription(apolloLocations.onLocationRemoved, {
    variables: { input: user.id },
    onData(options) {
      setPlaces(prev => {
        return [ ...prev.filter(el => !(el.id === options.data?.data.locationRemoved.id)) ];
      })
    },
  });

  return (
    <WeatherCardsStyled>
      { places.map(place => <WeatherCard key={place.id} place={place} />) }
      { !places[0]?.name && ('Try to add any of places') }
    </WeatherCardsStyled>
  )
}