export function restructureWeatherObj(weather, modifier = '') {
  const myModifier = modifier ? modifier + '_' : '';
  const myWeather = {};
  Object.keys(weather).forEach(el => {
    switch (typeof weather[el]) {
      case 'object':
        Object.keys(weather[el]).forEach(elKey => {
          const currentWeather = restructureWeatherObj(weather[el], myModifier + el);
          Object.keys(currentWeather).forEach(key => myWeather[key] = currentWeather[key]);
        })
        break;
    
      default:
        myWeather[myModifier + el] = weather[el];
        break;
    }
  });
  return myWeather;
}