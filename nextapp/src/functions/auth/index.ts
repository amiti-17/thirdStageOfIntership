import { useLazyQuery, useQuery } from "@apollo/client";
import { LoginType } from "../../config/system/types/login";
import { fetchPost } from "../fetch/fetchPost";
import { auth } from "../../Apollo/auth";

export async function login(loginData: LoginType) {
  const response = await fetchPost('auth/login', loginData);

  return response;
}

// export async function useLogin(loginData: LoginType) {
  

//   return {
//     getToken: getToken.bind(null, loginData), 
//     error, 
//     loading, 
//     data
//   };
// }