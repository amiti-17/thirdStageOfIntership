import { memo, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LocationType } from "config/system/types/Locations";
import { SuggestionListContext } from "context/SuggestionListContext";
import { CurrentUserContext } from "context/CurrentUserContext";
import { RenderSuggestion } from "./components/RenderSuggestion";
import { getComposedKey } from "functions/places/getComposedKey";

export const SuggestedBlock = memo(() => {

  const { suggestionList, setSuggestionList } = useContext(SuggestionListContext);
  const { currentUser } = useContext(CurrentUserContext);

  const getSuggestionsList = (suggestedLocations: LocationType[]) => {
    const mySuggestedLocations = suggestedLocations.reduce((accumulator, place) => {
      const isLocationAlreadyExists = accumulator.some(el => {
        return place.lat === el.lat && place.lon === el.lon
      });
      if (!isLocationAlreadyExists) {
        accumulator.push(place);
      }
      return accumulator;
    }, []);
    return mySuggestedLocations;
  }

  return (
    <View style={style.optionWrapper}>
      { 
        (!getSuggestionsList(suggestionList)[0] && !currentUser?.locations[0]?.lat) && (<Text style={style.defaultText}>
            Try to start entering any place...
          </Text>)
      }
      {
        getSuggestionsList(suggestionList)[0] && getSuggestionsList(suggestionList).map(
          (item, index, array) => { return (array.length - 1 === index) ?
            <RenderSuggestion item={item} key={getComposedKey(item)} setSuggestionList={setSuggestionList} /> :
            <RenderSuggestion item={item} key={getComposedKey(item)} setSuggestionList={setSuggestionList} separator={true} />}
        )
      }
    </View>
  )
})

const style = StyleSheet.create({
  defaultText: {
    padding: 5,
  },
  optionWrapper: {
    backgroundColor: '#e1ebf5',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 30,
  }
})