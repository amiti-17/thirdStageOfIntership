import React, { useContext } from "react";
import { useSubscription } from "@apollo/client";
import { PlacesContext } from "Contexts/placesContext";
import { locations as apolloLocations } from "Apollo/queries/locations";
import { WeatherCard } from "./components/weatherCard";
import { UserContext } from "Contexts/userContext";
import { MyWeatherSection } from "./components/MyWeatherSection";

export function WeatherCards() {

  // const [ locations, setLocations ] = useState<LocationType[]>([]);
  const { places, setPlaces } = useContext(PlacesContext);
  const { user } = useContext(UserContext);

  const { data: locationAdded } = useSubscription(apolloLocations.onLocationAdded, {
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

  const { data: locationRemoved } = useSubscription(apolloLocations.onLocationRemoved, {
    variables: { input: user.id },
    onData(options) {
      setPlaces(prev => {
        return [ ...prev.filter(el => !(el.id === options.data?.data.locationRemoved.id)) ];
      })
    },
  });

  return (
    <MyWeatherSection>
      { places.map(place => <WeatherCard key={place.id} place={place} />) }
      { !places[0]?.name && ('Try to add any of places') }
    </MyWeatherSection>
  )
}