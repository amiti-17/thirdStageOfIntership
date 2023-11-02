import { restructureWeatherObj } from "functions/weather/restructureWeatherObj";
import { DetailWeatherMatched } from "./components/DetailWeatherMatched";
import { DetailForWeatherType } from "config/system/types/DetailForWeather";

export const DetailedList = (props: DetailForWeatherType) => {

  const { weather } = props;

  const myWeather = restructureWeatherObj(weather);

  return (
    <>
      {Object.keys(myWeather).map(el => <DetailWeatherMatched key={el} name={el} item={myWeather[el]} />)}
    </>
  )
}

