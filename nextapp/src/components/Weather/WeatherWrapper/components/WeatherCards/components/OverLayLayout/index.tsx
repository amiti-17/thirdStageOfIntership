import { useContext } from "react";
import { ModalLayoutContext } from "Contexts/modalLayoutContext";
import { OverLayStyled } from "./styled/OverLayStyled";

export function OverLayLayout({ children } : { children?: React.ReactNode }) {

  const { setIsModalOpen } = useContext(ModalLayoutContext);

  return (
    <OverLayStyled onClick={() => {
      setIsModalOpen(false);
      setIsModalOpen((prev) => !prev);
    }}> { /* maybe make close layout more practice not by click on everything */}
      {children}
    </OverLayStyled>
  )
}