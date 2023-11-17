import { LocationType } from "./locations"

export type UserType = {
  name: string,
  email: string,
  locations: LocationType[],
  id: number,
}