

export function getNameOfPlace(option) {
  return [option.name, option?.state, option?.country].filter(el => el).join(', ');
}