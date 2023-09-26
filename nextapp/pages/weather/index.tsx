import React from "react";
import { WeatherLayout } from "../../components/Weather/WeatherLayout";
import { useQuery } from "@apollo/client";
import { users } from "../../Apollo/users";

export default function Login() {
  const {data, error, loading} = useQuery(users.listAll);
  console.log(error)
  console.log(data?.users);
  // React.useEffect(() => {
    
  // }, [])
  return (
    <WeatherLayout>
      you login successfully

    </WeatherLayout>
  );
}
