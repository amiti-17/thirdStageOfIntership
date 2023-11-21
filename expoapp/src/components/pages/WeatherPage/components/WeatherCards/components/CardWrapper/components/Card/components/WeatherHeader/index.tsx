import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { cssConstants } from "config/system/constants/cssConstants";
import { MyActivityLoader } from "components/MyActivityLoader";
import { iconsName } from "config/system/constants/iconsName";

type WeatherHeaderProps = {
  title: string,
  description?: string,
  onDeleteHandler: () => {},
  loadingDelete: boolean,
}

export const WeatherHeader = ({ title, description, onDeleteHandler, loadingDelete }: WeatherHeaderProps) => {
  return (
    <View style={style.header}>
      <View style={style.headerTextGroup}>
        <Text style={style.headerTextStyle}>{title}</Text>
        { description && <Text style={style.descriptionText}>{description}</Text>}
      </View>
      
      <Pressable onPress={() => !loadingDelete && onDeleteHandler()} style={style.pressableHeader}>
        { !loadingDelete && <MaterialIcons name={iconsName.delete} size={28} color={cssConstants.mainColor} /> }
        { loadingDelete && <MyActivityLoader /> }
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  headerTextGroup: {
    flexGrow: 1,
    paddingLeft: 10,
  },
  headerTextStyle: {
    fontSize: 20,
    overflow: 'hidden',
    height: 30,
  },
  pressableHeader: {
    height: 30,
    margin: "auto",
  },
  descriptionText: {
    fontSize: 15,
    width: '100%',
    fontStyle: 'italic',
    textAlign: 'left',
  }
});