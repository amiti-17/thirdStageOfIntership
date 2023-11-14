import { Collapse } from "@mui/material";
import { useState } from "react";
import { makeFirstCapitalize } from "functions/makeFirstCapitalize";
import { getDate } from "functions/timeAndDate/getDate";
import { ShowCurrentTempWithIcon } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailWeather/DetailHeader/components/ShowCurrentTempWithIcon";
import { DetailList } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailWeather/DetailFooter/components/DailyFooterItem/components/DetailList";
import { DetailedList } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailedList";
import { GetListOfItem } from "components/Weather/WeatherWrapper/components/WeatherCards/components/weatherCard/components/DetailedList/components/DetailWeatherMatched/components/GetListOfItem";
import { DailyFooterStyled } from "./styled/DailyFooterStyled";
import { strConstants } from "config/system/constants/strConstants";
import { digits } from "config/system/constants/digits";

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
      <DailyFooterStyled
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(prev => !prev)
        }}
      >
        <ShowCurrentTempWithIcon icon={weather[0].icon} temp={temp.eve} summary={summary} margin={'0 auto'} />
        <GetListOfItem name={makeFirstCapitalize(strConstants.date)} item={getDate(new Date(Number(dt) * digits[1000]))} />
        <Collapse in={isOpen}>
          <DetailedList weather={currentDay}/>
        </Collapse>
        
      </DailyFooterStyled>
    </DetailList>
  )
}