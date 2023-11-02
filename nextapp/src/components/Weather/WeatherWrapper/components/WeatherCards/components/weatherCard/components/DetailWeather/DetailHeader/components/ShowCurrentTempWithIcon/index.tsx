import { Tooltip } from "@mui/material";
import { ShowTemperature } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/ShowTemperature";
import { WeatherIcon } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/WeatherIcon";
import { TempWithIcon } from "./styled/TempWithIcon";

type ShowCurrentTempWithIconType = { 
  icon: string, 
  temp: number, 
  summary: string 
}

export function ShowCurrentTempWithIcon({ icon, temp, summary }: ShowCurrentTempWithIconType) {
  return (
    <Tooltip title={summary} followCursor>
      <TempWithIcon>
        <WeatherIcon icon={icon} />
        <ShowTemperature temperature={temp} fontSize={30} />
      </TempWithIcon>
    </Tooltip>
  )
}