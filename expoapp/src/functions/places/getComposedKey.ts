import { LocationType } from "config/system/types/Locations";

export function getComposedKey(option: LocationType) {
  return [option.lat.toFixed(12), option.lon.toFixed(12)].join('');
}