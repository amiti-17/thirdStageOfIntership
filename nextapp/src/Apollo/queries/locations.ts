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
  `,
  onLocationAdded: gql`
    subscription onLocationAdded {
      locationAdded {
        id
        lat
        lon
        name
        weather {
          id
          currentId
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