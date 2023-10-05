import { TransitionGroup } from 'react-transition-group';
import { useContext, useEffect, useState } from 'react';
import { PlacesContext } from '../../../../../../../Contexts/placesContext';
import { getNameOfPlace } from '../../../../../../../functions/places/getNameOfPlace';
import { Button, Collapse, List } from '@mui/material';
import { renderPlaceItem } from './renderPlaceItem';
import { LocationFetchedFromSearchString } from '../../../../../../../config/system/types/locations';


export function Places() {
  
  const [ morePlacesCounter, setMorePlacesCounter ] = useState<number>(0);
  const [ morePlacesCounterToggle, setMorePlacesCounterToggle ] = useState<boolean>(false);
  const { places, setPlaces } = useContext(PlacesContext);

  const handleRemoveFruit = (place: LocationFetchedFromSearchString) => {
    setPlaces((prev) => [...prev.filter((el) => el.lat !== place.lat && el.lon !== place.lon)]);
  };

  useEffect(() => {
    setMorePlacesCounter(places.length - 2);
  }, [places]);

  return (
    <List
      sx={{
        '& > *': {
          display: 'flex',
          flexWrap: 'wrap',
          direction: 'row',
          width: '100%',
        },
        display: 'flex',

      }}
    >
      <TransitionGroup>
        {
          morePlacesCounterToggle ? 
          places.map((item) => (
            <Collapse key={getNameOfPlace(item)}>{renderPlaceItem(item, handleRemoveFruit)}</Collapse>
          )) : 
          places.slice(0, 2).map((item) => (
            <Collapse key={getNameOfPlace(item)}>{renderPlaceItem(item, handleRemoveFruit)}</Collapse>
          ))
        }
        
      </TransitionGroup>
      {
        morePlacesCounter > 0 ?
          <Button
            color='primary'
            variant='text'
            sx={{
              width:'25px',
              flexShrink: 1,
            }}
            onClick={(e) => setMorePlacesCounterToggle(prev => !prev)}
          >
            {morePlacesCounterToggle ? 'less' : '+' + morePlacesCounter}
          </Button> : ''
      }
    </List>
  )
}