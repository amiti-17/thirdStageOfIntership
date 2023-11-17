import { HttpLink } from "@apollo/client";

export const httpLink = new HttpLink({
  uri: "http://localhost:8080/graphql",
  fetchOptions: {
    reactNative: { textStreaming: true },
  },
});
