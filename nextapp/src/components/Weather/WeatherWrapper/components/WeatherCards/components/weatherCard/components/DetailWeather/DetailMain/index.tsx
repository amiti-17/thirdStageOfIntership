import { DetailListStyled } from "./styled/DetailListStyled";
import { ShowCurrentTempWithIcon } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailWeather/DetailHeader/components/ShowCurrentTempWithIcon";
import { DetailedList } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailedList";

export function DetailMain({ current }: { current }) {

  const { description, icon } = current.weather[0];
  return (
    <DetailListStyled>
      <ShowCurrentTempWithIcon icon={icon} temp={current.temp} summary={description} />
      <DetailedList weather={current} />
    </DetailListStyled>
  )
}