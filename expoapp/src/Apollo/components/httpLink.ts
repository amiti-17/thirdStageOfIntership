import { HttpLink } from "@apollo/client";

export const httpLink = new HttpLink({
  uri: "http://192.168.0.89:8080/graphql",
  credentials: 'include',
  fetchOptions: {
    reactNative: { textStreaming: true },
  },
});
