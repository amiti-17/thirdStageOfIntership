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
  getOptions: gql`
    query getPlaces($input: Int!) {
      getListOfPlaces(quantity: $input) {
        id
        name
        state
        country
        lat
        lon
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
    mutation createLocation($input: CreateLocationInput!, $usersId: Int!) {
      createLocation(locationInput: $input, usersId: $usersId) {
        id
        lat
        lon
        name
        country
        weatherId
        users {
          id
        }
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
    mutation removeLocation($locationsId: Int!, $usersId: Int!) {
      removeLocation(locationsId: $locationsId, usersId: $usersId) {
        id
        lat
        lon
        name
        country
        weatherId
        users {
          id
        }
      }
    }
  `,
  onLocationAdded: gql`
    subscription onLocationAdded($input: Int!) {
      locationAdded(usersId: $input) {
        id
        lat
        lon
        name
        weather {
          id
          currentId
        }
        users {
          id
        }
      }
    }
  `,
  onLocationRemoved: gql`
    subscription onLocationRemoved($input: Int!) {
      locationRemoved(usersId: $input) {
        id
        name
        lat
        lon
        users {
          id
        }
      }
    }
  `,
  
}

export type LocationType = {
  name: string,
  country?: string,
  state?: string,
  lat: number,
  lon: number,
  id: number,
  weather?: Weather,
}

export type Weather = {
  current: Current,
  days: Day[],
}

export type Current = {
  dt: number,
  current: string, // meaning json
}

export type Day = {
  dt: number,
  daily: string, // meaning json
}