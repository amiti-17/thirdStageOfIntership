import { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import { CardWrapper } from "./components/CardWrapper";
import { getComposedKey } from "functions/places/getComposedKey";
import { CurrentUserContext } from "context/CurrentUserContext";
import { WeatherContext } from "context/WeatherContext";

export const WeatherCards = () => {
  
  const { currentUser } = useContext(CurrentUserContext);
  const { locations, setLocations } = useContext(WeatherContext);

  useEffect(() => {
    setLocations(() => currentUser?.locations);
  }, []);
  
  return (
    <ScrollView>
      {locations && locations.map(location => 
        <CardWrapper key={getComposedKey(location)} location={location} />
      )}
    </ScrollView>
  )
}