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
  updateWeather: gql`
    mutation updateWeather($coordinates: CoordinatesInput!, $id: Int!){
      updateWeather(coordinates: $coordinates, id: $id) {
        id
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
