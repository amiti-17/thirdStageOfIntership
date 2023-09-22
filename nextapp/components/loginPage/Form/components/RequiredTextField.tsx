import { TextField } from "@mui/material";

export default function RequiredTextField({ 
    id,
    label,
    name,
    autoComplete,
    autoFocus,
    type,
    error,
    errorText
  }: { 
    id: string,
    label: string,
    name?: string,
    autoComplete: string,
    autoFocus?: boolean,
    type?: string,
    error?: boolean,
    errorText?: string,
  }) {

  name ??= id;

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
    />
  )
}