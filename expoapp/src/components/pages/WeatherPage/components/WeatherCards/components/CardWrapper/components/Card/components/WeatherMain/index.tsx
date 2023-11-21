import { StyleSheet, View } from "react-native";
import { Current } from "config/system/types/Current";
import { WeatherIcon } from "components/pages/WeatherPage/components/WeatherCards/components/CardWrapper/components/Card/components/WeatherIcon";
import { ShowTemperature } from "components/pages/WeatherPage/components/WeatherCards/components/CardWrapper/components/Card/components/ShowTemperature";
import { DetailedList } from "./components/DetailedList";

type WeatherMainProps = {
  current: Current,
}

export const WeatherMain = ({ current }: WeatherMainProps) => {

  const currentWeather = current?.current && JSON.parse(current?.current);

  return (
    <View style={style.wrapper}>
      <View style={style.weatherMain}>
        <WeatherIcon icon={currentWeather?.weather[0].icon} width={80} />
        <ShowTemperature temperature={currentWeather?.temp} fontSize={30} />
      </View>
      <DetailedList current={current}/>
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
  weatherMain: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    maxHeight: 50,
    marginTop: 20,
    flexGrow: 1,
  }
});