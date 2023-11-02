import { Box, Stack } from "@mui/material"

export const ShowTemperature = ({temperature, fontSize}: { temperature: number, fontSize: number }) => {
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
}