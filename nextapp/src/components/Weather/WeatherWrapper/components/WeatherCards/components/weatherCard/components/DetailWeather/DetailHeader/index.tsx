import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { ShowCurrentTempWithIcon } from "./components/ShowCurrentTempWithIcon";
import { Name } from "./components/Name";

type DetailHeaderType = {
  place: LocationFetchedFromSearchString,
  weather: {
    weather: ({ icon: string, description: string })[],
    temp: number
  },
}

export function DetailHeader({ place, weather }: DetailHeaderType) {

  const { description } = weather.weather[0];
  return (
    <>
      <Name place={ place } description={ description } />
    </>
  )
}