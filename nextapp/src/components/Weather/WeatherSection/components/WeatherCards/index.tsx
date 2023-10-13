import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { PlacesContext } from "../../../../../Contexts/placesContext";
import { getNameOfPlace } from "../../../../../functions/places/getNameOfPlace";
import { LocationType, locations as apolloLocations } from "Apollo/locations";
import { LazyQueryHookExecOptions, useMutation } from "@apollo/client";
import { CurrentQueryContext } from "../../../../../Contexts/currentQueryContext";

export function WeatherCards() {

  // const [ 
  //   refreshToken, 
  //   { error: refreshTokenError, loading: refreshTokenLoading, data: refreshTokenData } 
  // ] = useMutation(auth.refreshToken);
  // const router = useRouter();
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
  // let options: LazyQueryHookExecOptions;

  // useEffect(() => {
  //   console.log('locationData: ', locationData);
  //   console.log('locationLoading: ', locationLoading);
  //   console.log('locationError: ', locationError);
  //   if (locationData) {
  //     setLocations(prev => [locationData.locationByCoordinates, ...prev]);
  //   }
  // }, [locationData])

  useEffect(() => {
    console.log('locations: ', locations);
  }, [locations]);

  useEffect(() => {
    console.log('renew places: ', places);
    const myPlaces = places.map(place => {
      const { local_names, ...others } = place;
      return others;
    })
    if (places) {
      setCurrentMutation({
        mutation: getLocation,
        option: {
          variables: {
            input: myPlaces,
          },
        },
        error: locationError,
      });
    }
  }, [places]);

  // useEffect(() => {

  //   if (places) {
  //     console.log('current new places: ', places);
  //     setLocations(prev => [...prev.filter(location => places.find(place => place.lat === location.lat && place.lon === location.lon))]);
  //     places
  //       .filter(place => !locations.find(location => location.lat === place.lat && location.lon === place.lon))
  //       .forEach(place => {
  //         const { local_names, ...myPlace } = place;
  //         options = {
  //           variables: {
  //             coordinates: myPlace,
  //           }
  //         };
  //         setCurrentQuery({
  //           query: getLocation,
  //           option: options,
  //           error: locationError,
  //           refetch: locationRefetch,
  //         })
  //       // getLocation(options);
  //     });
  //   }
    
  // }, [places]);

  // useEffect(() => {
  //   if ( locationError ) {
  //     console.warn('location error: ', locationError);
  //   }
  // }, [locationError]);


  return (
    <Box>
      {places.map(el => <Box key={[el.lat, el.lon].join(',')}>{getNameOfPlace(el)} {el.lat} {el.lon}</Box>)}
    </Box>
  )
}