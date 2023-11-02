import { useMutation, useQuery } from "@apollo/client";
import { weathers } from "Apollo/queries/weathers";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { locations } from "Apollo/queries/locations";
import CircularIndeterminate from "components/Common/CircularIndeterminate";
import { HeaderWeatherCard } from "./components/HeaderWeatherCard";
import { FooterWeatherCard } from "./components/FooterWeatherCard";
import { MainWeatherCard } from "./components/MainWeatherCard";
import { OverLayLayout } from "./components/OverLayLayout";
import { DetailWeather } from "./components/DetailWeather";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { Weather } from "config/system/types/Weather";
import { UserContext } from "Contexts/userContext";
import { ModalLayoutContext } from "Contexts/modalLayoutContext";
import { cssConstants } from "config/system/constants/cssConstants";
import { isWeatherNeedUpdate } from "functions/timeAndDate/isWeatherNeedUpdate";
import { WeatherCardStyled } from "./styled/WeatherCardStyled";


export function WeatherCard({ place }: {place: LocationFetchedFromSearchString}) {

  const [ currentWeather, setCurrentWeather ] = useState<Weather>();
  const [ deletePlace ] = useMutation(locations.removeLocations);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ getUpdatedWeather, {loading: updateWeatherLoading} ] = useMutation(weathers.updateWeather);
  const { data, loading } = useQuery(weathers.getById, { variables: { input: place.id }, onCompleted(data) {
    setCurrentWeather(data.getWeather);
  }, });
  const { user } = useContext(UserContext);

  const onDeleteHandler = (locationsId, usersId) => {
    deletePlace({
      variables: {
        locationsId,
        usersId,
      }
    })
  }

  useEffect(() => {
    if (currentWeather && isWeatherNeedUpdate(currentWeather.current.dt)) {
      getUpdatedWeather({ variables: {
        coordinates: { lat: place.lat, lon: place.lon },
        id: currentWeather.id,
      }, onCompleted(data) {
        setCurrentWeather(data.updateWeather);
      },});
    }
  }, [data]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = cssConstants.hidden;
    } else {
      document.body.style.overflow = cssConstants.visible;
    }
  }, [isModalOpen]);

  return (
    <Box onClick={() => setIsModalOpen(prev => !prev)}>
      <ModalLayoutContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        { loading && updateWeatherLoading && !currentWeather && <CircularIndeterminate /> }
        {isModalOpen && !loading && !updateWeatherLoading && <OverLayLayout><DetailWeather weather={currentWeather} place={place} /></OverLayLayout>}
        { 
          !loading && !updateWeatherLoading && currentWeather &&
            <WeatherCardStyled direction='column' gap='10px'>
              <HeaderWeatherCard 
                name={place.name}
                current={currentWeather.current}
                onDeleteHandler={onDeleteHandler.bind(null, place.id, user.id)}
              />
              <MainWeatherCard currentW={currentWeather.current.current} />
              <FooterWeatherCard daily={currentWeather.days} />
            </WeatherCardStyled>
        }
      </ModalLayoutContext.Provider>
      
    </Box>
  )
}
