import { TextField } from "@mui/material";
import { ChangeEvent, FocusEvent } from "react";
import style from "./style.module.css";

export default function RequiredTextField({ 
    id,
    label,
    name,
    autoComplete,
    autoFocus,
    type,
    error,
    onChange,
    onBlur,
    value,
    errorText
  }: { 
    id: string,
    label: string,
    name?: string,
    autoComplete: string,
    autoFocus?: boolean,
    type?: string,
    error?: boolean,
    onChange: { (e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void; },
    onBlur: { (e: FocusEvent<any, Element>): void; <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void; },
    value: {},
    errorText?: string,
  }) {

  name ??= id
  type ??= id
  
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      error={error}
      helperText= {error ? errorText ? errorText : 'Incorrect entry. Failed validation.' : ''}
      type={type ? type : 'text'}
      onChange={onChange}
      onBlur={onBlur}
      className={style.requiredTextField}
    />
  )
}