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
  const { places } = useContext(PlacesContext);
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
  const { data, loading } = useSubscription(apolloLocations.onLocationAdded);

  useEffect(() => {
    console.log('subscription loading: ', loading);
    console.log('subscription data: ', data);
  }, [data, loading]);

  // useEffect(() => {
  //   const myPlaces = places.map(place => {
  //     const { local_names, ...others } = place;
  //     return others;
  //   });
  //   setCurrentMutation({
  //     mutation: getLocation,
  //     option: {
  //       variables: {
  //         input: myPlaces.map(el => {
  //           return {
  //             name: el.name,
  //             state: el.state,
  //             country: el.country,
  //             lat: el.lat,
  //             lon: el.lon,
  //           }
  //         }),
  //       },
  //     },
  //     error: locationError,
  //   });
  // }, [places]);

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