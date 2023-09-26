import { gql } from "@apollo/client";

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

export const listAll = gql`
  {
    users{
      id 
      email 
      password 
      name
    }
  }
`

export const getByEmail = gql`
  {
    user(email: $input) {
      id
      password
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