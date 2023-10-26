import { useLazyQuery, useQuery } from "@apollo/client";
import { weathers } from "Apollo/queries/weathers";
import Stack from '@mui/material/Stack';
import CircularIndeterminate from "components/CircularIndeterminate";
import { LocationType } from "Apollo/queries/locations";
import { getUrlForIcon } from "functions/getUrlForIcon";
import { HeaderWeatherCard } from "./components/HeaderWeatherCard";
import { FooterWeatherCard } from "./components/FooterWeatherCard";
import { MainWeatherCard } from "./components/MainWeatherCard";
import { LocationFetchedFromSearchString } from "config/system/types/locations";
import { useEffect } from "react";


export function WeatherCard({ place }: {place: LocationFetchedFromSearchString}) {

  const { data, loading, error } = useQuery(weathers.getById, { variables: { input: place.id } });
  
  return (
    <>
      { loading && !data?.getWeather && <CircularIndeterminate /> }
      { 
        !loading && data?.getWeather &&
          <Stack direction='column' gap='0px'>
            <HeaderWeatherCard 
              name={place.name} 
              currentDt={data?.getWeather.current.dt}
              icon={JSON.parse(data?.getWeather.current.current).weather[0].icon}
            />
            <MainWeatherCard currentW={data?.getWeather.current.current} />
            <FooterWeatherCard daily={data?.getWeather.days} />
          </Stack>
      }
    </>
  )
}