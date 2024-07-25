'use client';
import { Roboto, Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    secondary: {
      main: "#eef4ff",
      contrastText: "#30363C",
      dark: '#dce4f1',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: '#30363C', // Replace 'custom-color' with your desired color
          textTransform: "none"
        },
      },
    },
  }
});

export default theme;
