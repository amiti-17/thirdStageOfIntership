import { gql } from "@apollo/client";

export const auth = {
  login: gql`
    mutation Login($input: AuthLoginInput!) {
      login(authLoginInput: $input) {
        access_token
      }
    }
  `,
}