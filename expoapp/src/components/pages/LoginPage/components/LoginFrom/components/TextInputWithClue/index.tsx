import { formConstants } from "config/system/constants/formConstants"
import { ChangeEvent, FocusEvent } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
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

  return (
    <>
      <TextInput
        autoFocus={type === formConstants.email}
        onChangeText={handleChange(type)}
        onBlur={handleBlur(type)}
        value={value}
        style={style.textInput}
        autoComplete={type === formConstants.email ? type : strConstants.currentPassword}
        inputMode={type === formConstants.email ? type : strConstants.none}
        keyboardType={type === formConstants.email ? strConstants.emailAddress : strConstants.default}
        maxLength={200}
        placeholder={type}
      />
      { error && <Text>{ String(error) }</Text>}
    </>
  )
}

const style = StyleSheet.create({
  textInput: {
    height: 40,
    padding: 5,
    margin: 3,
    color: cssConstants.mainColor,
    outlineColor: cssConstants.mainColor,
  },
})