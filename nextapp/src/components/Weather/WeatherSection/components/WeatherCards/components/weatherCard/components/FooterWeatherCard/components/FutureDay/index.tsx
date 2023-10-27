import { Box, Tooltip, Stack } from '@mui/material';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import style from './style.module.css';
import { getUrlForIcon } from 'functions/getUrlForIcon';
import { getDate } from 'functions/timeAndDate/getDate';
import { digits } from 'config/system/constants/digits';
import { cssConstants } from 'styles/cssConstants';

export function FutureDay({ daily }: { daily: string }) {

  const weather = JSON.parse(daily);
  const currentTime = new Date(weather.dt * digits[1000]);
  const [ checked, setChecked ] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Tooltip title={weather.summary} followCursor>
      <Stack
        direction='column'
        gap='5px'
        alignItems='center'
        className={style.footerWeatherCard}
        onClick={handleChange}
      >
        <Stack direction='row' gap='5px'>
          <Box 
            component='img' 
            src={getUrlForIcon(weather.weather[0].icon)} 
            width='40px' 
            loading='lazy'
            sx={{
              bgcolor: cssConstants.backgroundForIcon,
              borderRadius: '50%'
            }}
          />
          <Box sx={{
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <Box sx={{fontSize: '25px'}} component='span'>
              {Math.round(weather.temp.eve)}
            </Box>
            °C
          </Box>
        </Stack>
        
        <Box>{weather.weather[0].main}</Box>
        <Box>{getDate(currentTime)}</Box>
        <Collapse in={checked}>
          <Stack direction='column' alignItems='center'>
            {Boolean(String(weather.temp.eve)) && <Box>Temp: {weather.temp.eve}°C</Box>}
            {Boolean(String(weather.temp.max)) && <Box>Max: {weather.temp.max}°C</Box>}
            {Boolean(String(weather.temp.min)) && <Box>Min: {weather.temp.min}°C</Box>}
            {Boolean(String(weather.pressure)) && <Box>P: {weather.pressure} hPa</Box>}
            {Boolean(String(weather.wind_speed)) && <Box>Wind: {weather.wind_speed} km</Box>}
            {Boolean(String(weather.humidity)) && <Box>Hum: {weather.humidity}%</Box>}
          </Stack>
        </Collapse>
      </Stack>
    </Tooltip>
  )
}