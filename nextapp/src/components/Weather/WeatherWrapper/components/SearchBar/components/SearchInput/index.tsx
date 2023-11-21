import { Box, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { locations } from "Apollo/queries/locations";
import { PlacesContext } from "Contexts/placesContext";
import { AlertSearchBarContext } from "Contexts/alertSearchBarContext";
import { UserContext } from "Contexts/userContext";
import { getNameOfPlace } from "functions/places/getNameOfPlace";
import { getLocationsAttr } from "functions/fetch/searchFetchOptions";
import style from "./style.module.css";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { eventConstants } from "config/system/constants/eventConstants";
import { strConstants } from "config/system/constants/strConstants";

export function SearchInput() {
  
  const { user } = useContext(UserContext);
  const { setAlertText } = useContext(AlertSearchBarContext);
  const { places } = useContext(PlacesContext);
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ options, setOptions ] = useState<LocationFetchedFromSearchString[]>([]);
  const [ createPlace ] = useMutation(locations.createLocation);

  useEffect(() => {
    setDefaultOptionsExtended();
  }, []);

  function setOptionsWrapper(options: LocationFetchedFromSearchString[]) {
    setOptions(options);
  }

  async function setDefaultOptionsExtended() {
    await fetchCoordinatesAndSetOptions(strConstants.alphabet.a);
  }

  async function fetchCoordinatesAndSetOptions(nameOfPlace: string) {
    const mySupposesPlaces = await getLocationsAttr(nameOfPlace);
    const filteredSupposesPlaces = mySupposesPlaces.reduce((accumulator, place) => {
      if (!accumulator.find(el => el.lat === place.lat && el.lon === place.lon)) {
        accumulator.push(place);
      }
      return accumulator;
    }, []);
    setOptionsWrapper(filteredSupposesPlaces);
  }

  function isUniqValueExtended(
    values: LocationFetchedFromSearchString[], 
    value: LocationFetchedFromSearchString,
    ): boolean {
    const isUniq = !values.find(el => el.lat === Number(value.lat.toFixed(12)) && el.lon === Number(value.lon.toFixed(12)));
    if (!isUniq) setAlertText('This place have already exists');
    return isUniq;
  }

  function setValuePushExtended(value: LocationFetchedFromSearchString) {
    createPlace({
      variables: {
        input: {
          lat: value.lat,
          lon: value.lon,
          name: value.name,
          state: value.state,
          country: value.country,
        },
        usersId: user.id,
      }
    });
  }

  function findAndSetCurrentObjExtended(options, currentValue) {
    const currentObj = options.find(el => getNameOfPlace(el) === currentValue);
    if (isUniqValue(currentObj)) {
      setValuePush(currentObj);
    }
  }

  const setValuePush = setValuePushExtended.bind(null);
  const isUniqValue = isUniqValueExtended.bind(null, places);
  const setDefaultOptions = setDefaultOptionsExtended.bind(null, setOptions);
  const findAndSetCurrentObj = findAndSetCurrentObjExtended.bind(null, options);

  return (
    <Autocomplete
      freeSolo
      limitTags={3}
      id="place-select-demo"
      options={options}
      autoHighlight
      autoComplete
      getOptionLabel={(option) => typeof option === 'string' ? option : getNameOfPlace(option)}
      filterOptions={el => el}
      renderOption={(props, option) =>(
        <Box component="li" {...props} key={String(option.lat) + String(option.lon)}>
          {option.name} {option?.state} {option?.country}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          variant="filled"
          size="small"
          label="Start entering your place"
          placeholder="Favorites"
          {...params}
        />
      )}
      inputValue={inputValue}
      onInputChange={(event, currentValue, reason) => {
        setInputValue(currentValue);
        if (reason === eventConstants.clear || (reason === eventConstants.reset && currentValue)) {
          setDefaultOptions();
          setInputValue(strConstants.emptyStr);
        }
        if (reason === eventConstants.reset && currentValue && event) {
          findAndSetCurrentObj(currentValue);
          setInputValue(strConstants.emptyStr);
          setDefaultOptions();
        }
        if (currentValue && reason === eventConstants.input) {
          fetchCoordinatesAndSetOptions(currentValue);
        } else {
          setDefaultOptions();
        }
      }}
      className={style.weatherInput}
    />
  )
}
