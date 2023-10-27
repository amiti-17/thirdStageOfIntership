import React, { Dispatch, SetStateAction } from "react";
import { LocationFetchedFromSearchString } from "../config/system/types/locationsFetched";

type PlacesContextType = {
  places: LocationFetchedFromSearchString[],
  setPlaces: Dispatch<SetStateAction<LocationFetchedFromSearchString[]>>,
}

const defaultPlacesContextType = {
  places: [],
  setPlaces: () => {},
}

export const PlacesContext = React.createContext<PlacesContextType>({} as PlacesContextType);