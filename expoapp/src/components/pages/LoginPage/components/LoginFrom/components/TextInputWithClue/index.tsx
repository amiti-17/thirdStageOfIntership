import { formConstants } from "config/system/constants/formConstants"
import { ChangeEvent, FocusEvent } from "react";
import { StyleSheet, Text, TextInput, Platform } from "react-native";
import { FormikErrors } from "formik";
import { strConstants } from "config/system/constants/strConstants";
import { cssConstants } from "config/system/constants/cssConstants";

type TextInputWithClueProps = {
  type: 'email' | 'password',
  value: string,
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[],
  handleChange: { (e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void; },
  handleBlur: { (e: FocusEvent<any, Element>): void; <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void; },
}

export const TextInputWithClue = ({handleBlur, handleChange, value, error, type }: TextInputWithClueProps) => {

  function getTextInputStyle(Platform: Platform, style) {
    switch (Platform.OS) {
      case 'android':
        return style.textInputAndroid;
      case 'android':
        return style.textInputWeb;
      default:
        return style.default;
    }
  }

  return (
    <>
      <TextInput
        autoFocus={type === formConstants.email}
        onChangeText={handleChange(type)}
        onBlur={handleBlur(type)}
        value={value}
        style={getTextInputStyle(Platform, style)}
        autoComplete={type === formConstants.email ? type : strConstants.currentPassword}
        inputMode={type === formConstants.email ? type : strConstants.none}
        keyboardType={type === formConstants.email ? strConstants.emailAddress : strConstants.default}
        maxLength={200}
        placeholder={type}
      />
      { error && <Text style={style.errorText}>{ String(error) }</Text>}
    </>
  )
}

const style = StyleSheet.create({
  textInputAndroid: {
    height: 40,
    padding: 5,
    paddingLeft: 10,
    margin: 3,
    color: cssConstants.mainColor,
    backgroundColor: '#d6e3f0',
    borderRadius: 50,
    width: '90%',
  },
  textInputWeb: {
    outlineColor: cssConstants.mainColor,
    height: 40,
    padding: 5,
    paddingLeft: 10,
    margin: 3,
    color: cssConstants.mainColor,
    backgroundColor: '#d6e3f0',
    borderRadius: 50,
    maxWidth: 300,
    width: '90%',
  },
  errorText: {
    marginBottom: 5,
  },
  default: {

  },
})