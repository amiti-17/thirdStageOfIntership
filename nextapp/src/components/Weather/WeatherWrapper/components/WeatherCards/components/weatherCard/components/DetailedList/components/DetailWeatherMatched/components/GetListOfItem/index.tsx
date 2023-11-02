import { Box } from "@mui/material";

type GetListOfItemType = {
  name: string,
  item: string | number,
  measure?: string,
}

export function GetListOfItem({ name, item, measure = '' }: GetListOfItemType) {
  return (
    <>{(item || (typeof item === 'number' && Number(item) === 0)) && <Box component='li'>{name}: {item}{measure}</Box>}</>
  )
}