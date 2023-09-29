import { gql } from "@apollo/client";

export const auth = {
  login: gql`
    mutation Login($input: AuthLoginInput!) {
      login(authLoginInput: $input) {
        status
      }
    }
  `,
  refreshToken: gql`
    mutation GetNewAccessToken{
      refreshToken {
        access_token
        __typename
      }
    }
  `
}

