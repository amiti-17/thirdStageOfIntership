import { Box } from "@mui/material";
import { Day } from "config/system/types/Day";
import { DailyFooterItem } from "./components/DailyFooterItem";

export function DetailFooter({ days }: { days: Day[]}) {
  return (
    <Box className={'style.detailFooter'}>
      {
        days
          .sort((elA, elB) => elA.dt - elB.dt)
          .map(el => <DailyFooterItem key={el.dt} item={el.daily} />)
      }
    </Box>
  )
}