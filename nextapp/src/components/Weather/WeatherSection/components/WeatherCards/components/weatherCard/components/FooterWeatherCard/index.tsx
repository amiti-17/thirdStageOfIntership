import { Box } from "@mui/material";
import { FutureDay } from "./components/FutureDay";
import style from "./style.module.css"

export function FooterWeatherCard({ daily }: { daily: { dt: number, daily: string }[] }) {
  return (
    <Box className={style.footerWeatherCard}>
      {
        daily
          .sort((elA, elB) => elA.dt - elB.dt)
          .map(day => <FutureDay key={day.dt} daily={day.daily} />)
      }
    </Box>
  ) 
  
}