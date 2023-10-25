import { Weather } from "Apollo/queries/locations";

export interface LocationFetchedFromSearchString {
  id: number,
  country?: string,
  lat: number,
  lon: number,
  name: string,
  state?: string,
  weather?: Weather,
}