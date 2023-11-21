import { LocationType } from "config/system/types/Locations";
import { WeatherContext } from "context/WeatherContext";
import { ReactNode, useState } from "react";

export const WeatherProvider = ({ children }: { children: ReactNode }) => {

  const [ locations, setLocations ] = useState<LocationType[]>([]);

  return (
    <WeatherContext.Provider value={{ locations, setLocations }}>
      {children}
    </WeatherContext.Provider>
  )
}