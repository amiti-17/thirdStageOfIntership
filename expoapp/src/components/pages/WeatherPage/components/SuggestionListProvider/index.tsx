import { useState } from "react";
import { LocationType } from "config/system/types/Locations";
import { SuggestionListContext } from "context/SuggestionListContext";
import { InputLocation } from "./components/InputLocation";

export const SuggestionListProvider = () => {

  const [ suggestionList, setSuggestionList ] = useState<LocationType[]>([]);
  
  return (
    <SuggestionListContext.Provider value={{ suggestionList, setSuggestionList }}>
      <InputLocation />
    </SuggestionListContext.Provider>
  )
}