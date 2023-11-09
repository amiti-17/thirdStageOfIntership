import gql from "graphql-tag";

export const DaysFragment = gql`
  fragment DaysFragment on DaysW {
    id
    dt
    daily
  }
`