import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { cssConstants } from 'config/system/constants/cssConstants';

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
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
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