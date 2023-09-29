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