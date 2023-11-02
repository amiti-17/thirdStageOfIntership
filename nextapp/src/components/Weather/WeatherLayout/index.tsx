import React from "react";
import { WeatherContext } from "Contexts/weatherContext";
import { WeatherLayoutWrapper } from "./styled/WeatherLayoutWrapper";

export function WeatherLayout({ children } : { children: React.ReactNode }): JSX.Element {

  return (
    <WeatherContext.Provider value={{}}>
      <WeatherLayoutWrapper>
          {children}
      </WeatherLayoutWrapper>
    </WeatherContext.Provider>
  )
}