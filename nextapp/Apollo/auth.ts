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
        status
        __typename
      }
    }
  `
}

export type refreshTokenReturnType = {
  status: boolean,
  __typename: string,
}