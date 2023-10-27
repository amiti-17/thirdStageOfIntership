import { Box } from "@mui/material";
import React from "react";
import { WeatherContext } from "Contexts/weatherContext";
import style from "./style.module.css";

export function WeatherLayout({ children } : { children: React.ReactNode }): JSX.Element {

  return (
    <WeatherContext.Provider value={{}}>
      <Box className={style.weatherLayout}>
          {children}
      </Box>
    </WeatherContext.Provider>
  )
}