import { useContext } from "react";
import { NavigationContext } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useMutation } from "@apollo/client";
import { CurrentUserContext } from "context/CurrentUserContext";
import { cssConstants } from "config/system/constants/cssConstants";
import { auth } from "Apollo/queries/auth";
import { defaultUser } from "config/system/types/UserType";
import { pages } from "config/system/pages";

export const HeaderRight = () => {

  const navigation = useContext(NavigationContext);
  const [ logOutUser ] = useMutation(auth.logout);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const logoutHandler = () => {
    logOutUser();
    setCurrentUser(defaultUser);
    navigation.navigate(pages.login);
  }

  if (currentUser && currentUser?.email) {
    return (
      <View>
        <FontAwesome5 style={style.logoutIcon} name="user-circle" size={30} color={cssConstants.mainColor} />
        <Pressable onPress={logoutHandler}><Text>Logout</Text></Pressable>
      </View>
    )
  }

  return <></>
}

const style = StyleSheet.create({
  logoutIcon: {
    textAlign: 'center',
  }
})