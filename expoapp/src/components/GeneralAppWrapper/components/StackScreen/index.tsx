import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from 'components/pages/LoginPage';
import { WeatherScreen } from 'components/pages/WeatherPage';
import { HeaderTitle } from './components/HeaderTitle';
import { HeaderRight } from './components/HeaderRight';

export const StackScreen = () => {
  
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerLeft: () => <></>,
    headerTitle: HeaderTitle,
    headerRight: HeaderRight,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={ screenOptions }>
        <Stack.Screen name='Login' component={LoginScreen} options={{title: 'Login'}} />
        <Stack.Screen name='Weather' component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
