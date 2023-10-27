import { useMutation, useQuery } from "@apollo/client";
import { weathers } from "Apollo/queries/weathers";
import Stack from '@mui/material/Stack';
import { useContext } from "react";
import { locations } from "Apollo/queries/locations";
import CircularIndeterminate from "components/CircularIndeterminate";
import { HeaderWeatherCard } from "./components/HeaderWeatherCard";
import { FooterWeatherCard } from "./components/FooterWeatherCard";
import { MainWeatherCard } from "./components/MainWeatherCard";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { UserContext } from "Contexts/userContext";
import style from "./style.module.css";


export function WeatherCard({ place }: {place: LocationFetchedFromSearchString}) {

  const { data, loading } = useQuery(weathers.getById, { variables: { input: place.id } });
  const { user } = useContext(UserContext);
  const [ deletePlace ] = useMutation(locations.removeLocations);

  const onDeleteHandler = (locationsId, usersId) => {
    deletePlace({
      variables: {
        locationsId,
        usersId,
      }
    })
  }

  return (
    <>
      { loading && !data?.getWeather && <CircularIndeterminate /> }
      { 
        !loading && data?.getWeather &&
          <Stack direction='column' gap='10px' className={style.weatherCard}>
            <HeaderWeatherCard 
              name={place.name}
              current={data?.getWeather.current}
              onDeleteHandler={onDeleteHandler.bind(null, place.id, user.id)}
            />
            <MainWeatherCard currentW={data?.getWeather.current.current} />
            <FooterWeatherCard daily={data?.getWeather.days} />
          </Stack>
      }
    </>
  )
}
