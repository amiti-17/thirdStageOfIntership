import React, { Dispatch, SetStateAction, useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useMutation } from "@apollo/client";
import { LocationType } from "config/system/types/Locations";
import { getNameOfPlace } from "functions/places/getNameOfPlace";
import { locations as apolloLocations } from "Apollo/queries/locations";
import { CurrentUserContext } from "context/CurrentUserContext";

type RenderSuggestionProps = {
  item: LocationType,
  separator?: boolean,
  setSuggestionList: Dispatch<SetStateAction<LocationType[]>>,
}

export const RenderSuggestion = ({
  item,
  separator,
  setSuggestionList
}: RenderSuggestionProps) => {

  const { currentUser } = useContext(CurrentUserContext);
  const [ getLocation ] = useMutation(apolloLocations.createLocation, {
    variables: {
      input: {
        lat: item.lat,
        lon: item.lon,
        name: item.name,
        state: item.state,
        country: item.country,
      },
      usersId: currentUser?.id,
    }
  });

  const onPressSuggestionHandler = () => {
    getLocation();
    setSuggestionList(prev => {
      return prev.filter(location => !(location.lat === item.lat && location.lon === item.lon))
    })
  }

  return (
    <React.Fragment>
      <Pressable style={style.option} onPress={onPressSuggestionHandler}>
        <View>
          <Text>{getNameOfPlace(item)}</Text>
        </View>
      </Pressable>
      { separator && <View style={style.separator} /> }
    </React.Fragment>
  );
} 

const style = StyleSheet.create({
  option: {
    paddingTop: 10,
    paddingRight: 8,
    paddingBottom: 10,
    paddingLeft: 8,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'white',
  }
})