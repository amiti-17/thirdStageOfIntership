import { LocationType } from "config/system/types/Locations";
import { Dispatch, SetStateAction, createContext } from "react";

export type SuggestionListContextType = {
  suggestionList: LocationType[],
  setSuggestionList: Dispatch<SetStateAction<LocationType[]>>,
}

export const defaultSuggestionListContextObj: SuggestionListContextType = {
  suggestionList: [],
  setSuggestionList: () => {},
}

export const SuggestionListContext = createContext<SuggestionListContextType>(defaultSuggestionListContextObj)