import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../Contexts/currentUserContext";
import { Box } from "@mui/system";
import { SearchBar } from "./components/SearchBar";
import { WeatherCards } from "./components/WeatherCards";
import { PlacesContext } from "../../../Contexts/placesContext";
import React from 'react';
import { LocationFetchedFromSearchString } from "../../../config/system/types/locations";
import { UserContext } from "@auth0/nextjs-auth0/client";

export function WeatherSection() {
  // const currentUser = useContext(CurrentUserContext)
  const { email } = useContext(CurrentUserContext);
  const [ places, setPlaces ] = useState<LocationFetchedFromSearchString[]>([]); // TODO: rewrite it to fetched array with locations of current user...

  // async function updateUsersPlaces(newPlaces) {

  // }

  return (
    <PlacesContext.Provider value={{places, setPlaces}}>
      <Box component='section'>
        <SearchBar />
        <WeatherCards />
        {email}
      </Box>
    </PlacesContext.Provider>
  )
}