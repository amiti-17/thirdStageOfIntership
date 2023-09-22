import { LoginType } from "../../config/system/types/login";
import { fetchPost } from "../fetch/fetchPost";

export async function login(loginData: LoginType) {
  const response = await fetchPost('auth/login', loginData);

  return response;
}