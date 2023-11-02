import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import LoginLayout from 'components/LoginPage/LoginLayout';
import LoginForm from 'components/LoginPage/Form';

export default function Login() {

  return (
      <>
        <CssBaseline />
        <LoginLayout>
          <LoginForm />
        </LoginLayout>
      </>
  );
}
