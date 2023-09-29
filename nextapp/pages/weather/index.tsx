import React from "react";
import { WeatherLayout } from "../../src/components/Weather/WeatherLayout";
import { useQuery } from "@apollo/client";
import { users } from "../../Apollo/users";

export default function Login() {
  const {data, error, loading} = useQuery(users.listAll);
  
  
  React.useEffect(() => {
    console.log(error);
    console.log(data?.users);
  }, [error, data])
  return (
    <WeatherLayout>
      you login successfully

    </WeatherLayout>
  );
}
