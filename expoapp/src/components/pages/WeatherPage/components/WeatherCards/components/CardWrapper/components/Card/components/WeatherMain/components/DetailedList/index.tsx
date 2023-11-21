import { StyleSheet, View } from "react-native";
import { Current, currentAfterParsing } from "config/system/types/Current";
import { DetailedElement } from "./components/DetailedElement";

type DetailedListProps = {
  current: Current,
}

export const DetailedList = ({current}: DetailedListProps) => {

  const currentWeather: currentAfterParsing = current?.current && JSON.parse(current?.current);
  console.log(currentWeather);
  return (
    <View style={style.wrapper}>
      {
        currentWeather && Object.keys(currentWeather).map(el => {
          return (
            <DetailedElement key={el} keyValue={el} value={currentWeather[el]} />
          )
        })
      }
    </View>
  )
}

const style  = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    flexGrow: 3,
  }
})