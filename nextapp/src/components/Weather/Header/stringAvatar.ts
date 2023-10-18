import { strConstants } from "config/system/constants/strConstants";
import { stringToColor } from "./stringToColor";

export function stringAvatar(name: string) {
  const nameAndSurnameArr = name.split(strConstants.spaceStr);
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 45,
      height: 45,
    },
    children: `${nameAndSurnameArr[0][0]}${nameAndSurnameArr[1] ? nameAndSurnameArr[1][0] : strConstants.emptyStr}`,
  };
}