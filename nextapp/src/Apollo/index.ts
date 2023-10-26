import {
  ApolloClient,
  InMemoryCache,
  from
} from "@apollo/client";

import { fetchConstants } from "config/system/constants/fetchConstants";
import { splitLink } from "./components/splitLink";
import { errorLink } from "./components/errorLink";

export let globalClient;

export default function getClient(router) {
  const client = new ApolloClient({
    // uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
    link: from([errorLink(router), splitLink]),
    cache: new InMemoryCache(),
    credentials: fetchConstants.include,
  });
  globalClient = client;
  return client;
};