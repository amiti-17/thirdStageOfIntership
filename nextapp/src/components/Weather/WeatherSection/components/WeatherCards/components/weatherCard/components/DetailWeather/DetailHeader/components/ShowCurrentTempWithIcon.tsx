import { Box } from "@mui/material";
import { WeatherIcon } from "../../../WeatherIcon";
import style from "./style.module.css";
import { ShowTemperature } from "../../../ShowTemperature";

export function ShowCurrentTempWithIcon({ icon, temp }: { icon: string, temp: number }) {
  return (
    <Box className={style.currentTempWithIcon}>
      <WeatherIcon icon={icon} />
      <ShowTemperature temperature={temp} fontSize={30} />
    </Box>
  )
}