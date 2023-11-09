import { Box, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useMutation, useQuery } from "@apollo/client";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { locations } from "Apollo/queries/locations";
import { PlacesContext } from "Contexts/placesContext";
import { AlertSearchBarContext } from "Contexts/alertSearchBarContext";
import { UserContext } from "Contexts/userContext";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { getNameOfPlace } from "functions/places/getNameOfPlace";
import { getLocationsAttr } from "functions/fetch/searchFetchOptions";
import style from "./style.module.css";

export function SearchInput() {

  const { data: myPlacesData } = useQuery(
    locations.getOptions, 
    { variables: { input: Number(process.env.NEXT_PUBLIC_QUANTITY_FOR_OPTIONS) } }
  );

  const cities: LocationFetchedFromSearchString[] = [
    { name: 'Kyiv', lat: 0, lon: 0, id: 0 }
  ];
  
  const { user } = useContext(UserContext);
  const { setAlertText } = useContext(AlertSearchBarContext);
  const { places } = useContext(PlacesContext);
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ options, setOptions ] = useState<LocationFetchedFromSearchString[]>(cities);
  const [ createPlace ] = useMutation(locations.createLocation);

  const setValuePush = setValuePushExtended.bind(null);
  const isUniqValue = isUniqValueExtended.bind(null, places);
  const setDefaultOptions = setDefaultOptionsExtended.bind(null, setOptions);
  const findAndSetCurrentObj = findAndSetCurrentObjExtended.bind(null, options);

  useEffect(() => {
    if (myPlacesData?.getListOfPlaces[0].id) {
      setOptions(myPlacesData?.getListOfPlaces);
    }
  }, [myPlacesData]);

  function setOptionsWrapper(options: LocationFetchedFromSearchString[]) {
    setOptions(options);
  }

  function setDefaultOptionsExtended(setOptions: Dispatch<SetStateAction<LocationFetchedFromSearchString[]>>) {
    setOptions(places ? places : (myPlacesData.getListOfPlaces ?? cities));
  }

  async function fetchCoordinatesAndSetOptions(nameOfPlace) {
    const mySupposesPlaces = await getLocationsAttr(nameOfPlace);
    setOptionsWrapper(mySupposesPlaces);
  }

  function isUniqValueExtended(
    values: LocationFetchedFromSearchString[], 
    value: LocationFetchedFromSearchString,
    ): boolean {
    const isUniq = !values.find(el => el.lat === value.lat && el.lon === value.lon);
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
      renderOption={(props, option) => (
        <Box component="li" key={String(option.lat) + option.lon} {...props}>
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
        if (reason === 'clear' || (reason === 'reset' && currentValue)) {
          setDefaultOptions();
          setInputValue('');
        }
        if (reason === 'reset' && currentValue && event) {
          findAndSetCurrentObj(currentValue);
          setInputValue('');
          setDefaultOptions();
        }
        if (currentValue && reason === 'input') {
          fetchCoordinatesAndSetOptions(currentValue);
        } else {
          setDefaultOptions();
        }
      }}
      className={style.weatherInput}
    />
  )
}
