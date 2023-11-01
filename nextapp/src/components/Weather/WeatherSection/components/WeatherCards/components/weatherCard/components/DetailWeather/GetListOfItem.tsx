import { Box } from "@mui/material";

export function GetListOfItem({ name, item, measure: measure }: { name: string, item: string | number, measure?: string }) {

  let isOk = false;

  if (item || (typeof item === 'number' && Number(item) === 0)) {
    isOk = true;
  }

  return (
    <>{isOk && <Box>{name}: {item}{measure}</Box>}</>
  )
}