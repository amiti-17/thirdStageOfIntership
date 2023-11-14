import { getUrlForIcon2x } from "functions/getUrlForIcon";
import { weatherIconStyled } from "./styled/WeatherIconStyled";
import { memo } from "react";

export function WeatherIcon({ icon, width = '50px' }: { icon: string, width?: string }) {

  const WeatherIcon = memo(weatherIconStyled(width));

  return <WeatherIcon
    width={width}
    component='img' 
    src={getUrlForIcon2x(icon)}
    loading="lazy"
  />
}