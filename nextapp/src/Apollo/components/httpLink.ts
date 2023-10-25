import { HttpLink } from "@apollo/client";

import { fetchConstants } from "config/system/constants/fetchConstants";

export const httpLink = new HttpLink({ 
  uri: process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL,
  credentials: fetchConstants.include,
})