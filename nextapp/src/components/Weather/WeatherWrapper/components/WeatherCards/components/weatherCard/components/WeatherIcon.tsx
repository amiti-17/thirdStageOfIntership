import { Box } from "@mui/material";
import { cssConstants } from "styles/cssConstants";
import { getUrlForIcon } from "functions/getUrlForIcon";
import style from "./style.module.css";

export function WeatherIcon({ icon, width = '50px' }: {width?: string, icon: string}) {
  return <Box
    className={style.weatherIcon}
    component='img' 
    src={getUrlForIcon(icon)} 
    width={width}
    loading="lazy" 
    title="weather icon"
  />
}