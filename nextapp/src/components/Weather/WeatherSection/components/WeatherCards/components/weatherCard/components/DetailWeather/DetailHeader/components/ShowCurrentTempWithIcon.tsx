import { Box, Tooltip } from "@mui/material";
import { WeatherIcon } from "../../../WeatherIcon";
import style from "./style.module.css";
import { ShowTemperature } from "../../../ShowTemperature";

export function ShowCurrentTempWithIcon({ icon, temp, summary }: { icon: string, temp: number, summary: string }) {
  return (
    <Tooltip title={summary} followCursor>
      <Box className={style.currentTempWithIcon}>
        <WeatherIcon icon={icon} />
        <ShowTemperature temperature={temp} fontSize={30} />
      </Box>
    </Tooltip>
  )
}