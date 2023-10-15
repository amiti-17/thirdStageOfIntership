export async function getWeatherIcon(iconStr: string) {
  let currentUrl = process.env.NEXT_PUBLIC_OW_URL_ICON;
  currentUrl += `/${iconStr}@2x.png`;
  const icon = await fetch(currentUrl);
  return await icon.blob();
}