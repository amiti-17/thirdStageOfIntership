import { platform } from "config/system/constants/platform";
import { Platform } from "react-native";

export function getTextInputStyle(Platform: Platform, style) {
  switch (Platform.OS) {
    case platform.OS.android:
      return style.textInputAndroid;
    case platform.OS.web:
      return style.textInputWeb;
    default:
      return style.default;
  }
}