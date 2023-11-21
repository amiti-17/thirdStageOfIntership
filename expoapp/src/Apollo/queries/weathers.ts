import { gql } from "@apollo/client";

export const weathers = {
  getOne: gql`
    query getWeather($input: Int!) {
      getWeather(id: $input) {
        current {
          ...CurrentFragment
        }
        days {
          ...DaysFragment
        }
        ...WeatherFragment
      }
    }
  `,
  onWeatherUpdated: gql`
    subscription onWeatherUpdated($input: Int!) {
      weatherUpdated(weatherId: $input) {
        current {
          ...CurrentFragment
        }
        days {
          ...DaysFragment
        }
        ...WeatherFragment
      }
    }
  `,
}
