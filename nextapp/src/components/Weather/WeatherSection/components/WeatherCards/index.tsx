import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { PlacesContext } from "../../../../../Contexts/placesContext";
import { getNameOfPlace } from "../../../../../functions/places/getNameOfPlace";
import { LocationType, locations as apolloLocations } from "../../../../../../Apollo/locations";
import { LazyQueryHookExecOptions, useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { auth } from "../../../../../../Apollo/auth";
import { handleUnauthorized } from "../../../../../functions/fetch/requestDataWithHandleUnauthorized";
import CustomError from "../../../../../CustomError";
import { CurrentQueryContext } from "../../../../../Contexts/currentQueryContext";

export function WeatherCards() {

  // const [ 
  //   refreshToken, 
  //   { error: refreshTokenError, loading: refreshTokenLoading, data: refreshTokenData } 
  // ] = useMutation(auth.refreshToken);
  // const router = useRouter();
  const [ getLocation, { error: locationError, loading: locationLoading, data: locationData, refetch: locationRefetch }] = useLazyQuery(apolloLocations.getByCoordinates);
  const [ locations, setLocations ] = useState<LocationType[]>([]);
  const { places } = useContext(PlacesContext);
  const { setCurrentQuery } = useContext(CurrentQueryContext);
  const customError = new CustomError('');
  let options: LazyQueryHookExecOptions;

  useEffect(() => {
    console.log('locationData: ', locationData);
    console.log('locationLoading: ', locationLoading);
    console.log('locationError: ', locationError);
    if (locationData) {
      setLocations(prev => [locationData.locationByCoordinates, ...prev]);
    }
    
  }, [locationData])

  useEffect(() => {
    console.log('locations: ', locations);
  }, [locations])

  useEffect(() => {

    if (places) {
      console.log('current new places: ', places);
      setLocations(prev => [...prev.filter(location => places.find(place => place.lat === location.lat && place.lon === location.lon))]);
      places
        .filter(place => !locations.find(location => location.lat === place.lat && location.lon === place.lon))
        .forEach(place => {
          options = {
            variables: {
              coordinates: {
                lat: place.lat, 
                lon: place.lon,
              }
            }
          };
          setCurrentQuery({
            query: getLocation,
            option: options,
            error: locationError,
            refetch: locationRefetch,
          })
        // getLocation(options);
      });
    }
    
  }, [places]);

  useEffect(() => {
    if ( locationError ) {
      console.log('location error: ', locationError);
      // TODO: check for unauthorized...
    }
    
    // console.log({currentUserData});
    // console.log({currentUserError});
  }, [locationError]);


  return (
    <Box>
      {places.map(el => <Box key={[el.lat, el.lon].join(',')}>{getNameOfPlace(el)} {el.lat} {el.lon}</Box>)}
    </Box>
  )
}