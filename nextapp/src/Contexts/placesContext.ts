import React, { Dispatch, SetStateAction } from "react";
import { LocationType } from "../../Apollo/locations";
import { LocationFetchedFromSearchString } from "../config/system/types/locations";

type PlacesContextType = {
  places: LocationFetchedFromSearchString[],
  setPlaces: Dispatch<SetStateAction<LocationFetchedFromSearchString[]>>,
}

const defaultPlacesContextType = {
  places: [],
  setPlaces: () => {},
}

export const PlacesContext = React.createContext<PlacesContextType>({} as PlacesContextType);