import { Stack } from "@mui/material";

export function ShowDetails({current}: {current: { pressure: number, humidity: number, wind_speed: number}}) {
  const { pressure, humidity, wind_speed: windSpeed } = current;
  return (
    <Stack
      direction='column'
    >
      {pressure && <>Pressure: {pressure} hPa<br /></>}
      {humidity && <>Humidity: {humidity}%<br /></>}
      {windSpeed && <>Wind: {windSpeed} metre/sec</>}
    </Stack>
  )
}