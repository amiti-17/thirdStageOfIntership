import { Box } from "@mui/material";
import React from "react";
import style from "./style.module.css";

export function DetailList({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <Box component='ul' className={[className, style.list].join(' ')}>
      {children}
    </Box>
  )
}