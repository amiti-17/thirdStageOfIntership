import { Box } from "@mui/material";
import { Day } from "config/system/types/Day";
import { DailyFooterItem } from "./components/DailyFooterItem";
import style from "./style.module.css";

export function DetailFooter({ days }: { days: Day[]}) {
  return (
    <Box className={style.detailFooter}>
      {days.map(el => <DailyFooterItem key={el.dt} item={el.daily} />)}
    </Box>
  )
}