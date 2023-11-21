import { StyleSheet, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { WeatherIcon } from "components/pages/WeatherPage/components/WeatherCards/components/CardWrapper/components/Card/components/WeatherIcon";
import { ShowTemperature } from "components/pages/WeatherPage/components/WeatherCards/components/CardWrapper/components/Card/components/ShowTemperature";
import { RenderElement } from "components/pages/WeatherPage/components/WeatherCards/components/CardWrapper/components/Card/components/WeatherModal/components/ModalWrapper/components/Day/components/DetailedElement/components/RenderElement";
import { digits } from "config/system/constants/digits";
import { iconsName } from "config/system/constants/iconsName";
import { getDate } from "functions/timeAndDate/getDate";

type HeaderOfDayProps = {
  currentDaily: any,
}

export const HeaderOfDay = ({currentDaily}: HeaderOfDayProps) => {

return (
  <View>
    <View style={style.weatherMain}>
      <WeatherIcon icon={currentDaily?.weather[0].icon} width={80} />
      <ShowTemperature temperature={Math.round(currentDaily?.temp.min + currentDaily?.temp.max / 2)} fontSize={30} />
    </View>
    <RenderElement
      title={''}
      value={getDate(new Date(Number(currentDaily?.dt) * digits[1000]))}
      icon={Fontisto}
      name={iconsName.date}
    />
  </View>
  )
}

const style = StyleSheet.create({
  weatherMain: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    maxHeight: 70,
    marginTop: 10,
    flexGrow: 1,
  }
});