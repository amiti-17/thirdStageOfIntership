import { Box } from "@mui/material";
import { Dispatch, SetStateAction, useContext } from "react";
import style from "./style.module.css";
import { ModalLayoutContext } from "Contexts/modalLayoutContext";

export function OverLayLayout({ children } : { children?: React.ReactNode }) {

  const { setIsModalOpen } = useContext(ModalLayoutContext);
  return (
    <Box className={style.overlay} onClick={() => {
      
      setIsModalOpen(false);
      setIsModalOpen((prev) => !prev);
      
    }}> { /* maybe make close layout more practice not by click on everything */}
      {children}
    </Box>
  )
}