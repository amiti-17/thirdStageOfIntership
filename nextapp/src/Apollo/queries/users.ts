import { gql } from "@apollo/client";

export const users = {
  createUser: gql`
    mutation CreateUser($input: CreateUserInput!){
      createUser(createUserInput: $input){
        id
        email
        name
        password
      }
    }
  `,
  listAll: gql`
    {
      users{
        id
        email
        name
      }
    }
  `,
  getByEmail: gql`
    {
      user(email: $input) {
        id
        name
        email
      }
    }
  `,
  removeUser: gql`
    mutation RemoveUser($input: Int!) {
      removeUser(id: $input) {
        id
        email
      }
    }
  `,
  getCurrentUser: gql`
    query getCurrentUser {
      getCurrentUser {
        name
        email
        id
        locations {
          id
          lat
          lon
          name
          state
          country
        }
      }
    }
  `,
}
