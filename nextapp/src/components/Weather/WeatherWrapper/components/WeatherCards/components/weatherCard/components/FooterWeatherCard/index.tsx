import { FutureDay } from "./components/FutureDay";
import { FooterWeatherCardStyled } from "./styled/FooterWeatherCardStyled";

export function FooterWeatherCard({ daily }: { daily: { dt: number, daily: string }[] }) {
  return (
    <FooterWeatherCardStyled>
      {
        daily
          .sort((elA, elB) => elA.dt - elB.dt)
          .map(day => <FutureDay key={day.dt} daily={day.daily} />)
      }
    </FooterWeatherCardStyled>
  )
}