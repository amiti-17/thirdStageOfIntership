import { Box, Tooltip, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { getUrlForIcon } from 'functions/getUrlForIcon';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

export function FutureDay({ daily }: { daily: string }) {

  const weather = JSON.parse(daily);
  const currentTime = new Date(weather.dt * 1000);
  const [ checked, setChecked ] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  console.log(weather);

  return (
    <Tooltip title={weather.summary} followCursor>
      <Stack direction='column' gap='5px' alignItems='center'
        sx={{
          cursor: 'pointer'
        }}
        onClick={handleChange}
      >
        <Box 
          component='img' 
          src={getUrlForIcon(weather.weather[0].icon)} 
          width='40px' 
          loading="lazy"
          sx={{
            bgcolor: grey[300],
            borderRadius: '50%'
          }}
        />
        <Box>{weather.weather[0].main}</Box>
        <Box>{currentTime.getDate()}:{currentTime.getMonth()}:{currentTime.getFullYear()}</Box>
        <Collapse in={checked}>
          <Stack direction='column' alignItems='center'>
            <Box>Temp: {weather.temp.eve}°C</Box>
            <Box>Max: {weather.temp.max}°C</Box>
            <Box>Min: {weather.temp.min}°C</Box>
            <Box>P: {weather.temp.min} hPa</Box>
            <Box>Wind: {weather.wind_speed} km</Box>
            <Box>Hum: {weather.humidity}%</Box>
          </Stack>
        </Collapse>
      </Stack>
    </Tooltip>
    
  )
  
}