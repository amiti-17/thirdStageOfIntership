import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { PlacesContext } from "../../../../../Contexts/placesContext";
import { LocationType, locations as apolloLocations } from "Apollo/locations";
import { useMutation } from "@apollo/client";
import { CurrentQueryContext } from "../../../../../Contexts/currentQueryContext";
import { WeatherCard } from "./components/weatherCard";

export function WeatherCards() {

  const [ locations, setLocations ] = useState<LocationType[]>([]);
  const { setCurrentMutation } = useContext(CurrentQueryContext);
  const { places } = useContext(PlacesContext);
  const [ 
    getLocation, 
    { error: locationError, loading: locationLoading, data: locationData }
  ] = useMutation( // TODO: think about rewrite into queries...
    apolloLocations.updateUsersInfoAndGetWeather, 
    { 
      onCompleted(data) {
        console.log('completedData', data);
        setLocations(data.updateUsersLocations);
      },
    }
  );

  useEffect(() => {
    console.log('locationError : ', locationError);
  }, [locationError]);

  useEffect(() => {
    console.log('locations: ', locations);
  }, [locations]);

  useEffect(() => {
    console.log('renew places: ', places);
    const myPlaces = places.map(place => {
      const { local_names, ...others } = place;
      return others;
    });
    console.log('renews myPlaces: ', myPlaces)
    // if (myPlaces[0]) {
      setCurrentMutation({
        mutation: getLocation,
        option: {
          variables: {
            input: myPlaces.map(el => {
              return {
                name: el.name,
                state: el.state,
                country: el.country,
                lat: el.lat,
                lon: el.lon,
              }
            }),
          },
        },
        error: locationError,
      });
    // }
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
      {places && locations.map(location => <WeatherCard location={location} />)}
    </Box>
  )
}