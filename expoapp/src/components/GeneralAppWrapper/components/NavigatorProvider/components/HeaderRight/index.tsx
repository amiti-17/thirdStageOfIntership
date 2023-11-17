import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { CurrentUserContext } from "context/CurrentUserContext";
import { cssConstants } from "config/system/constants/cssConstants";

export const HeaderRight = () => {

  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser.email) { // TODO: write logout...
    return (
      <View>
        <FontAwesome5 name="user-circle" size={30} color={cssConstants.mainColor} />
        <Pressable onPress={(e) => {}}><Text>Logout</Text></Pressable>
      </View>
    )
  }

  return <></>
}