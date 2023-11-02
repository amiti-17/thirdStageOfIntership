import { Box } from "@mui/material";
import style from "./style.module.css";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { Weather } from "config/system/types/Weather";
import { DetailHeader } from "./DetailHeader";
import { DetailMain } from "./DetailMain";
import { DetailFooter } from "./DetailFooter";

export function DetailWeather({ weather, place }: { weather: Weather, place: LocationFetchedFromSearchString }) {

  const current = JSON.parse(weather.current.current);

  return (
    <Box className={style.weatherCard}>
      <DetailHeader place={place} weather={current}/>
      <DetailMain current={current} />
      <DetailFooter days={weather.days} />
    </Box>
  )
}