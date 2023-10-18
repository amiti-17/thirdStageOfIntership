import { Stack } from "@mui/material"
import { FutureDay } from "./components/FutureDay"

export function FooterWeatherCard({ daily }: { daily: { dt: number, daily: string }[] }) {
  // console.log(daily)
  return (
    <Stack
      direction='row'
      gap='10px'
      sx={{
        mt: '5px'
      }}
    >
      {daily.map(day => <FutureDay key={day.dt} daily={day.daily} />)}
    </Stack>
  ) 
  
}