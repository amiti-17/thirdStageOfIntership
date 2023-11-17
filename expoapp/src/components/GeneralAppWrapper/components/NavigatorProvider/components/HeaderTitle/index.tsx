import { FontAwesome5 } from '@expo/vector-icons';
import { cssConstants } from 'config/system/constants/cssConstants';
import { StyleSheet, Text, View } from 'react-native';

export const HeaderTitle = () => {
  
  return (
    <View style={style.headerTitle}>
      <FontAwesome5 name="cloud-sun" size={40} color={cssConstants.mainColor} style={style.headerTitleIcon} />
      <Text style={style.headerTitleText}>WeatherApp</Text>
    </View>
  )
}

const style = StyleSheet.create({
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
    flexFlow: 'row nowrap',
    alignContent: 'center',
    gap: 10,
  },
  headerTitleIcon: {
    margin: 'auto',
  },
  headerTitleText: {
    fontSize: 24,
    color: cssConstants.mainColor,
    margin: 'auto',
  }
})