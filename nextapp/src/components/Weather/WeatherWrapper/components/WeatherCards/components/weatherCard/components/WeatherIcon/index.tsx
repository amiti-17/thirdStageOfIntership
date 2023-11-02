import { getUrlForIcon2x } from "functions/getUrlForIcon";
import { Box } from "@mui/material";

export function WeatherIcon({ icon, width = '50px' }: { icon: string, width?: string }) {
  return <Box
    width={width}
    component='img' 
    src={getUrlForIcon2x(icon)} 
    loading="lazy" 
    // title="weather icon"
  />
}