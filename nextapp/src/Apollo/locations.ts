import { gql } from "@apollo/client";

export const locations = {
  getById: gql`
    query LocationById($id: Int!) {
      locationById(id: $id) {
        id
        lat
        lon
      }
    }
  `,
  getByCoordinates: gql`
    query LocationByCoordinates($coordinates: FindOneByCoordinatesInput!) {
      locationByCoordinates(coordinates: $coordinates) {
        id 
        lat
        lon
        name
        state
        country
      }
    }
  `,
  getPlaces: gql`
    query getPlaces($input: Int!) {
      getListOfPlaces(quantity: $input) {
        id
        name
        state
        country
      }
    }
  `,
  updateUsersInfoAndGetWeather: gql`
    mutation updateLocations($input: [UpdateUserLocationsInput!]!) {
      updateUsersLocations(updateUserLocationInput: $input) {
        id
        lat
        lon
        name
        state
        country
        weather {
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
    }
  `,
  createLocation: gql`
    mutation CreateLocation($coordinates: CreateLocationInput!) {
      createLocation(createLocationInput: $coordinates) {
        lat
        lon
        id
      }
    }
  `,
  listAll: gql`
    {
      locations{
        id 
        lat 
        lon
      }
    }
  `,
  removeLocations: gql`
    mutation RemoveLocation($id: Int!) {
      removeLocation(id: $id) {
        id
        lat
        lon
      }
    }
  `
  
}

export type LocationType = {
  name: string,
  country?: string,
  state?: string,
  lat: number,
  lon: number,
  id: number,
}