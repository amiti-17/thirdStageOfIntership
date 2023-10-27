import { LocationType } from "./locations"

export type SafeUserType = {
  name: string,
  email: string,
  locations: LocationType[],
  id: number,
}