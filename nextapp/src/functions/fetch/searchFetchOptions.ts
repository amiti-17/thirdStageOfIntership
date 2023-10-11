import { searchConfig } from "config/system/searchFetch";
import { LocationFetchedFromSearchString } from "config/system/types/locations";

export async function getLocationsAttr(nameOfPlace): Promise<LocationFetchedFromSearchString[]> {
  let limit = searchConfig.limitsLocationPerFetch;
  const myPlace = await fetch(process.env.NEXT_PUBLIC_OW_URL_GEO + `appid=${process.env.NEXT_PUBLIC_OW_API_KEY}&q=${nameOfPlace}&limit=${limit}`);
  return await myPlace.json();
}