import { Pressable, View } from "react-native";
import { useCallback, useContext, useState } from "react";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { weathers } from "Apollo/queries/weathers";
import { locations } from "Apollo/queries/locations";
import { getNameOfPlace } from "functions/places/getNameOfPlace";
import { WeatherHeader } from "./components/WeatherHeader/index";
import { WeatherMain } from "./components/WeatherMain";
import { MyActivityLoader } from "components/MyActivityLoader";
import { WeatherModal } from "./components/WeatherModal";
import { CurrentUserContext } from "context/CurrentUserContext";
import { WeatherContext } from "context/WeatherContext";
import { LocationType } from "config/system/types/Locations";
import { Weather } from "config/system/types/Weather";
import { strConstants } from "config/system/constants/strConstants";

type CardProps = {
  location: LocationType,
}

export const Card = ({ location }: CardProps) => {

  const [ weather, setWeather ] = useState<Weather>();
  const [ deletePlace, { loading: loadingDelete } ] = useMutation(locations.removeLocation);
  const { currentUser } = useContext(CurrentUserContext);
  const { setLocations, setModalData, setIsModal } = useContext(WeatherContext);
  const { data: dataQuery, loading: loadingQuery } = useQuery(weathers.getOne, { variables: { input: location.id }, onCompleted(data) {
    if (data?.getWeather) {
      setWeather(data?.getWeather);
    }
  }, });

  useSubscription(weathers.onWeatherUpdated, {
    variables: {
      input: dataQuery?.getWeather.id,
    },
    onData(options) {
      setWeather(options.data?.data.weatherUpdated);
    },
  });

  useSubscription(locations.onLocationAdded, {
    variables: { input: currentUser?.id },
    onData(options) {
      setLocations(prev => {
        if (prev.find(el => el.id === options.data?.data.locationAdded.id)) {
          return prev;
        }
        return [options.data?.data.locationAdded, ...prev ];
      })
    },
  });

  useSubscription(locations.onLocationRemoved, {
    variables: { input: currentUser?.id },
    onData(options) {
      setLocations(prev => {
        return [ ...prev.filter(el => !(el.id === options.data?.data.locationRemoved.id)) ];
      })
    },
  });

  const onDeleteHandler = useCallback((locationsId: number, usersId: number) => {
    deletePlace({
      variables: {
        locationsId,
        usersId,
      }
    })
  }, [location.id, location.id]);

  const currentWeather = weather?.current.current && JSON.parse(weather?.current.current);

  if (loadingQuery) {
    return <MyActivityLoader />
  }

  return (
    <Pressable onPress={() => {
      setModalData(() => ({
        days: weather?.days,
        nameOfPlace: getNameOfPlace(location),
      }));
      setIsModal(prev => !prev);
    }}>
      <View style={style.card}>
        <WeatherHeader
          title={getNameOfPlace(location)}
          description={weather?.current && currentWeather ? currentWeather.weather[0].description : strConstants.emptyStr}
          loadingDelete={loadingDelete}
          onDeleteHandler={onDeleteHandler.bind(null, location.id, currentUser?.id)}
        />
        <WeatherMain current={weather?.current} />
        <WeatherModal />
      </View>
    </Pressable>
  )
}

const style = {
  card: {

  }
}