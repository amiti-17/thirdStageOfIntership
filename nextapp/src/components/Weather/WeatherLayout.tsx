import { Box } from "@mui/material";
import { WeatherContext } from "../../Contexts/weatherContext";
import Footer from "../Footer";
import React from "react";
import { cssConstants } from "@/src/cssConstants";

export function WeatherLayout({ children } : { children: React.ReactNode }): JSX.Element {

  return (
    <WeatherContext.Provider value={{}}>
      <Box 
        sx={{
          maxWidth: cssConstants.maxPageWidth,
          mx: 'auto',
        }}
      >
          {children}
      </Box>
    </WeatherContext.Provider>
  )
}