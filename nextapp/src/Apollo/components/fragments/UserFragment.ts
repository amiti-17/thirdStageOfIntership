import gql from "graphql-tag";

export const UserFragment = gql`
  fragment UserFragment on SafeUser {
    id
    name
    email
  }
`