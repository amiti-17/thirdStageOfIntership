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
import { cssConstants } from "config/system/constants/cssConstants";
import { UserContext } from "Contexts/userContext";
import { ModalLayoutContext } from "Contexts/modalLayoutContext";
import { WeatherCardStyled } from "./styled/WeatherCardStyled";


export function WeatherCard({ place }: {place: LocationFetchedFromSearchString}) {

  const { user } = useContext(UserContext);
  const { data, loading } = useQuery(weathers.getById, { variables: { input: place.id } });
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
      document.body.style.overflow = cssConstants.hidden;
    } else {
      document.body.style.overflow = cssConstants.visible;
    }
  }, [isModalOpen]);

  return (
    <Box onClick={() => setIsModalOpen(prev => !prev)}>
      <ModalLayoutContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        { loading && !data?.getWeather && <CircularIndeterminate /> }
        {isModalOpen && !loading && <OverLayLayout><DetailWeather weather={data?.getWeather} place={place} /></OverLayLayout>}
        { 
          !loading && data?.getWeather &&
            <WeatherCardStyled direction='column' gap='10px'>
              <HeaderWeatherCard 
                name={place.name}
                current={data?.getWeather.current}
                onDeleteHandler={onDeleteHandler.bind(null, place.id, user.id)}
              />
              <MainWeatherCard currentW={data?.getWeather.current.current} />
              <FooterWeatherCard daily={data?.getWeather.days} />
            </WeatherCardStyled>
        }
      </ModalLayoutContext.Provider>
      
    </Box>
  )
}
