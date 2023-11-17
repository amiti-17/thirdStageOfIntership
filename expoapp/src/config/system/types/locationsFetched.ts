import { Weather } from "./Weather";

export interface LocationFetchedFromSearchString {
  id: number,
  country?: string,
  lat: number,
  lon: number,
  name: string,
  state?: string,
  weather?: Weather,
}
