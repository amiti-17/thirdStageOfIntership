import { Box } from "@mui/material";
import { WeatherContext } from "../../Contexts/weatherContext";
import Footer from "../Footer";
import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { auth } from "../../../Apollo/auth";
import { RefreshTokenContext } from "../../Contexts/refreshTokenContext";
import CustomError from "../../CustomError";
import { useRouter } from "next/router";

export function WeatherLayout({ children } : { children: React.ReactNode }): JSX.Element {

  const [refreshToken, {error}] = useMutation(auth.refreshToken);
  const [shouldUpdateRefreshToken, setShouldUpdateRefreshToken] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("refresh token: ", shouldUpdateRefreshToken)
    refreshToken().catch(e => {
      if (error && error.graphQLErrors.find(el => el.message === CustomError.unauthorized)?.message === CustomError.unauthorized) {
        console.log(error);
        router.replace('/'); //TODO: make some alert, that credential was expired.
      }
    })
  }, [setShouldUpdateRefreshToken, error]);
  


  return (
    <WeatherContext.Provider value={{}}>
      <RefreshTokenContext.Provider value={{ shouldUpdateRefreshToken, setShouldUpdateRefreshToken }}>
 
          <Box sx={{maxWidth: '1200px', mx: 'auto'}}>
              {children}
            <Footer></Footer>
          </Box>
        
      </RefreshTokenContext.Provider>
        
    </WeatherContext.Provider>
  )
}