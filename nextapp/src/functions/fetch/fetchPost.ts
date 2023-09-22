import CustomError from "../../CustomError";

export async function fetchPost(url: string, data: any) {
  const headers = new Headers;
  headers.append("Content-Type", "application/json")
  const body = JSON.stringify(data);

  try {
    const response = await fetch('http://localhost:8080/' + url, {
      method: 'POST',
      headers,
      body,
    });
    if (response.status === 401) {
      throw new CustomError(CustomError.unauthorized);
    }
    const parsedJson = await response.json();
    return parsedJson;
  } catch (error) {
    if (error.name === CustomError.name) {
      throw new CustomError(CustomError.unauthorized);
    }
    throw new CustomError(CustomError.unrecognizedFetchError);
  }
  
  
  
  
}