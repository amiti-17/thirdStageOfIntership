import { Current } from "./Current";
import { Day } from "./Day";

export type Weather = {
  current: Current,
  days: Day[],
  id: number,
  currentId: number,
}