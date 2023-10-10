import { Alert, Box, Collapse, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { PlacesContext } from "../../../../../../../Contexts/placesContext";
import { LocationFetchedFromSearchString } from "../../../../../../../config/system/types/locations";
// import { urls } from "../../../../../../../config/system/urls";
import { AlertSearchBarContext } from "../../../../../../../Contexts/alertSearchBarContext";
import { getNameOfPlace } from "../../../../../../../functions/places/getNameOfPlace";

export function SearchInput() {
  const cities: LocationFetchedFromSearchString[] = [
    { name: 'Kyiv', lat: 0, lon: 0, local_names: {ua: 'Kyiv'} } //TODO: replace this example object with fetched list of places...
  ];
  
  const { setAlertText } = useContext(AlertSearchBarContext);
  const { places, setPlaces } = useContext(PlacesContext);
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ options, setOptions ] = useState<LocationFetchedFromSearchString[]>(cities);

  const setValuePush = setValuePushExtended.bind(null, setPlaces);
  const isUniqValue = isUniqValueExtended.bind(null, places);
  const setDefaultOptions = setDefaultOptionsExtended.bind(null, setOptions);
  const findAndSetCurrentObj = findAndSetCurrentObjExtended.bind(null, options);

  // function getLocationByName(name: string): LocationFetchedFromSearchString {
  //   const splicedName = name.split(', ');
  //   if (splicedName.length === 3) {
  //     return options.find(el => el.name === splicedName[0] && el.state === splicedName[1] && el.country === splicedName[2]);
  //   }
  //   if (setInputValue.length === 2) {
  //     return options.find(el => el.name === splicedName[0] && (el.state === splicedName[1] || el.country === splicedName[1]));
  //   }
  //   return options.find(el => el.name === splicedName[0]);
  // }

  // function verifyPlacesAndPushIfUniq(newPlace) {
  //   const theSamePlaces = places.filter(place => place.lat === newPlace.lat && place.lon === newPlace.lon);
  //   const newPlaces = places.slice();
  //   newPlaces.push(newPlace);
  //   if (!theSamePlaces) setPlaces(newPlaces);
  // }

  function setOptionsWrapper(options: LocationFetchedFromSearchString[]) {
    // console.log(options.map(el => `${el.name}${el?.state ? ', ' + el.state : ""}${el?.country ? ', ' + el.country : ''}`));
    setOptions(options); //TODO: rewrite for parsing into fetched data
  }

  function setDefaultOptionsExtended(setOptions: Dispatch<SetStateAction<LocationFetchedFromSearchString[]>>) {
    setOptions(cities);
  }

  async function getCoordinates(nameOfPlace): Promise<LocationFetchedFromSearchString[]> {
    let limit = 5;
    const myPlace = await fetch(process.env.NEXT_PUBLIC_OW_URL_GEO + `appid=${process.env.NEXT_PUBLIC_OW_API_KEY}&q=${nameOfPlace}&limit=${limit}`);
    return await myPlace.json();
  }

  async function fetchCoordinatesAndSetOptions(nameOfPlace) {
    const mySupposesPlaces = await getCoordinates(nameOfPlace);
    // const mySupposesPlaces = [
    //   {name: 'Klagenfurt', lat: 46.623943, lon: 14.3075976, country: 'AT'},
    //   {name: 'Koło', lat: 52.2019866, lon: 18.6359912, country: 'PL'},
    //   {name: 'Koło', lat: 52.1983889, lon: 18.635758559956344, country: 'PL', state: 'Greater Poland Voivodeship'},
    //   {name: 'Koło', lat: 51.4276417, lon: 19.8296447, country: 'PL', state: 'Łódź Voivodeship'},
    //   {name: 'Königsallee', lat: 49.93645405, lon: 11.601889705219069, country: 'DE'},
    // ]
    setOptionsWrapper(mySupposesPlaces);
    // console.log(nameOfPlace, mySupposesPlaces);
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
    // {
    //   const newValue = prevValue.slice();
    //   newValue.push(value);
    //   return newValue;
    // }
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
        // console.log(event, currentValue, reason);
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
        // if (event?.type === 'keydown' && (event.nativeEvent as KeyboardEvent)?.key === 'Enter') {
        //   setDefaultOptions();
        //   setInputValue('');
        // }

        //mouse event
        // const currentTargetId = event?.currentTarget?.id.slice(-1).match(regexpObj.regex.digit);
        // if (currentTargetId) {
        //   const currentObj = options[currentTargetId[0]];
        //   if (isUniqValue(currentObj)) {
        //     setValuePush(currentObj);
        //   }
        // }

        //keyboard event
        // if (event?.type === 'keydown' && currentValue) {
        //   findAndSetCurrentObj(currentValue);
        // }
      }}
    
      // <Autocomplete
      //   multiple
      //   freeSolo
      //   limitTags={3}
      //   value={value}
      //   onChange={(event: any, newValue: string[] | null) => {
      //     newValue.forEach(name => {
      //       verifyPlacesAndPushIfUniq(getLocationByName(name));
      //     })
      //     setValue(newValue);
      //     console.log({places})
      //     // 
      //   }}
      //   inputValue={inputValue}
      //   onInputChange={(event, value, reason) => {
      //     setInputValue(value);
      //     if (value && reason === 'input') {
      //       fetchCoordinatesAndSetOptions(value);
      //     } else {
      //       setOptionsWrapper(cities);
      //     }
      //     // console.log(event, value, reason)
      //   }}
      //   id="searchPlaces"
      //   options={options.map(el => `${el.name}${el?.state ? ', ' + el.state : ""}${el?.country ? ', ' + el.country : ''}`)}
      //   filterOptions={(option) => option}
      //   getOptionLabel={(option) => option}
      //   sx={{ width: 300 }}
        
      //   renderInput={(params) => (
      //     <TextField
      //       {...params}
      //       variant="standard"
      //       label="Multiple values"
      //       placeholder="Favorites"
      //     />
      //   )}
      // />
    />
  )
}
