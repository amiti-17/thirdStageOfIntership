import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { PlacesContext } from "Contexts/placesContext";
import { locations as apolloLocations } from "Apollo/queries/locations";
import { useSubscription } from "@apollo/client";
import { WeatherCard } from "./components/weatherCard";
import { UserContext } from "Contexts/userContext";

export function WeatherCards() {

  // const [ locations, setLocations ] = useState<LocationType[]>([]);
  const { places, setPlaces } = useContext(PlacesContext);
  const { user } = useContext(UserContext);

  const { data: locationAdded } = useSubscription(apolloLocations.onLocationAdded, {
    variables: { input: user.id },
    onData(options) {
      console.log('location added: ', options);
      setPlaces(prev => {
        if (prev.find(el => el.id === options.data?.data.locationAdded.id)) {
          return prev;
        }
        const newPlaces = [ ...prev ];
        newPlaces.push(options.data?.data.locationAdded);
        return newPlaces;
      })
    },
  });

  const { data: locationRemoved } = useSubscription(apolloLocations.onLocationRemoved, {
    variables: { input: user.id },
    onData(options) {
      console.log('location removed', options);
      setPlaces(prev => {
        console.log(...prev.filter(el => !(el.id === options.data?.data.locationRemoved.id)))
        return [ ...prev.filter(el => !(el.id === options.data?.data.locationRemoved.id)) ];
      })
    },
  })

  useEffect(() => {
    console.log(places);
  }, [places]);

  return (
    <Box
      sx={{
        width: '90%',
        mx: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      { places.map(place => <WeatherCard key={place.id} place={place} />) }
      { !places[0]?.name && ('Try to add any of places') }
    </Box>
  )
}