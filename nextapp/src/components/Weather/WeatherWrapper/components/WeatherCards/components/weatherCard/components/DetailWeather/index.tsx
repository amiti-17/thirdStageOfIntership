import { memo } from "react";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { Weather } from "config/system/types/Weather";
import { DetailHeader } from "./DetailHeader";
import { DetailMain } from "./DetailMain";
import { DetailFooter } from "./DetailFooter";
import { DetailWeatherStyled } from "./styled/DetailWeatherStyled";

type DetailWeatherType = {
  weather: Weather,
  place: LocationFetchedFromSearchString,
}

export const DetailWeather = memo(({ weather, place }: DetailWeatherType) => {

  const current = JSON.parse(weather.current.current);

  return (
    <DetailWeatherStyled>
      <DetailHeader place={place} weather={current}/>
      <DetailMain current={current} />
      <DetailFooter days={weather.days} />
    </DetailWeatherStyled>
  )
})