import { Coordinates } from 'src/config/types/coordinates';
import { baseFetch } from '.';
import { composeUrlForFetchWeather } from './composeUrlForFetchWeather';

export async function fetchWeatherByCoordinates(coordinates: Coordinates) {
  return await baseFetch(composeUrlForFetchWeather(coordinates));
}
