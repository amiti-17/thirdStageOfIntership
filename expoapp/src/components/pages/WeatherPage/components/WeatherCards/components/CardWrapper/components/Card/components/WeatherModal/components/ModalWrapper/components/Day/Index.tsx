import { StyleSheet, View } from "react-native";
import { Day as DayType } from "config/system/types/Day";
import { DetailedElement } from "./components/DetailedElement";
import { HeaderOfDay } from "./components/HeaderOfDay";

type DayProps = {
  day: DayType,
}

export const Day = ({ day }: DayProps) => {
  
  const currentDaily = day && JSON.parse(day.daily);

  return (
    <View style={style.wrapper}>
      <HeaderOfDay currentDaily={currentDaily} />
      <View style={style.detailedWrapper}>
        {
          currentDaily && Object.keys(currentDaily).map(el => {
            return (
              <DetailedElement key={el} keyValue={el} value={currentDaily[el]} />
            )
          })
        }
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    gap: 15,
  },
  detailedWrapper: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    flexGrow: 3,
    paddingBottom: 10,
    paddingTop: 10,
  },
})