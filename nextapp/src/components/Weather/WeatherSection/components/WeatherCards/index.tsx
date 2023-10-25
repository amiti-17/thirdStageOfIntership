import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { PlacesContext } from "../../../../../Contexts/placesContext";
import { LocationType, locations as apolloLocations } from "Apollo/queries/locations";
import { useMutation, useSubscription } from "@apollo/client";
import { CurrentQueryContext } from "Contexts/currentQueryContext";
import { WeatherCard } from "./components/weatherCard";
import CircularIndeterminate from "components/CircularIndeterminate";

export function WeatherCards() {

  const [ locations, setLocations ] = useState<LocationType[]>([]);
  const { setCurrentMutation } = useContext(CurrentQueryContext);
  const { places, setPlaces } = useContext(PlacesContext);
  const [ 
    getLocation, 
    { error: locationError, loading: locationLoading, data: locationData }
  ] = useMutation( // TODO: think about rewrite into smaller queries by principe CRUD...
    apolloLocations.updateUsersInfoAndGetWeather,
    {
      onCompleted(data) {
        setLocations(data.updateUsersLocations);
      },
    }
  );

  const { data, loading } = useSubscription(apolloLocations.onLocationAdded, {
    onData(options) {
      setPlaces(prev => {
        console.log(options.data);
        if (prev.find(el => el.lat === options.data?.data.locationAdded.lat && el.lon === options.data?.data.locationAdded.lon)) {
          return prev;
        }
        const newPlaces = [...prev];
        newPlaces.push(options.data?.data.locationAdded);
        return newPlaces;
      })
    },
  });

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
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      {
        locationLoading ?
          <CircularIndeterminate /> :
          locations.map(location => <WeatherCard key={location.id} location={location} />)
      }
    </Box>
  )
}