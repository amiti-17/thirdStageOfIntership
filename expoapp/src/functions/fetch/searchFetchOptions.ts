import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";

export async function getLocationsAttr(nameOfPlace): Promise<LocationFetchedFromSearchString[]> {
  const url = process.env.NEXT_PUBLIC_OW_URL_GEO + 
    `appid=${process.env.NEXT_PUBLIC_OW_API_KEY}` + 
    `&q=${nameOfPlace}` +
    `&limit=${Number(process.env.NEXT_PUBLIC_QUANTITY_FOR_OPTIONS)}`
  const myPlace = await fetch(url);
  return await myPlace.json();
}