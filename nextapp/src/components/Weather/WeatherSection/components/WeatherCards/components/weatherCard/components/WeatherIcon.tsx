import { Box } from "@mui/material";
import { cssConstants } from "styles/cssConstants";
import { getUrlForIcon } from "functions/getUrlForIcon";

export function WeatherIcon({ icon, width = '50px' }: {width: string, icon: string}) {
  return <Box
    component='img' 
    src={getUrlForIcon(icon)} 
    width={width}
    loading="lazy" 
    title="weather icon"
    sx={{
      bgcolor: cssConstants.backgroundForIcon,
      borderRadius: '50%'
    }}
  />
}