import { gql } from "@apollo/client";

export const locations = {
  getOptions: gql`
    query getPlaces($input: Int!) {
      getListOfPlaces(quantity: $input) {
        ...BaseLocationFragment
      }
    }
  `,
  createLocation: gql`
    mutation createLocation($input: CreateLocationInput!, $usersId: Int!) {
      createLocation(locationInput: $input, usersId: $usersId) {
        ...BaseLocationFragment
        ...UserIdObjFragment
        weatherId
      }
    }
  `,
  removeLocation: gql`
    mutation removeLocation($locationsId: Int!, $usersId: Int!) {
      removeLocation(locationsId: $locationsId, usersId: $usersId) {
        weatherId
        ...BaseLocationFragment
        ...UserIdObjFragment
      }
    }
  `,
  onLocationAdded: gql`
    subscription onLocationAdded($input: Int!) {
      locationAdded(usersId: $input) {
        weather {
          id
          currentId
        }
        ...BaseLocationFragment
        ...UserIdObjFragment
      }
    }
  `,
  onLocationRemoved: gql`
    subscription onLocationRemoved($input: Int!) {
      locationRemoved(usersId: $input) {
        ...BaseLocationFragment
        ...UserIdObjFragment
      }
    }
  `,
  
}
