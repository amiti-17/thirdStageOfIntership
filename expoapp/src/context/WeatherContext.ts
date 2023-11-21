import { LocationType } from "config/system/types/Locations";
import { Dispatch, SetStateAction, createContext } from "react";

export type WeatherContextType = {
  locations: LocationType[],
  setLocations: Dispatch<SetStateAction<LocationType[]>>,
}

export const defaultWeatherContextObj: WeatherContextType = {
  locations: [],
  setLocations: () => {},
}

export const WeatherContext = createContext<WeatherContextType>(defaultWeatherContextObj)