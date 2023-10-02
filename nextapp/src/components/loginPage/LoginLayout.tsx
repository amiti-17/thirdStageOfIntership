import { Box } from '@mui/material';
import React from 'react';
import LoginHeader from './Header';
import Footer from '../Footer';

export default function LoginLayout({ children } : { children: React.ReactNode }): JSX.Element {
  return (
    //ToThink: what if this component move to layout?
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LoginHeader />
      {children}
      <Footer />
    </Box>
  );
}