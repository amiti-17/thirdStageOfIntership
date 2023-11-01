import { Box } from "@mui/material";
import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { getNameOfPlace } from "functions/places/getNameOfPlace";
import style from "./style.module.css";

export function Name({ place, description }: { place: LocationFetchedFromSearchString, description?: string }) {
  return (
    <>
      <Box className={style.name}>{getNameOfPlace(place)}</Box>
      {description && <Box className={style.description}>{description}</Box>}
    </>
  )
}