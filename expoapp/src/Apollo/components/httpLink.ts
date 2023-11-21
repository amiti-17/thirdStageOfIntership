import { HttpLink } from "@apollo/client";

export const httpLink = new HttpLink({
  uri: "http://192.168.31.225:8080/graphql",
  credentials: 'include',
  fetchOptions: {
    reactNative: { textStreaming: true },
  },
});
