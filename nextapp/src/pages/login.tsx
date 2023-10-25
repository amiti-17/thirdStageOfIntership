import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import LoginLayout from 'components/loginPage/LoginLayout';
import LoginForm from 'components/loginPage/Form';

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
