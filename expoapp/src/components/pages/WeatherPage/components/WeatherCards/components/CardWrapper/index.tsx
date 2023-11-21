import { StyleSheet, View } from "react-native";
import { Card } from "./components/Card";
import { cssConstants } from "config/system/constants/cssConstants";
import { LocationType } from "config/system/types/Locations";

type CardWrapperProps = {
  location: LocationType,
}

export const CardWrapper = ({ location }: CardWrapperProps) => {

  return (
    <View style={style.cardWrapper}>
      <Card location={location} />
    </View>
  )
}

const style = StyleSheet.create({
  cardWrapper: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: cssConstants.backgroundColor,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
})