import { LocationType } from "config/system/types/Locations";


export function getNameOfPlace(option: LocationType) {
  return [option.name, option?.state, option?.country].filter(el => el).join(', ');
}