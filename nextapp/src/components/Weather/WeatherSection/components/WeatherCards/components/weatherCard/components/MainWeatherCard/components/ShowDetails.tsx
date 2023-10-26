import { Stack } from "@mui/material";

export function ShowDetails({current}: {current: { pressure: number, humidity: number, wind_speed: number}}) {
  return (
    <Stack
      direction='column'
    >
      Pressure: {current.pressure} hPa<br />
      Humidity: {current.humidity}%<br />
      Wind: {current.wind_speed} metre/sec
    </Stack>
  )
}