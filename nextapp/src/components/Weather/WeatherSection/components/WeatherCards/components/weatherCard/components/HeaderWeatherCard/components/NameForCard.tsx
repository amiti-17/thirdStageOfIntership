import { Tooltip, Typography } from "@mui/material";

export function NameForCard({ name }: { name: string }) {
  return (
    <Tooltip title={name} followCursor>
      <Typography width='100%' noWrap>
        {name}
      </Typography>
    </Tooltip>
  )
}