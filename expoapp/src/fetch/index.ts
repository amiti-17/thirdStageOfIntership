export async function baseFetch(url: string) {
  const result = await fetch(url);
  return await result.json();
}
