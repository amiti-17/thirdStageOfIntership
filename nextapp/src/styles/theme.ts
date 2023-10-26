import { Roboto } from 'next/font/google';
import { createTheme, experimental_extendTheme } from '@mui/material/styles';
import { blue, blueGrey, orange, red } from '@mui/material/colors';
import { TypeBackground } from '@mui/material/styles';
import { extendSchema } from 'graphql';

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

export const extendedTheme = experimental_extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[900],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: blue[200],
        },
      },
    },
  },
});
