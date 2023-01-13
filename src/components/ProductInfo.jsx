import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '@emotion/react';
import { useState } from 'react';
import minusIcon from "../assets/images/icon-minus.svg"
import plusIcon from "../assets/images/icon-plus.svg"
import cartIcon from "../assets/images/icon-cart.svg"


export default function ProductInfo () {
  const [ quantity, setQuantity ] = useState(0)
  const handlePlus = () => {
    setQuantity(quantity + 1)
  }
  const handleMinus = () => {
    if (quantity >= 1)
    setQuantity(quantity - 1)
  }
  const theme = useContext(ThemeContext)
  return (
    <Box sx={{position: "relative", margin: "7.5%", maxWidth: "35%", width: "100%"}}>
      <Box classes="vendorName" sx={{marginTop: "10%", width: "100%"}} backgroundColor={theme.palette.grayishblue}>
        <Typography variant='h2' color={theme.palette.primary.main} letterSpacing="0.025rem" fontWeight="700" fontSize="0.875rem" lineHeight="1.25rem">   
        SNEAKER COMPANY   
        </Typography>
      </Box>
      <Box classes="productTitle" sx={{marginTop: "10%", marginBottom: "10%", width: "100%"}}>
        <Typography variant='h4' fontWeight="700" fontSize="1.875rem" lineHeight="2.25rem">
          Fall Limited Edition Sneakers
        </Typography>
      </Box>
      <Box classes="productDescription" sx={{wordSpacing: "0.20rem"}}>
        <Typography variant='p' color={theme.palette.neutral.darkgrayishblue} width="100%" lineHeight="1.625rem">
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
      <Box className="buttonsWrapper" sx={{marginTop: "10%", display: 'flex', flexDirection: 'row'}}>
        <Box sx={{gap: "20px", width: "100%", lineHeight: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <ul style={{width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem", paddingBottom: "2rem", backgroundColor: theme.palette.neutral.grayishblue, borderRadius: "0.5rem", paddingLeft: "20px", paddingRight: "20px", userSelect: "none"}}>
            <li><img src={minusIcon} onClick={handleMinus} style={{cursor: "pointer"}} /></li>
          <li>{quantity}</li><img src={plusIcon} onClick={handlePlus} style={{cursor: "pointer"}}/></ul>
        
        
          <Button style={{borderRadius: "0.5rem", height: "100%", backgroundColor: theme.palette.primary.main, display: "flex", gap: "40px", alignItems: "center", paddingLeft: "20px", color: "white", paddingRight: "20px", width: "100%", textAlign: "center", justifyContent: "center"}}>
            <img src={cartIcon} /> Add to cart
          </Button>
        </Box>
      </Box>
   </Box>
  
  )
}