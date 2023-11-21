import { StyleSheet, Image } from "react-native";
import { getUrlForIcon2x } from "functions/getUrlForIcon";

type WeatherIconProps = {
  icon: string,
  width?: number,
}

export function WeatherIcon({ icon, width = 50 }: WeatherIconProps) {

  const myStyle = style(width);
  const currentUrl = getUrlForIcon2x(icon);

  return (
    <Image
      style={myStyle.icon}
      source={{ uri: currentUrl }}
    />
  ) 
}

const style = (width) => StyleSheet.create({
  icon: {
    width,
    height: width,
    borderRadius: 50,
  },
})