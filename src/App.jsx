import * as React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';


function App() {
  

  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar/>
      <Divider/>
      <Container>
        
      </Container>
    </Container>
  )
}

export default App
