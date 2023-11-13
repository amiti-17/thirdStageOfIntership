import React from "react";
import { WeatherLayoutWrapper } from "./styled/WeatherLayoutWrapper";

export function WeatherLayout({ children } : { children: React.ReactNode }): JSX.Element {

  return (
    <WeatherLayoutWrapper>
        {children}
    </WeatherLayoutWrapper>
  )
}