import * as React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Gallery from './components/Carousel&Lightbox';
import Box from '@mui/material/Box'


function App() {
  const view = {
    position: 'relative',
    marginTop: '7.5%',
    width: '45%',
    transform: 'translateX(-15%)'
  }
  // position: "relative", marginTop: "7.5%", width: "45%", transform: "translateX(-15%)"

  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar/>
      <Divider/>
      <Container disableGutters sx={{display: "flex", position: 'absolute', width: '100%'}}>
        <Box sx={{
          position: {
            xs: 'relative',
            sm: 'relative',
            md: 'relative',
            lg: 'relative',
            xl: 'relative'
          },
          marginTop: {
            xs: '7.5%',
            sm: '7.5%',
            md: '7.5%',
            lg: '7.5%',
            xl: '7.5%'
          },
          width: {
            xs: '100%',
            sm: '100%',
            md: '45%',
            lg: '45%',
            xl: '45%'
          },
          transform: {
            xs: 'translateY(-15%)',
            sm: 'translateY(-15%)',
            md: 'translateY(-15%)',
            lg: 'translateY(-15%)',
            xl: 'translateY(-15%)'
          },
          }}>
          <Gallery/>
        </Box>
        <Box sx={{position: "relative", margin: "7.5%"}}>
          
        </Box>
      </Container>
    </Container>
  )
}

export default App
