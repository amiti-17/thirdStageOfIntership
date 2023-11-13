import { memo } from "react";
import { FutureDay } from "./components/FutureDay";
import { FooterWeatherCardStyled } from "./styled/FooterWeatherCardStyled";

export const FooterWeatherCard = memo(({ daily }: { daily: { dt: number, daily: string }[] }) => {
  return (
    <FooterWeatherCardStyled>
      {
        daily
          .sort((elA, elB) => elA.dt - elB.dt)
          .map(day => <FutureDay key={day.dt} dailyWeather={day.daily} />)
      }
    </FooterWeatherCardStyled>
  )
})