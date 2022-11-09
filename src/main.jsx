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
      }
    },
    typography: { 
      button: {
        textTransform: 'none',
        fontSize: '16px'
      },
      fontFamily: "'Kumbh Sans', sans-serif"
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
