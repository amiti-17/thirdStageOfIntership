import gql from "graphql-tag";

export const CurrentFragment = gql`
  fragment CurrentFragment on CurrentW {
    id
    dt
    current
  }
`