import { Box, Tooltip, Stack } from '@mui/material';
import { getDate } from 'functions/timeAndDate/getDate';
import { digits } from 'config/system/constants/digits';
import { WeatherIcon } from 'components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/WeatherIcon';
import { ShowTemperature } from 'components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/ShowTemperature';
import { CollapsedDetail } from './components/CollapsedDetail';
import { FooterWeatherUl } from './styled/FooterWeatherUl';

export function FutureDay({ daily }: { daily: string }) {

  const weather = JSON.parse(daily);
  const currentTime = new Date(weather.dt * digits[1000]);
  const weatherDescription = weather.weather[0].main;

  return (
    <Tooltip title={weather.summary} followCursor>
      <FooterWeatherUl
        component='ul'
        direction='column'
      >
        <Stack direction='row' gap='5px'>
          <WeatherIcon icon={weather.weather[0].icon} width={'40px'} />
          <ShowTemperature temperature={weather.temp.eve} fontSize={25}/>
        </Stack>
        
        <Box>{weatherDescription}</Box>
        <Box>{getDate(currentTime)}</Box>

        <CollapsedDetail checked={ false } weather={ weather } />
      </FooterWeatherUl>
    </Tooltip>
  )
}