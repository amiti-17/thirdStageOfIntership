import { env } from "config/system/env";
import { LocationType } from "config/system/types/Locations";

export async function getLocationsAttr(nameOfPlace: string): Promise<LocationType[]> {
  const url = env.NEXT_PUBLIC_OW_URL_GEO + 
    `appid=${env.NEXT_PUBLIC_OW_API_KEY}` + 
    `&q=${nameOfPlace}` +
    `&limit=${Number(env.NEXT_PUBLIC_QUANTITY_FOR_OPTIONS)}`
  const myPlace = await fetch(url);
  return await myPlace.json();
}
