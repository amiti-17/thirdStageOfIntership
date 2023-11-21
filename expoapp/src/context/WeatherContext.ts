import { Dispatch, SetStateAction, createContext } from "react";
import { LocationType } from "config/system/types/Locations";
import { ModalDataType } from "config/system/types/ModalData";

export type WeatherContextType = {
  isModal: boolean,
  setIsModal: Dispatch<SetStateAction<boolean>>,
  locations: LocationType[],
  setLocations: Dispatch<SetStateAction<LocationType[]>>,
  modalData: ModalDataType,
  setModalData: Dispatch<SetStateAction<ModalDataType>>,
}

export const defaultWeatherContextObj: WeatherContextType = {
  locations: [],
  setLocations: () => {},
  isModal: false,
  setIsModal: () => {},
  modalData: {} as ModalDataType,
  setModalData: () => {},
}

export const WeatherContext = createContext<WeatherContextType>(defaultWeatherContextObj)