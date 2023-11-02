import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blue, blueGrey, orange, pink, purple, red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    text: {
      primary: '#020b17',
      secondary: '#221600',
      disabled: blueGrey[800],
    },
    primary: {
      light: blue[400],
      main: blue[700],
      dark: blue[800],
      contrastText: '#fff',
    },
    secondary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
