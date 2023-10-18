import { ApolloClient, InMemoryCache } from "@apollo/client";
import { fetchConstants } from "config/system/constants/fetchConstants";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
  cache: new InMemoryCache(),
  credentials: fetchConstants.include,
})

export default client;