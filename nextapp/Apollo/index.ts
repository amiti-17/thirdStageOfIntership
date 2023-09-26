import { ApolloClient, InMemoryCache } from "@apollo/client";
import { publicConfig } from "../src/config/public";

const client = new ApolloClient({
  uri: publicConfig.BASE_URL + 'graphql',
  cache: new InMemoryCache(),
})

export default client;