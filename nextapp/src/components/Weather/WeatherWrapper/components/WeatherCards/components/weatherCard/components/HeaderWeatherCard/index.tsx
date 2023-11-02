import { WeatherIcon } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/WeatherIcon";
import { NameAndCaption } from "./components/NameAndCaption";
import { Current } from "config/system/types/Current";
import { HeaderWeatherCardStyled } from "./styled/HeaderWeather";
import { IconAndName } from "./styled/IconAndName";
import { DeleteButton } from "./components/DeleteButton";

export function HeaderWeatherCard({ name, current, onDeleteHandler }: { name: string, current: Current, onDeleteHandler: () => {} }) {

  const currentData = JSON.parse(current.current);
  
  return (
    <HeaderWeatherCardStyled>
      <IconAndName direction='row' gap='10px'> {/* I couldn't get name for this component, so it here) */}
        <WeatherIcon icon={currentData.weather[0].icon} width={'70px'} />
        <NameAndCaption name={name} caption={currentData.weather[0].description} />
      </IconAndName>
      <DeleteButton onDeleteHandler={onDeleteHandler} />
    </HeaderWeatherCardStyled>
  )
}