import { digits } from "config/system/constants/digits";
import { symbols } from "config/system/constants/symbols";

export function stringToColor(string: string) {
  let hash = digits[0];
  let i;

  for (i = digits[0]; i < string.length; i += digits[1]) {
    hash = string.charCodeAt(i) + ((hash << digits[5]) - hash);
  }

  let color = symbols["#"];

  for (i = digits[0]; i < digits[3]; i += digits[1]) {
    const value = (hash >> (i * digits[8])) & 0xff;
    color += `00${value.toString(digits[16])}`.slice(-digits[2]);
  }

  return color;
}