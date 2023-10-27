import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blueGrey, orange, red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
export const theme = createTheme({
  palette: {
    text: {
      primary: '#020b17',
      secondary: '#221600',
      disabled: blueGrey[800],
    },
    background: {
      paper: '#F7FAFF',
    },
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: orange.A400,
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
