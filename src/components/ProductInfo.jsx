import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '@emotion/react';


export default function ProductInfo () {
  const theme = useContext(ThemeContext)
  return (
    <Box sx={{position: "relative", margin: "7.5%", maxWidth: "35%", width: "100%"}}>
      <Box classes="vendorName" sx={{marginTop: "10%", width: "100%"}}>
        <Typography variant='p' color={theme.palette.primary.main} letterSpacing="0.25rem" fontWeight="700">   
        SNEAKER COMPANY   
        </Typography>
      </Box>
      <Box classes="productTitle" sx={{marginTop: "10%", marginBottom: "10%", width: "100%"}}>
        <Typography variant='h4' fontWeight="700">
          Fall Limited Edition Sneakers
        </Typography>
      </Box>
      <Box classes="productDescription" sx={{wordSpacing: "0.20rem"}}>
        <Typography variant='p' color={theme.palette.neutral.darkgrayishblue} width="100%">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubbler outer sole, they'll withstand everything the weather can offer.
          
          
        </Typography>
       
      </Box>
     
 {/* <p style={{lineHeight: '3rem', color: 'hsl(26, 100%, 55%)', fontStyle: 'bold', fontWeight: '700', marginTop: '3rem', marginBottom: '1rem', letterSpacing: '0.15rem'}}>SNEAKER COMPANY</p>
    <p style={{fontSize: '36px', lineHeight: '2rem', fontWeight: '700', color: 'hsl(220, 13%, 13%)'}}>Fall Limited Edition Sneakers</p>
    <p style={{marginTop: '2em', marginBottom: '2em', color: 'hsl(219, 9%, 45%'}}>
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they'll withstand everything the weatehr can offer.
    </p>
    <p style={{fontWeight: '700', fontSize: '24px'}}>$125.00 <span style={{backgroundColor: 'hsl(25, 100%, 94%)', color: 'hsl(26, 100%, 55%)', fontSize: '18px'}}>50%</span></p>
    <p style={{textDecoration: 'line-through', color: 'hsl(219, 9%, 45%'}}>$250.00</p> */}
    
   </Box>
  
  )
}