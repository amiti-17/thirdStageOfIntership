import { weatherConstants } from "config/system/constants/weatherConstants";

export const isWeatherNeedUpdate = (dt: number): boolean => {
  return (new Date().getTime() / 1000) - dt > weatherConstants.howOldCurrentWeatherCouldBe;
}