import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { PlacesContext } from "../../../../../Contexts/placesContext";
import { LocationType, locations as apolloLocations } from "Apollo/queries/locations";
import { useMutation, useSubscription } from "@apollo/client";
import { CurrentQueryContext } from "Contexts/currentQueryContext";
import { WeatherCard } from "./components/weatherCard";
import CircularIndeterminate from "components/CircularIndeterminate";
import { CurrentUserContext } from "Contexts/currentUserContext";

export function WeatherCards() {

  // const [ locations, setLocations ] = useState<LocationType[]>([]);
  const { places, setPlaces } = useContext(PlacesContext);
  const { user } = useContext(CurrentUserContext);
  const [ 
    getLocation, 
    { error: locationError, loading: locationLoading, data: locationData }
  ] = useMutation(
    apolloLocations.updateUsersInfoAndGetWeather,
  );

  const { data: locationAdded } = useSubscription(apolloLocations.onLocationAdded, {
    variables: { input: user.id },
    onData(options) {
      console.log('location added: ', options);
      setPlaces(prev => {
        if (prev.find(el => el.id === options.data?.data.locationAdded.id)) { // lat === options.data?.data.locationAdded.lat && el.lon === options.data?.data.locationAdded.lon)) {
          return prev;
        }
        const newPlaces = [ ...prev ];
        newPlaces.push(options.data?.data.locationAdded);
        return newPlaces;
      })
    },
  });

  const {data: locationRemoved } = useSubscription(apolloLocations.onLocationRemoved, {
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
      {
        locationLoading ?
          <CircularIndeterminate /> :
          places.map(place => <WeatherCard key={place.id} place={place} />)
      }
    </Box>
  )
}