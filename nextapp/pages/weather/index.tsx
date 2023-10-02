import React from "react";
import { WeatherLayout } from "../../src/components/Weather/WeatherLayout";
import { useLazyQuery } from "@apollo/client";
import { users } from "../../Apollo/users";
import CustomError from "../../src/CustomError";
import { RefreshTokenContext } from "../../src/Contexts/refreshTokenContext";
import { useRouter } from "next/router";
import { handleErrorInQueries } from "../../src/functions/fetch/handleErrorsInQueries";
import { Header } from "../../src/components/Weather/Header";
import { Footer } from "../../src/components/Weather/Footer";

const customError = new CustomError('');

export default function Login() {
  const [getData, {data, error, loading}] = useLazyQuery(users.listAll);
  const { shouldUpdateRefreshToken, setShouldUpdateRefreshToken } = React.useContext(RefreshTokenContext);
  const router = useRouter();
  
  React.useEffect(() => {
    getData();
  }, []);

  

  React.useEffect(() => {
    handleErrorInQueries(getData, data, error, router,shouldUpdateRefreshToken, setShouldUpdateRefreshToken);
  
    // console.log(Object.keys(error).forEach(key => console.log(error[key])));
    console.log(data?.users);
  }, [error, data])
  return (
    <WeatherLayout>
      <Header />
        you login successfully
      <Footer />
    </WeatherLayout>
  );
}
