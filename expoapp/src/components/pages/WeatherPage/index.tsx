import { useLazyQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { users } from "Apollo/queries/users";
import { SuggestionListProvider } from "./components/SuggestionListProvider";
import { WeatherCards } from "./components/WeatherCards";
import { WeatherProvider } from "./components/WeatherProvider";
import { CurrentUserContext } from "context/CurrentUserContext";
import { NavigatorContext } from "context/NavigatorContext";

export const WeatherScreen = ({ navigation }) => {

  const [ getCurrentUser, { data: userData } ] = useLazyQuery(users.getCurrentUser);
  const { setNavigator } = useContext(NavigatorContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    setNavigator(navigation);
    getCurrentUser({
      fetchPolicy: 'network-only',
    });
    
  }, []);

  useEffect(() => {
    if (userData?.getCurrentUser.email) {
      setCurrentUser(() => userData?.getCurrentUser);
    }
  }, [userData]);

  return (
    <View style={style.weatherWrapper}>
      <WeatherProvider>
        <SuggestionListProvider />
        <WeatherCards />
      </WeatherProvider>
    </View>
  );
}

const style = StyleSheet.create({
  weatherWrapper: {
    paddingTop: 5,
    flex: 1,
  }
});
