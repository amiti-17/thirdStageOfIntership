import { Box, Collapse } from "@mui/material";
import { useState } from "react";
import { getDate } from "functions/timeAndDate/getDate";
import { ShowCurrentTempWithIcon } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailWeather/DetailHeader/components/ShowCurrentTempWithIcon";
import { DetailList } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailWeather/DetailFooter/components/DailyFooterItem/components/DetailList";
import { DetailedList } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailedList";
import { GetListOfItem } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailedList/components/DetailWeatherMatched/components/GetListOfItem";

export function DailyFooterItem({ item }: { item: string }) {

  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const currentDay = JSON.parse(item);
  const { 
    dt,
    temp,
    weather,
    summary,
  } = currentDay;

  return (
    <DetailList>
      <Box 
        className={'style.listItemWrapper'} 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(prev => !prev)
        }}
      >
        <ShowCurrentTempWithIcon icon={weather[0].icon} temp={temp.eve} summary={summary} />
        <GetListOfItem name={"Date"} item={getDate(new Date(Number(dt) * 1000))} />
        <Collapse in={isOpen}>
          <DetailedList weather={currentDay}/>
        </Collapse>
        
      </Box>
    </DetailList>
  )
}