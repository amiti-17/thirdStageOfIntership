import { useContext } from "react";
import { CurrentUserContext } from "../../../Contexts/currentUserContext";
import { Box } from "@mui/system";
import { SearchBar } from "./components/SearchBar";
import { WeatherCards } from "./components/WeatherCards";
import React from 'react';

export function WeatherSection() {
  
  const { email } = useContext(CurrentUserContext);

  return (
      <Box component='section'>
        <SearchBar />
        <WeatherCards />
        {email}
      </Box>
  )
}