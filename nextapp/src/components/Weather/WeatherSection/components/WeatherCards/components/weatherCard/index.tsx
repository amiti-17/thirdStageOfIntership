import { useMutation, useQuery } from "@apollo/client";
import { weathers } from "Apollo/queries/weathers";
import { Box, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { locations } from "Apollo/queries/locations";
import CircularIndeterminate from "components/CircularIndeterminate";
import { HeaderWeatherCard } from "./components/HeaderWeatherCard";
import { FooterWeatherCard } from "./components/FooterWeatherCard";
import { MainWeatherCard } from "./components/MainWeatherCard";
import { OverLayLayout } from "./components/OverLayLayout";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { UserContext } from "Contexts/userContext";
import style from "./style.module.css";
import { ModalLayoutContext } from "Contexts/modalLayoutContext";
import { DetailWeather } from "./components/DetailWeather";
import { Weather } from "config/system/types/Weather";


export function WeatherCard({ place }: {place: LocationFetchedFromSearchString}) {

  const { data, loading } = useQuery<Weather>(weathers.getById, { variables: { input: place.id } });
  const { user } = useContext(UserContext);
  const [ deletePlace ] = useMutation(locations.removeLocations);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const onDeleteHandler = (locationsId, usersId) => {
    deletePlace({
      variables: {
        locationsId,
        usersId,
      }
    })
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  })

  return (
    <Box onClick={() => setIsModalOpen(prev => !prev)}>
      <ModalLayoutContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        { loading && !data?.getWeather && <CircularIndeterminate /> }
        {isModalOpen && !loading && <OverLayLayout><DetailWeather weather={data} place={place} /></OverLayLayout>}
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
      </ModalLayoutContext.Provider>
      
    </Box>
  )
}
