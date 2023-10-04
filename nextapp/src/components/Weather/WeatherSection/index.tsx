import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../Contexts/currentUserContext";
import { Box } from "@mui/system";
import { Search } from "./components/Search";
import { WeatherCards } from "./components/WeatherCards";
import { PlacesContext } from "../../../Contexts/placesContext";
import { LocationType } from "../../../../Apollo/locations";
import { RefreshTokenContext } from "../../../Contexts/refreshTokenContext";
import React from 'react';
import CustomError from "../../../CustomError";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { auth } from "../../../../Apollo/auth";

export function WeatherSection() {
  const { email } = useContext(CurrentUserContext);
  const [ places, setPlaces ] = useState<LocationType[]>([]); // TODO: rewrite it to fetched array with locations of current user...

  return (
    <PlacesContext.Provider value={{places, setPlaces}}>
      <Box component='section'>
        <Search />
        <WeatherCards />
        {email}
      </Box>
    </PlacesContext.Provider>
  )
}