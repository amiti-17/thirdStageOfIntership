import { placeZeroWhenOne } from "./placeZeroWhenOne";

export function getTime(dateObj: Date): string {
  return `${placeZeroWhenOne(dateObj.getHours())}:${placeZeroWhenOne(dateObj.getMinutes())}`
}