import { View } from "react-native";
import { useContext, useEffect } from "react";
import { LoginForm } from "./components/LoginFrom";
import { NavigatorContext } from "context/NavigatorContext";

export const LoginScreen = ({ navigation }) => {

  const { setNavigator } = useContext(NavigatorContext);
  useEffect(() => {
    setNavigator(() => navigation);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoginForm navigation={navigation} />
    </View>
  );
}
