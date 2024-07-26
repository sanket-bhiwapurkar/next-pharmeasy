'use client';
import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { breakpoints } from './app/constants/viewport';

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
      ...breakpoints
    },
  },
  palette: {
    text:{
      primary:"#30363C",
    },
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #d7dfe5"
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontWeight: 600
        }
      }
    }
  }
});

export default theme;
