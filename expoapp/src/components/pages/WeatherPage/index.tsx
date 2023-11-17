import { Button, Text, View } from "react-native";

export const WeatherScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Weather Screen</Text>
      <Button title='press to continue' onPress={() => {
        navigation.navigate('Login');
      }}/>
    </View>
  );
}