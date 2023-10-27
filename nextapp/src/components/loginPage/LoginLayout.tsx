import { Box } from '@mui/material';
import React from 'react';
import style from './style.module.css'
import LoginHeader from './LoginHeader';

export default function LoginLayout({ children } : { children: React.ReactNode }): JSX.Element {
  return (
    <Box className={style.loginLayout}>
      <LoginHeader />
      {children}
    </Box>
  );
}