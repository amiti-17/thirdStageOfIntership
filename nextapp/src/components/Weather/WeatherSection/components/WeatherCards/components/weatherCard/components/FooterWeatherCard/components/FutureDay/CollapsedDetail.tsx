import { Box, Collapse, Stack } from "@mui/material"

export const CollapsedDetail = ({ checked, weather }: { 
  checked: boolean, 
  weather: { 
    temp: { eve: string, max: string, min: string }, 
    pressure: string, 
    windSpeed: string, 
    humidity: string
  }}) => {
  return (
    <Collapse in={checked}>
      <Stack direction='column' alignItems='center'>
        {Boolean(String(weather.temp.eve)) && <Box>Temp: {weather.temp.eve}°C</Box>}
        {Boolean(String(weather.temp.max)) && <Box>Max: {weather.temp.max}°C</Box>}
        {Boolean(String(weather.temp.min)) && <Box>Min: {weather.temp.min}°C</Box>}
        {Boolean(String(weather.pressure)) && <Box>P: {weather.pressure} hPa</Box>}
        {Boolean(String(weather.windSpeed)) && <Box>Wind: {weather.windSpeed} km</Box>}
        {Boolean(String(weather.humidity)) && <Box>Hum: {weather.humidity}%</Box>}
      </Stack>
    </Collapse>
  )
  
}