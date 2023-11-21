import { StyleSheet, Text, View } from "react-native";
import { cssConstants } from "config/system/constants/cssConstants";

type RenderElementProps = {
  title: string,
  value: string,
  measure?: string,
  icon?: any,
  name?: string,
}

export const RenderElement = ({ title, measure, value, icon, name }: RenderElementProps) => {

  const Icon = icon;

  return (
    <View style={style.wrapper}>
      { icon && <Icon name={name} size={20} color={cssConstants.mainColor} />}
      <Text> {title}: {value} {measure}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
})