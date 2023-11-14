import { Box } from "@mui/material";
import { useMemo } from "react";
import { restructureWeatherObj } from "functions/weather/restructureWeatherObj";
import { DetailWeatherMatched } from "./components/DetailWeatherMatched";
import { DetailForWeatherType } from "config/system/types/DetailForWeather";

export const DetailedList = (props: DetailForWeatherType) => {

  const { weather } = props;

  const myWeather = useMemo(() => restructureWeatherObj(weather), [weather]);
  return (
    <Box>
      {Object.keys(myWeather).map(el => <DetailWeatherMatched key={el} name={el} item={myWeather[el]} />)}
    </Box>
  )
}

