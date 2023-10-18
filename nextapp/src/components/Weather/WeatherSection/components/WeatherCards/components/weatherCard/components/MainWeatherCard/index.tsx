import { Stack, Box } from "@mui/material";

export function MainWeatherCard({currentW}: {currentW: string}) {
  const current = JSON.parse(currentW);
  return (
    <Stack
      direction='column'
      gap='5px'
    >
      {current.weather[0].description && <Box sx={{fontStyle: 'italic', textAlign: 'right'}}>{current.weather[0].description}</Box>}
      <Stack
        direction='row'
        gap='15px'
      >
        <Stack direction='row'>
          <Box
            component='span'
            sx={{
              fontSize: '50px',
            }}
          >
            {Math.round(current.temp)}
          </Box>
          
          <Box
            component='span'
            sx={{
              fontSize: '25px'
            }}
          >
            °C
          </Box>
        </Stack>

        <Stack
          direction='column'
        >
          Pressure: {current.pressure} hPa<br />
          Humidity: {current.humidity}%<br />
          Wind: {current.wind_speed} metre/sec
        </Stack>
        
      </Stack>
    </Stack>
  )
}