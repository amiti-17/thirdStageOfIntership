import { gql } from "@apollo/client";

export const auth = {
  login: gql`
    mutation Login($input: AuthLoginInput!) {
      login(authLoginInput: $input) {
        status
      }
    }
  `,
  logout: gql`
    mutation logout {
      logout {
        status
      }
    }
  `,
  refreshToken: gql`
    mutation GetNewAccessToken{
      refreshToken {
        status
        __typename
      }
    }
  `
}