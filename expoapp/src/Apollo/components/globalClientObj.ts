import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export const globalClientObj: { client: ApolloClient<NormalizedCacheObject> } = {
  client: {} as ApolloClient<NormalizedCacheObject>,
};