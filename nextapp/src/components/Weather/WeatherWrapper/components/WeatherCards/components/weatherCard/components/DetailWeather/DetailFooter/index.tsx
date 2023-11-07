import { Day } from "config/system/types/Day";
import { DailyFooterItem } from "./components/DailyFooterItem";
import { DetailFooterStyled } from "./styled/DetailFooterStyled";

export function DetailFooter({ days }: { days: Day[]}) {
  return (
    <DetailFooterStyled>
      {
        days
          .sort((elA, elB) => elA.dt - elB.dt)
          .map(el => <DailyFooterItem key={el.dt} item={el.daily} />)
      }
    </DetailFooterStyled>
  )
}