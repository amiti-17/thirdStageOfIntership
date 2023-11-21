import { View } from "react-native";
import { LoginForm } from "./components/LoginFrom";
import { useContext, useEffect } from "react";
import { NavigatorContext } from "context/NavigatorContext";

export const LoginScreen = ({ navigation }) => {

  const { setNavigator } = useContext(NavigatorContext);
  useEffect(() => {
    setNavigator(navigation);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoginForm navigation={navigation} />
    </View>
  );
}
