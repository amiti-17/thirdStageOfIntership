import { placeZeroWhenOne } from "./placeZeroWhenOne";

export function getDate(dateObj: Date): string {
  return `${placeZeroWhenOne(dateObj.getDate())}:${placeZeroWhenOne(dateObj.getMonth())}:${dateObj.getFullYear()}`
}