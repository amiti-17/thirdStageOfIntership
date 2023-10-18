import { digits } from "config/system/constants/digits";

export function placeZeroWhenOne(date: number): string {
  return date > 9 ? String(date) : String(digits[0]) + date; 
}