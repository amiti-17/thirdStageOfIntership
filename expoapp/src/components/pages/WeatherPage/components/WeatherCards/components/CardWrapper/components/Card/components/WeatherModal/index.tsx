import { StyleSheet, View } from "react-native";
import { ModalWrapper } from "./components/ModalWrapper";

export const WeatherModal = () => {
  
  return (
    <View style={style.weatherModal}>
      <ModalWrapper />
    </View>
  )
}

const style = StyleSheet.create({
  weatherModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
