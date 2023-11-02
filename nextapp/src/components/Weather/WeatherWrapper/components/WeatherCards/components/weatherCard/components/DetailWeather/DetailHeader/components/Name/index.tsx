import { LocationFetchedFromSearchString } from "config/system/types/locationsFetched";
import { getNameOfPlace } from "functions/places/getNameOfPlace";
import { Description } from "./styled/Description";
import { NameStyled } from "./styled/NameStyled";

type NameType = {
  place: LocationFetchedFromSearchString,
  description?: string,
}

export function Name({ place, description }: NameType) {
  return (
    <>
      <NameStyled>{getNameOfPlace(place)}</NameStyled>
      {description && <Description>{description}</Description>}
    </>
  )
}