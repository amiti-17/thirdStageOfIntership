import { GetListOfItem } from "../GetListOfItem";
import { getTime } from "functions/timeAndDate/getTime";
import style from "./style.module.css";
import { DetailList } from "../DetailList";

export function DetailMain({ current }: { current: {
  sunrise: string,
  sunset: string,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  wind_speed: number,
} }) {

  const { temp, sunrise, sunset, feels_like: feelsLike, pressure, humidity, wind_speed: windSpeed } = current;

  return (
    <DetailList className={style.listItemWrapper}>
      <GetListOfItem name={'Sunrise'} item={getTime(new Date(Number(sunrise) * 1000))} />
      <GetListOfItem name={'Sunset'} item={getTime(new Date(Number(sunset) * 1000))} />
      <GetListOfItem name={'Temperature'} item={temp} measure={' °C'} />
      <GetListOfItem name={'Feels like'} item={feelsLike} measure=' °C' />
      <GetListOfItem name={'Pressure'} item={pressure} measure={' hPa'} />
      <GetListOfItem name={'Humidity'} item={feelsLike} measure='%' />
      <GetListOfItem name={'Wind'} item={windSpeed} measure=' metre/sec' />
    </DetailList>
  )
}