import { Box, Stack } from "@mui/material";
import { memo } from "react";

type ShowTemperatureType = {
  temperature: number,
  fontSize: number,
}

export const ShowTemperature = memo(({temperature, fontSize}: ShowTemperatureType) => {
  return (
    <Stack direction='row'>
      <Box
        component='span'
        sx={{
          fontSize: `${fontSize}px`,
        }}
      >
        {Math.round(temperature)}
      </Box>
      
      <Box
        component='span'
        sx={{
          fontSize: `${fontSize / 2}px`,
        }}
      >
        °C
      </Box>
    </Stack>
  )
})