import { Tooltip } from "@mui/material";
import { NameStyled } from "./styled/NameStyled";

export function NameForCard({ name }: { name: string }) {
  return (
    <Tooltip title={name} followCursor>
      <NameStyled noWrap>
        {name}
      </NameStyled>
    </Tooltip>
  )
}