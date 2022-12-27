import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
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
      <Box classes="productPrice" sx={{marginTop: "10%", marginBottom: "10%"}}>
        <Typography variant='p' sx={{fontSize: "1.5rem", fontWeight: "700"}}>
          $125.00
        </Typography>
        <span className='discountPercentage' style={{color: theme.palette.primary.main, fontWeight: "700", backgroundColor: theme.palette.primary.light, marginLeft: "5%", marginRight: "5%", fontSize: "1.2rem"}}>
          50%
        </span>
        <Typography classes="productFullPrice" sx={{fontSize: '14px', marginTop: "5px", textDecoration: "line-through", color: theme.palette.neutral.verydarkblue}}>
          $250.00
        </Typography>
      </Box>
      <Box classes="inputQuantity" sx={{marginTop: "10%", display: 'flex', flexDirection: 'row'}}>
        <Box className="increaseAndDecrease">
          <Button sx={{backgroundColor: theme.palette.neutral.grayishblue}}>-</Button><span>1</span><Button sx={{backgroundColor: theme.palette.neutral.grayishblue}}>+</Button>
        </Box>
        <Box>
          <Button>
            Add to cart
          </Button>
        </Box>
      </Box>
   </Box>
  
  )
}