import { gql } from "@apollo/client";

export const weathers = {
  getById: gql`
    query getWeather($input: Int!) {
      getWeather(id: $input) {
        id
        currentId
        current {
          dt
          current
        }
        days {
          dt
          daily
        }
      }
    }
  `,
  onWeatherUpdated: gql`
    subscription onWeatherUpdated {
      weatherUpdated {
        id
        currentId
        current {
          dt
          current
        }
        days {
          dt
          daily
        }
      }
    }
  `,
}
