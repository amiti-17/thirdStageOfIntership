import { gql } from "@apollo/client";

export const users = {
  getCurrentUser: gql`
    query getCurrentUser {
      getCurrentUser {
        ...UserFragment
        locations {
          ...BaseLocationFragment
        }
      }
    }
  `,
}
