import { fetchConstants } from "config/system/constants/fetchConstants";
import CustomError from "../../CustomError";

export async function fetchPost(url: string, data: any) {
  const headers = new Headers;
  headers.append(fetchConstants.contentType, fetchConstants.applicationJson);
  const body = JSON.stringify(data);

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + url, {
      method: fetchConstants.post,
      headers,
      body,
    });
    if (response.status === 401) {
      throw new CustomError(CustomError.unauthorizedMsg);
    }
    const parsedJson = await response.json();
    return parsedJson;
  } catch (error) {
    if (error.name === CustomError.name) {
      throw new CustomError(CustomError.unauthorizedMsg);
    }
    throw new CustomError(CustomError.unrecognizedFetchError);
  }
  
  
  
  
}