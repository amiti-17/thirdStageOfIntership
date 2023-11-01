import React, { Dispatch, SetStateAction } from "react";

export type ModalLayoutType = {
  isModalOpen: boolean,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
}

export const defaultModalLayout = {
  isModalOpen: false,
  setIsModalOpen: () => {},
}

export const ModalLayoutContext = React.createContext<ModalLayoutType>({} as ModalLayoutType);