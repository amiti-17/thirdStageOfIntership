import { LocationType } from "./Locations"

export type UserType = {
  name: string,
  email: string,
  locations: LocationType[],
  id: number,
}

export const defaultUser = {
  name: '',
  email: '',
  locations: [],
  id: 0,
}