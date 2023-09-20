import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginLayout from '../components/loginPage/LoginLayout';
import LoginForm from '../components/loginPage/Form';

export default function Login() {
  
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <LoginLayout>
          <LoginForm />
        </LoginLayout>
      </Container>
  );
}
