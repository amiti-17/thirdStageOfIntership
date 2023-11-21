import { useContext, useRef, useState } from "react";
import { StyleSheet, TextInput, Platform, View } from "react-native";
import { weatherConstants } from "config/system/constants/weatherConstants";
import { cssConstants } from "config/system/constants/cssConstants";
import { defaultOption } from "config/system/constants/defaultOption";
import { LocationType } from "config/system/types/Locations";
import { isArray } from "functions/validations/loginInput/isArray";
import { getTextInputStyle } from "functions/styles/getTextInputStyle";
import { getLocationsAttr } from "functions/fetch/searchFetchOptions";
import { SuggestedBlock } from "./components/SuggestedBlock";
import { SuggestionListContext } from "context/SuggestionListContext";
import { CurrentUserContext } from "context/CurrentUserContext";

export const InputLocation = () => {

  const [ isFocused, setIsFocused ] = useState(false);
  const { setSuggestionList } = useContext(SuggestionListContext)
  const { currentUser } = useContext(CurrentUserContext);
  const MyInput = useRef(TextInput);

  const handleInputChange = async (value: string) => {
    if (!value) return;
    const suggestedPlaces = await getLocationsAttr(value);
    setIfLocationsNotExists(isArray(suggestedPlaces) ? suggestedPlaces : []);
  }

  const setDefaultSuggestion = async () => {
    setIfLocationsNotExists(defaultOption);
  }
  
  const setIfLocationsNotExists = (suggestionsList: LocationType[]) => {
    const filteredArr = suggestionsList.filter( el => {
      return !currentUser?.locations.find(location => {
        return location.lat === el.lat && location.lon === el.lon
      })
    })
    setSuggestionList(filteredArr);
  }

  return (
    <View style={[ style.wrapperIndexDefault, isFocused && style.wrapperIndex ]}>
      <MyInput.current
        onChangeText={handleInputChange}
        style={getTextInputStyle(Platform, style)}
        inputMode='text'
        maxLength={200}
        placeholderTextColor='gray'
        placeholder={weatherConstants.defaultPlaceHolder}
        autoCapitalize="sentences"
        clearButtonMode="while-editing"
        onBlur={() => {
          setSuggestionList([]);
          setIsFocused(false);
        }}
        onFocus={() => {
          setDefaultSuggestion();
          setIsFocused(true);
        }}
      />
      <SuggestedBlock />
    </View>
  )
}

const style = StyleSheet.create({
  wrapperIndex: {
    width: '90%',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 20,
    paddingTop: 10,
    backgroundColor: cssConstants.backgroundColor,
    borderRadius: 50,
  },
  wrapperIndexDefault: {
    width: '90%',
    textAlign: 'center',
    padding: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textInputAndroid: {
    height: 40,
    padding: 5,
    paddingLeft: 10,
    margin: 'auto',
    marginBottom: 10,
    color: cssConstants.mainColor,
    backgroundColor: cssConstants.backgroundColor,
    borderRadius: 50,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textInputWeb: {
    outlineColor: cssConstants.mainColor,
    height: 40,
    padding: 5,
    paddingLeft: 10,
    margin: 'auto',
    marginBottom: 10,
    color: cssConstants.mainColor,
    backgroundColor: cssConstants.backgroundColor,
    borderRadius: 50,
    maxWidth: 300,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  default: {

  },
});