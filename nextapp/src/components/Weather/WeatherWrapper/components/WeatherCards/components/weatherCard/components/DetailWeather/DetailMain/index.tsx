import { DetailedList } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailedList";
import { DetailListStyled } from "./styled/DetailListStyled";

export function DetailMain({ current }: { current }) {

  return (
    <DetailListStyled>
      <DetailedList weather={current} />
    </DetailListStyled>
  )
}