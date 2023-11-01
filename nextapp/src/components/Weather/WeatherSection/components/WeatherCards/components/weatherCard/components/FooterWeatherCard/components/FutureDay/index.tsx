import { Box, Tooltip, Stack } from '@mui/material';
import { useState } from 'react';
import style from './style.module.css';
import { getDate } from 'functions/timeAndDate/getDate';
import { digits } from 'config/system/constants/digits';
import { WeatherIcon } from '../../../WeatherIcon';
import { ShowTemperature } from '../../../ShowTemperature';
import { CollapsedDetail } from './CollapsedDetail';

export function FutureDay({ daily }: { daily: string }) {

  const weather = JSON.parse(daily);
  const currentTime = new Date(weather.dt * digits[1000]);
  const [ checked, setChecked ] = useState(false);
  const weatherDescription = weather.weather[0].main;
  const myWeather = weather;
  myWeather.windSpeed = myWeather.wind_speed;

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
        // onClick={handleChange} // Fix this if you want expand the Collapse
      >
        <Stack direction='row' gap='5px'>
          <WeatherIcon icon={weather.weather[0].icon} width={'40px'} />
          <ShowTemperature temperature={weather.temp.eve} fontSize={25}/>
        </Stack>
        
        <Box>{weatherDescription}</Box>
        <Box>{getDate(currentTime)}</Box>

        <CollapsedDetail checked={ checked } weather={ myWeather } />
      </Stack>
    </Tooltip>
  )
}