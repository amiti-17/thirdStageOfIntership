import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { LocationFetchedFromSearchString } from "../../../../../../../config/system/types/locations";
import { getNameOfPlace } from "../../../../../../../functions/places/getNameOfPlace";

export function renderPlaceItem(place: LocationFetchedFromSearchString, handleRemovePlace: (place: LocationFetchedFromSearchString) => void) {

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => {
            handleRemovePlace(place);
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={getNameOfPlace(place)} />
    </ListItem>
  )
}