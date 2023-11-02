import { Box, Collapse } from "@mui/material";
import { useState } from "react";
import style from "./style.module.css";
import { GetListOfItem } from "../../GetListOfItem";
import { getDate } from "functions/timeAndDate/getDate";
import { getTime } from "functions/timeAndDate/getTime";
import { ShowCurrentTempWithIcon } from "../../DetailHeader/components/ShowCurrentTempWithIcon";
import { DetailList } from "../../DetailList";

export function DailyFooterItem({ item }: { item: string }) {

  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const currentDay = JSON.parse(item);
  const { 
    dt, 
    humidity, 
    sunrise, 
    sunset, 
    temp,
    weather, 
    wind_speed: windSpeed,
    summary,
  }: {
    dt: number, 
    humidity: number, 
    sunrise: number, 
    sunset: number, 
    temp: { min: number, max: number, day: number, morn: number, night: number, eve: number},
    weather: ({ icon: string, description: string })[], 
    wind_speed: number,
    summary: string,
  } = currentDay;

  return (
    <DetailList>
      <Box 
        className={style.listItemWrapper} 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(prev => !prev)
        }}
      >
        <ShowCurrentTempWithIcon icon={weather[0].icon} temp={temp.eve} summary={summary} />
        <GetListOfItem name={"Date"} item={getDate(new Date(Number(dt) * 1000))} />
        <Collapse in={isOpen}>
          {/* <GetListOfItem name={"Time"} item={getTime(new Date(Number(dt) * 1000))} /> */}
          <GetListOfItem name={"Sunrise"} item={getTime(new Date(Number(sunrise) * 1000))} />
          <GetListOfItem name={"Sunset"} item={getTime(new Date(Number(sunset) * 1000))} />
          <GetListOfItem name={'Min temperature'} item={temp.min} measure={' °C'} />
          <GetListOfItem name={'Max temperature'} item={temp.max} measure={' °C'} />
          <GetListOfItem name={'Day temperature'} item={temp.day} measure={' °C'} />
          <GetListOfItem name={'Morn temperature'} item={temp.morn} measure={' °C'} />
          <GetListOfItem name={'Night temperature'} item={temp.night} measure={' °C'} />
          <GetListOfItem name={'Ave temperature'} item={temp.eve} measure={' °C'} />
          <GetListOfItem name={"Humidity"} item={humidity} measure={'%'} />
          <GetListOfItem name={'Wind'} item={windSpeed} measure=' metre/sec' />
        </Collapse>
        
      </Box>
    </DetailList>
    
  )
}