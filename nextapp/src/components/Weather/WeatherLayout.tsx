import { Box } from "@mui/material";
import { WeatherContext } from "../../Contexts/weatherContext";
import Footer from "../Footer";
import React from "react";

export function WeatherLayout({ children } : { children: React.ReactNode }): JSX.Element {

  return (
    <WeatherContext.Provider value={{}}>
      <Box sx={{maxWidth: '1200px', mx: 'auto'}}>
          {children}
      </Box>
    </WeatherContext.Provider>
  )
}