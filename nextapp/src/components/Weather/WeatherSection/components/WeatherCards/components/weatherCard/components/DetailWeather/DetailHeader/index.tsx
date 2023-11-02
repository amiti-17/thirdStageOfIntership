import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { ShowCurrentTempWithIcon } from "./components/ShowCurrentTempWithIcon";
import { Name } from "./components/Name";
import { ShowTemperature } from "../../ShowTemperature";
import { Box } from "@mui/material";

export function DetailHeader({ place, weather }: { place: LocationFetchedFromSearchString, weather: { weather: ({ icon: string, description: string })[], temp: number }}) {

  const { description, icon } = weather.weather[0];
  return (
    <>
      <Name place={ place } description={ description } />
      <ShowCurrentTempWithIcon icon={icon} temp={weather.temp} summary={description}/>
    </>
    
  )
}