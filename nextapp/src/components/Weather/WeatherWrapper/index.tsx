import React from 'react';
import { Stack } from "@mui/system";
import { SearchBar } from "./components/SearchBar";
import { WeatherCards } from "./components/WeatherCards";

export function WeatherWrapper() {

  return (
    <Stack
      direction='column'
      gap='30px'
      component='section'
    >
      <SearchBar />
      <WeatherCards />
    </Stack>
  )
}