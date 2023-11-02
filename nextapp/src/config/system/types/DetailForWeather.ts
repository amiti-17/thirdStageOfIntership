export type DetailForWeatherType = {
  dt?: number, 
  humidity?: number, 
  sunrise?: number, 
  sunset?: number, 
  temp?: { 
    min?: number, 
    max?: number, 
    day?: number, 
    morn?: number, 
    night?: number, 
    eve?: number
  },
  weather?: Weather[], 
  wind_speed?: number,
  summary?: string,
}

type Weather = { icon: string, description: string }