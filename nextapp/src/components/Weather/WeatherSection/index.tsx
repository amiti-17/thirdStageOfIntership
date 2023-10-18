import { Stack } from "@mui/system";
import { SearchBar } from "./components/SearchBar";
import { WeatherCards } from "./components/WeatherCards";
import React from 'react';

export function WeatherSection() {

  return (
      <Stack 
        direction='column'
        gap='10px'
        component='section'
      >
        <SearchBar />
        <WeatherCards />
      </Stack>
  )
}