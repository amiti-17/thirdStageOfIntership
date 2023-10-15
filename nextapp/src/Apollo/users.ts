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

export type SafeUserType = {
  __typename: 'SafeUser',
  name: string,
  email: string,
  id: number,
}

export const listAll = gql`
  {
    users{
      id 
      email
      name
    }
  }
`

export const getByEmail = gql`
  {
    user(email: $input) {
      id
      name
      email
    }
  }
`

export const removeUser = gql`
  mutation RemoveUser($input: Int!) {
    removeUser(id: $input) {
      id
      email
    }
  }
`

export const createUser = gql`
  mutation CreateUser($input: CreateUserInput!){
    createUser(createUserInput: $input){
      id
      email
      name
      password
      
    }
  }
`