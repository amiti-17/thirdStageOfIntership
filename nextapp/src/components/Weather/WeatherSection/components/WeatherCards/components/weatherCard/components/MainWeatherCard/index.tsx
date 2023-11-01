import { Stack, Box } from "@mui/material";
import { ShowTemperature } from "components/Weather/WeatherSection/components/WeatherCards/components/weatherCard/components/ShowTemperature";
import { ShowDetails } from "./components/ShowDetails";

export function MainWeatherCard({currentW}: {currentW: string}) {
  const current = JSON.parse(currentW);
  return (
    <Stack
      direction='row'
      gap='15px'
    >
      <ShowTemperature temperature={current.temp} fontSize={50} />
      <ShowDetails current={current}></ShowDetails>
    </Stack>
  )
}