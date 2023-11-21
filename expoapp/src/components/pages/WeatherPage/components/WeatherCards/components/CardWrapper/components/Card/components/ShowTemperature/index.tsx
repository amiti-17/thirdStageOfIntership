import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

type ShowTemperatureType = {
  temperature: number,
  fontSize: number,
}

export const ShowTemperature = memo(({temperature, fontSize}: ShowTemperatureType) => {
  const currentStyle = style(fontSize);

  return (
    <View style={currentStyle.wrapperStyle}>
      <Text style={currentStyle.numberStyle}>
        {Math.round(temperature)}
      </Text>
      <Text style={currentStyle.signStyle}>
        °C
      </Text>
    </View>
  )
})

const style = (fontSize: number) => StyleSheet.create({
  wrapperStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  numberStyle: {
    fontSize,
  },
  signStyle: {
    fontSize: fontSize / 1.6,
  }
})