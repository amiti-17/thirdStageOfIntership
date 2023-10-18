export function placeZeroWhenOne(date: number): string {
  return date > 9 ? String(date) : '0' + date; 
}