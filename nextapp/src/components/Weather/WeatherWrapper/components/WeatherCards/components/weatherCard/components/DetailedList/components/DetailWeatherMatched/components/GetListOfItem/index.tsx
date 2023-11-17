import { ReactNode } from "react";
import { IconWithText } from "./styled/IconWithText";
import { strConstants } from "config/system/constants/strConstants";

type GetListOfItemType = {
  name?: string,
  item: string | number,
  measure?: string,
  children?: ReactNode,
}

export function GetListOfItem({ name, item, measure = strConstants.emptyStr, children }: GetListOfItemType) {

  if ((item || (typeof item === strConstants.number && Number(item) === 0))) {
    return (
      <IconWithText component='li'>
        {children}{name}: {item}{measure}
      </IconWithText>
    )
  }

  return (
    <></>
  )
}