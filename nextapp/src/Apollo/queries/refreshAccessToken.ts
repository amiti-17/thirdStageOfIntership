import { auth } from "./auth";

export const refreshAccessToken = async (client) => {
  const response = await client.mutate({
      mutation: auth.refreshToken,
  });

  const accessTokenStatus = response.data;
  console.log(accessTokenStatus);
  return accessTokenStatus;
};