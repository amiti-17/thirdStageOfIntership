export async function fetchParsedJson(url: string) {
  const response = await fetch(url);
  const parsedJson = await response.json();
  return parsedJson;
}