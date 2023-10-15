import { LocationType } from "Apollo/locations";
import { getWeatherIcon } from "functions/fetch/getWeatherIcon";
import { getUrlForIcon } from "functions/getUrlForIcon";
import { useEffect, useState } from "react";

export function WeatherCard({ location }: {location: LocationType}) {

  // useEffect(() => {
  //   (async () => {
  //     const currentIconBlob = await getWeatherIcon(JSON.parse(location.weather.current.current).weather[0].icon)
  //     const currentIcon = URL.createObjectURL(currentIconBlob);
  //     console.log("here: ", currentIcon);
  //     setIcon(currentIcon);
  //   })()
  // }, []);

  

  return (
    <img src={getUrlForIcon(JSON.parse(location.weather.current.current).weather[0].icon)}/>
  )
}