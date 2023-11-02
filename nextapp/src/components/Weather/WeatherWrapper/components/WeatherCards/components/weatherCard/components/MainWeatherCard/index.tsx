import { Stack } from "@mui/material";
import { ShowTemperature } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/ShowTemperature";
import { ShowDetails } from "./components/ShowDetails";

export function MainWeatherCard({currentW}: {currentW: string}) {
  const current = JSON.parse(currentW);
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
}