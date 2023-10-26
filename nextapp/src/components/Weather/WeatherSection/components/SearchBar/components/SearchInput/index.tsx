import { Box, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { PlacesContext } from "../../../../../../../Contexts/placesContext";
import { LocationFetchedFromSearchString } from "../../../../../../../config/system/types/locations";
import { AlertSearchBarContext } from "../../../../../../../Contexts/alertSearchBarContext";
import { getNameOfPlace } from "../../../../../../../functions/places/getNameOfPlace";
import { getLocationsAttr } from "functions/fetch/searchFetchOptions";
import { useQuery } from "@apollo/client";
import { locations } from "Apollo/queries/locations";

export function SearchInput() {

  const { data: myPlacesData, error, loading } = useQuery(
    locations.getOptions, 
    { variables: { input: Number(process.env.NEXT_PUBLIC_QUANTITY_FOR_OPTIONS) } }
  );

  const cities: LocationFetchedFromSearchString[] = [
    { name: 'Kyiv', lat: 0, lon: 0, id: 0 } //TODO: replace this example object with fetched list of places...
  ];
  
  const { setAlertText } = useContext(AlertSearchBarContext);
  const { places, setPlaces } = useContext(PlacesContext);
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ options, setOptions ] = useState<LocationFetchedFromSearchString[]>(cities);

  const setValuePush = setValuePushExtended.bind(null, setPlaces);
  const isUniqValue = isUniqValueExtended.bind(null, places);
  const setDefaultOptions = setDefaultOptionsExtended.bind(null, setOptions);
  const findAndSetCurrentObj = findAndSetCurrentObjExtended.bind(null, options);

  useEffect(() => {
    if (myPlacesData) {
      setOptions(myPlacesData.getListOfPlaces);
    }
  }, [myPlacesData]);

  function setOptionsWrapper(options: LocationFetchedFromSearchString[]) {
    setOptions(options); //TODO: rewrite for parsing into fetched data
  }

  function setDefaultOptionsExtended(setOptions: Dispatch<SetStateAction<LocationFetchedFromSearchString[]>>) {
    setOptions(places ? places : (myPlacesData.getListOfPlaces ?? cities));
  }

  async function fetchCoordinatesAndSetOptions(nameOfPlace) {
    const mySupposesPlaces = await getLocationsAttr(nameOfPlace);
    // const mySupposesPlaces = [
    //   {name: 'Klagenfurt', lat: 46.623943, lon: 14.3075976, country: 'AT'},
    //   {name: 'Koło', lat: 52.2019866, lon: 18.6359912, country: 'PL'},
    //   {name: 'Koło', lat: 52.1983889, lon: 18.635758559956344, country: 'PL', state: 'Greater Poland Voivodeship'},
    //   {name: 'Koło', lat: 51.4276417, lon: 19.8296447, country: 'PL', state: 'Łódź Voivodeship'},
    //   {name: 'Königsallee', lat: 49.93645405, lon: 11.601889705219069, country: 'DE'},
    // ]
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

  function setValuePushExtended(setValue, value: LocationFetchedFromSearchString) {
    setValue((prevValue: LocationFetchedFromSearchString[]) => [value, ...prevValue]
    );
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
      sx={{ width: 300 }}
      options={options}
      autoHighlight
      autoComplete
      getOptionLabel={(option) => typeof option === 'string' ? option : getNameOfPlace(option)}
      filterOptions={el => el}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={String(option.lat) + option.lon}>
          {option.name} {option?.state} {option?.country}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Start entering your place"
          placeholder="Favorites"
          inputProps={{
            ...params.inputProps,
          }}
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
    />
  )
}
