import { ReactNode, useState } from "react";
import { LocationType } from "config/system/types/Locations";
import { WeatherContext } from "context/WeatherContext";
import { ModalDataType } from "config/system/types/ModalData";

export const WeatherProvider = ({ children }: { children: ReactNode }) => {

  const [ isModal, setIsModal ] = useState<boolean>(false);
  const [ modalData, setModalData ] = useState<ModalDataType>({} as ModalDataType);
  const [ locations, setLocations ] = useState<LocationType[]>([]);

  return (
    <WeatherContext.Provider value={{ 
      locations, setLocations,
      isModal, setIsModal,
      modalData, setModalData 
    }}>
      {children}
    </WeatherContext.Provider>
  )
}