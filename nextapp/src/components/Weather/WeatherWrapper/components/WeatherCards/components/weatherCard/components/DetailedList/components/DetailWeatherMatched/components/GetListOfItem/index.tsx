import { Box } from "@mui/material";
import { strConstants } from "config/system/constants/strConstants";

type GetListOfItemType = {
  name: string,
  item: string | number,
  measure?: string,
}

export function GetListOfItem({ name, item, measure = strConstants.emptyStr }: GetListOfItemType) {
  return (
    <>{(item || (typeof item === strConstants.number && Number(item) === 0)) && <Box component='li'>{name}: {item}{measure}</Box>}</>
  )
}