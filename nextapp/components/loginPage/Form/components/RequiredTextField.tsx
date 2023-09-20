import { Box, Button, TextField } from "@mui/material";

export default function RequiredTextField({ 
    id,
    label,
    name,
    autoComplete,
    autoFocus,
    type,
  }: { 
    id: string,
    label: string,
    name?: string,
    autoComplete: string,
    autoFocus?: boolean,
    type?: string,
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
      type={type ? type : 'text'}
    />
  )
}