import React from "react";
import { DetailListStyled } from "./styled/DetailListStyled";

type DetailListType = { children: React.ReactNode, className?: string };

export function DetailList({ children, className }: DetailListType) {
  return (
    <DetailListStyled component='ul' className={className}>
      {children}
    </DetailListStyled>
  )
}