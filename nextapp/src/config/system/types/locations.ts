export interface LocationFetchedFromSearchString {
  country?: string,
  lat: number,
  lon: number,
  name: string,
  local_names: {
    [index: string]: string,
  }
  state?: string,
}