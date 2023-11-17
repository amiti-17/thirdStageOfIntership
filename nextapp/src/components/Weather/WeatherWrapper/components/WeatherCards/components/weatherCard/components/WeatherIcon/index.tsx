import { memo } from "react";
import { weatherIconStyled } from "./styled/weatherIconStyled";
import { getUrlForIcon2x } from "functions/getUrlForIcon";

export function WeatherIcon({ icon, width = '50px' }: { icon: string, width?: string }) {

  const WeatherIcon = memo(weatherIconStyled(width));

  return <WeatherIcon
    width={width}
    component='img' 
    src={getUrlForIcon2x(icon)}
    loading="lazy"
  />
}