import React from "react";
import { DetailListStyled } from "./styled/DetailListStyled";

export function DetailList({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <DetailListStyled component='ul' className={className}>
      {children}
    </DetailListStyled>
  )
}