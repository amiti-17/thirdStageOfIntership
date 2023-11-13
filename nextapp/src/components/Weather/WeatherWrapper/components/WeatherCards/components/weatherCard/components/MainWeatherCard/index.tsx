import { Stack } from "@mui/material";
import { ShowTemperature } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/ShowTemperature";
import { ShowDetails } from "./components/ShowDetails";
import { memo } from "react";

export const MainWeatherCard = memo(({currentWeather}: {currentWeather: string}) => {
  const current = JSON.parse(currentWeather);
  return (
    <Stack
      direction='row'
      margin='0 auto'
      gap='15px'
    >
      <ShowTemperature temperature={current.temp} fontSize={50} />
      <ShowDetails current={current}></ShowDetails>
    </Stack>
  )
});

// export const MainWeatherCardMemo = memo(({ currentWeather }: { currentWeather: string }) => {
//   return (
//     <MainWeatherCard currentWeather={currentWeather} />
//   )
// })