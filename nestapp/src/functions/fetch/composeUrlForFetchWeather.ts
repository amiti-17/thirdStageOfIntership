export function composeUrlForFetchWeather(coordinates) {
  let currentUrl = process.env.OW_URL_ONE_CALL;
  currentUrl += `?appid=${process.env.OW_API_KEY}`;
  currentUrl += `&lat=${coordinates.lat}&lon=${coordinates.lon}`;
  currentUrl += `&exclude=hourly,minutely`;
  // console.log('currentUrl: ', currentUrl);
  return currentUrl;
}
