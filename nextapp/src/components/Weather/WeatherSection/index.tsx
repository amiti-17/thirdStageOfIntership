import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../Contexts/currentUserContext";
import { Box } from "@mui/system";
import { Search } from "./components/Search";
import { WeatherCards } from "./components/WeatherCards";
import { PlacesContext } from "../../../Contexts/placesContext";
import { LocationType } from "../../../../Apollo/locations";

export function WeatherSection() {
  const { email } = useContext(CurrentUserContext);
  const [ places, setPlaces ] = useState<LocationType[]>([]); // TODO: rewrite it to fetched array with locations of current user...

  return (
    <PlacesContext.Provider value={{places, setPlaces}}>
      <Box component='section'>
        <Search />
        <WeatherCards />
        {email}
      </Box>
    </PlacesContext.Provider>
    
    
  )
}