import { LocationType } from "Apollo/locations";
import { getUrlForIcon } from "functions/getUrlForIcon";
import { HeaderWeatherCard } from "./components/HeaderWeatherCard";
import { FooterWeatherCard } from "./components/FooterWeatherCard";
import Stack from '@mui/material/Stack';
import { MainWeatherCard } from "./components/MainWeatherCard";


export function WeatherCard({ location }: {location: LocationType}) {
  // useEffect(() => {
  //   (async () => {
  //     const currentIconBlob = await getWeatherIcon(JSON.parse(location.weather.current.current).weather[0].icon)
  //     const currentIcon = URL.createObjectURL(currentIconBlob);
  //     console.log("here: ", currentIcon);
  //     setIcon(currentIcon);
  //   })()
  // }, []);

  // console.log()
  return (
    <Stack direction='column' gap='0px'>
      <HeaderWeatherCard 
        name={location.name} 
        currentDt={location.weather.current.dt} 
        icon={JSON.parse(location.weather.current.current).weather[0].icon}
      />
      <MainWeatherCard currentW={location.weather.current.current} />
      <FooterWeatherCard daily={location.weather.days} />
    </Stack>
  )
}