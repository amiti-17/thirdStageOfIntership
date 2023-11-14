import { Tooltip } from "@mui/material";
import { ShowTemperature } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/ShowTemperature";
import { WeatherIcon } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/WeatherIcon";
import { tempWithIcon } from "./styled/TempWithIcon";
import { memo } from "react";

type ShowCurrentTempWithIconType = { 
  icon: string, 
  temp: number, 
  summary: string,
  margin?: string,
}

export function ShowCurrentTempWithIcon({ icon, temp, summary, margin }: ShowCurrentTempWithIconType) {

  const TempWithIconStyled = memo(tempWithIcon(margin));

  return (
    <Tooltip title={summary} followCursor>
      <TempWithIconStyled>
        <WeatherIcon icon={icon} />
        <ShowTemperature temperature={temp} fontSize={30} />
      </TempWithIconStyled>
    </Tooltip>
  )
}