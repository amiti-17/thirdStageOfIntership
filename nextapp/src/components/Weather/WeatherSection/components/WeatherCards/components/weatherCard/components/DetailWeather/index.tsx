import { Box } from "@mui/material";
import style from "./style.module.css";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { Weather } from "config/system/types/Weather";
import { DetailHeader } from "./DetailHeader";
import { DetailMain } from "./DetailMain";
import { DetailFooter } from "./DetailFooter";

export function DetailWeather({ weather, place }: { weather: Weather, place: LocationFetchedFromSearchString }) {

  const { getWeather } = weather;
  const current = JSON.parse(getWeather.current.current);
  console.log(getWeather, place);

  return (
    <Box className={style.weatherCard}>
      <DetailHeader place={place} weather={current}/>
      <DetailMain current={current} />
      <DetailFooter days={getWeather.days} />
    </Box>
  )
}