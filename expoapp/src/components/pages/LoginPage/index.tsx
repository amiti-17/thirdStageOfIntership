import { Button, Text, View } from "react-native";
import { LoginForm } from "./components/LoginFrom";

export const LoginScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoginForm />
      <Text>Login Screen</Text>
      <Button title='press to continue' onPress={() => {
        navigation.navigate('Weather');
      }}/>
    </View>
  );
}
