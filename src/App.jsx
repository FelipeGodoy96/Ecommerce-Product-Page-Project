import * as React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Gallery from './components/Carousel&Lightbox';
import Box from '@mui/material/Box'
import ProductInfo from './components/ProductInfo';


function App() {

  return (
   
      <Container maxWidth="xl" disableGutters sx={{overflowX: "hidden"}}>
      <Navbar/>
      <Divider/>
      <Container disableGutters sx={{display: "flex", width: '100%', flexDirection: {
        xs: 'column',
        sm: 'column',
        md: 'row',
        lg: 'row',
        xl: 'row'
      }}}>
        {/* Gallery */}
        <Box sx={{
          position: {
            xs: 'relative',
            sm: 'relative',
            md: 'relative',
            lg: 'relative',
            xl: 'relative'
          },
          marginTop: {     
            // md: '7.5%',
            lg: '7.5%',
            xl: '7.5%'
          },
          width: {
            xs: '100%',
            sm: '100%',
            md: '40%',
            lg: '40%',
            xl: '40%'
          },
          transform: {
            // md: 'translateX(-15%)',
            lg: 'translateX(-15%)',
            xl: 'translateX(-15%)'
          },
          }}>
          <Gallery/>
        </Box>
          <ProductInfo />
      </Container>
    </Container>
    
  )
}

export default App
