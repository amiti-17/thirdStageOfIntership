import { Box } from "@mui/material";
import RequiredTextField from "./components/RequiredTextField";
import SubmitOutlinedButton from "./components/SubmitOutlinedButton";

export default function LoginForm() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <RequiredTextField
        id="email"
        label="Email Address"
        autoComplete="email"
        autoFocus
      />
      <RequiredTextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
      />

      <SubmitOutlinedButton sx={{mt: 3, mb: 2}} />
    </Box>
  )
}