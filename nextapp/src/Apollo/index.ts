import {
  ApolloClient,
  from,
} from "@apollo/client";
import { fetchConstants } from "config/system/constants/fetchConstants";
import { splitLink } from "./components/splitLink";
import { errorLink } from "./components/errorLink";
import { cache } from "./components/cache";

export let globalClient;

export default function getClient(router) {
  const client = new ApolloClient({
    link: from([errorLink(router), splitLink]),
    cache,
    credentials: fetchConstants.include,
  });
  globalClient = client;
  return client;
};