import { gql } from "@apollo/client";

export const auth = {
  login: gql`
    query Login($authLoginInput: AuthLoginInput!) {
      login(authLoginInput: $authLoginInput) {
        token
      }
    }
  `,
}