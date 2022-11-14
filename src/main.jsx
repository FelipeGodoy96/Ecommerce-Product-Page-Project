import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme(
  {
    palette: {
      primary: {
        main: 'hsl(26, 100%, 55%)',
        light: 'hsl(25, 100%, 94%)'
      },
      white: {
        main: 'hsl(0, 0%, 100%)'
      },
      neutral: {
        verydarkblue: 'hsl(220, 13%, 13%)',
        darkgrayishblue: 'hsl(219, 9%, 45%)',
        grayishblue: 'hsl(220, 14%, 75%)',
        black: 'hsl(0, 0%, 75%)'
      }
    },
    typography: { 
      button: {
        textTransform: 'none',
        fontSize: '16px'
      },
      fontFamily: "'Kumbh Sans', sans-serif",
      fontSize: 16,
      h1: {
        fontFamily: "'Kumb Sans', sans-serif",
      },
      h2: {
        fontFamily: "'Kumb Sans', sans-serif",
      },
      h3: {
        fontFamily: "'Kumb Sans', sans-serif",
      },
      h6: {
        letterSpacing: "0.25rem"
      }
    }
  }
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>
  </React.StrictMode>
)
