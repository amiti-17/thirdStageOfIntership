import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { weathers } from "Apollo/queries/weathers";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { locations } from "Apollo/queries/locations";
import CircularIndeterminate from "components/Common/CircularIndeterminate";
import { HeaderWeatherCard } from "./components/HeaderWeatherCard";
import { FooterWeatherCard } from "./components/FooterWeatherCard";
import { MainWeatherCard } from "./components/MainWeatherCard";
import { DetailWeather } from "./components/DetailWeather";
import { OverLayLayout } from "components/Weather/WeatherWrapper/components/WeatherCards/components/OverLayLayout";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { cssConstants } from "config/system/constants/cssConstants";
import { UserContext } from "Contexts/userContext";
import { ModalLayoutContext } from "Contexts/modalLayoutContext";
import { WeatherCardStyled } from "./styled/WeatherCardStyled";
import { Weather } from "config/system/types/Weather";


export function WeatherCard({ place }: {place: LocationFetchedFromSearchString}) {

  const [ weather, setWeather ] = useState<Weather>();
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  const { loading: loadingQuery } = useQuery(weathers.getById, { variables: { input: place.id }, onCompleted(data) {
    if (data?.getWeather) {
      setWeather(data?.getWeather);
    }
  }, });

  const [ deletePlace ] = useMutation(locations.removeLocations);

  useSubscription(weathers.onWeatherUpdated, { onData(options) {
    setWeather(options.data?.data.weatherUpdated);
  },});

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = cssConstants.hidden;
    } else {
      document.body.style.overflow = cssConstants.visible;
    }
  }, [isModalOpen]);

  const onDeleteHandler = (locationsId, usersId) => {
    deletePlace({
      variables: {
        locationsId,
        usersId,
      }
    })
  }

  return (
    <Box onClick={() => setIsModalOpen(prev => !prev)}>
      <ModalLayoutContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        { (loadingQuery || !weather) && <CircularIndeterminate /> }
        { 
          (isModalOpen && !loadingQuery && weather) &&
            <OverLayLayout><DetailWeather weather={weather} place={place} /></OverLayLayout>
        }
        {
          !(loadingQuery || !weather) &&
            <WeatherCardStyled direction='column' gap='10px'>
              <HeaderWeatherCard
                name={place.name}
                current={weather.current}
                onDeleteHandler={onDeleteHandler.bind(null, place.id, user.id)}
              />
              <MainWeatherCard currentW={weather.current.current} />
              <FooterWeatherCard daily={weather.days} />
            </WeatherCardStyled>
        }
      </ModalLayoutContext.Provider>
    </Box>
  )
}
