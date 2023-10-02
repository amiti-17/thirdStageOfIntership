import { Box, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext, useEffect, useState } from "react";
import { PlacesContext } from "../../../../../Contexts/placesContext";
import { urls } from "../../../../../config/system/urls";
import { LocationFetchedFromSearchString } from "../../../../../config/system/types/locations";

export function Search() {
  const cities = [
    { name: 'Kyiv', lat: 0, lon: 0 } //TODO: replace this example object with fetched list of places...
  ];
  const optionsArrExp = ['string1', 'string2'];
  const { places, setPlaces } = useContext(PlacesContext);
  const [ value, setValue ] = useState<string[] | null>(optionsArrExp);
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ options, setOptions ] = useState<LocationFetchedFromSearchString[]>([]);

  useEffect(() => {
    setOptionsWrapper(cities);
  }, [value]);

  function getLocationByName(name: string): LocationFetchedFromSearchString {
    const splicedName = name.split(', ');
    if (splicedName.length === 3) {
      return options.find(el => el.name === splicedName[0] && el.state === splicedName[1] && el.country === splicedName[2]);
    }
    if (setInputValue.length === 2) {
      return options.find(el => el.name === splicedName[0] && (el.state === splicedName[1] || el.country === splicedName[1]));
    }
    return options.find(el => el.name === splicedName[0]);
  }

  function verifyPlacesAndPushIfUniq(newPlace) {
    const theSamePlaces = places.filter(place => place.lat === newPlace.lat && place.lon === newPlace.lon);
    const newPlaces = places.slice();
    newPlaces.push(newPlace);
    if (!theSamePlaces) setPlaces(newPlaces);
  }

  function setOptionsWrapper(options: LocationFetchedFromSearchString[]) {
    // console.log(options.map(el => `${el.name}${el?.state ? ', ' + el.state : ""}${el?.country ? ', ' + el.country : ''}`));
    setOptions(options); //TODO: rewrite for parsing into fetched data
  }

  async function getCoordinates(nameOfPlace): Promise<LocationFetchedFromSearchString[]> {
    let limit = 5;
    const myPlace = await fetch(urls.OW_URL_GEO + `appid=${urls.OW_API_KEY}&q=${nameOfPlace}&limit=${limit}`);
    return await myPlace.json();
  }

  async function fetchCoordinatesAndSetOptions(nameOfPlace) {
    // const mySupposesPlaces = await getCoordinates(nameOfPlace);
    const mySupposesPlaces = [
      {name: 'Klagenfurt', lat: 46.623943, lon: 14.3075976, country: 'AT'},
      {name: 'Koło', lat: 52.2019866, lon: 18.6359912, country: 'PL'},
      {name: 'Koło', lat: 52.1983889, lon: 18.635758559956344, country: 'PL', state: 'Greater Poland Voivodeship'},
      {name: 'Koło', lat: 51.4276417, lon: 19.8296447, country: 'PL', state: 'Łódź Voivodeship'},
      {name: 'Königsallee', lat: 49.93645405, lon: 11.601889705219069, country: 'DE'},
    ]
    setOptionsWrapper(mySupposesPlaces)
    // console.log(nameOfPlace, mySupposesPlaces);
  }

  return (
    <Box>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <Autocomplete
        multiple
        freeSolo
        limitTags={3}
        value={value}
        onChange={(event: any, newValue: string[] | null) => {
          newValue.forEach(name => {
            verifyPlacesAndPushIfUniq(getLocationByName(name));
          })
          setValue(newValue);
          console.log({places})
          // 
        }}
        inputValue={inputValue}
        onInputChange={(event, value, reason) => {
          setInputValue(value);
          if (value && reason === 'input') {
            fetchCoordinatesAndSetOptions(value);
          } else {
            setOptionsWrapper(cities);
          }
          // console.log(event, value, reason)
        }}
        id="searchPlaces"
        options={options.map(el => `${el.name}${el?.state ? ', ' + el.state : ""}${el?.country ? ', ' + el.country : ''}`)}
        filterOptions={(option) => option}
        getOptionLabel={(option) => option}
        sx={{ width: 300 }}
        
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
    </Box>
  )
}