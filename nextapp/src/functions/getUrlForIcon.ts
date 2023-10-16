export function getUrlForIcon(iconStr: string): string {
  const currentUrl = process.env.NEXT_PUBLIC_OW_URL_ICON;
  return currentUrl + `/${iconStr}.png`;
}

export function getUrlForIcon2x(iconStr: string): string {
  const currentUrl = process.env.NEXT_PUBLIC_OW_URL_ICON;
  return currentUrl + `/${iconStr}@2x.png`;
}