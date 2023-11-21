export type Current = {
  dt: number,
  current: string, // meaning json
}

export type currentAfterParsing = {
  clouds: number,
  dt: number,
  feels_like: number,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number,
  temp: number,
  visibility: number,
  weather: ({
    description: string,
    icon: string,
    main: string,
  })[],
  wind_deg: number,
  wind_gust?: number,
  wind_speed: number,
  rain?: number,
  snow?: number,
}