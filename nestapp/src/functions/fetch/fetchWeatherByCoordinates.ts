import { Coordinates } from 'src/config/types/coordinates';
import { baseFetch } from '.';
import { composeUrlForFetchWeather } from './composeUrlForFetchWeather';

export async function fetchWeatherByCoordinates(coordinates: Coordinates) {
  const weather = await baseFetch(composeUrlForFetchWeather(coordinates));
  weather.daily = weather.daily.slice(0, 3);
  return weather;
}
