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
import { ProductContext } from "../context/context"
import { CartContext } from '../context/context';




export default function ProductInfo () {
  const handleAddToCart = () => {
    setCartItem({
      productInfo,
      quantity
    })

  }
  const {productInfo, setProductInfo} = useContext(ProductContext)
  const {cartItem, setCartItem } = useContext(CartContext)
  
  const [ quantity, setQuantity ] = useState(1)
  const handlePlus = () => {
    setQuantity(quantity + 1)
  }
  const handleMinus = () => {
    if (quantity >= 1)
    setQuantity(quantity - 1)
  }
  const theme = useContext(ThemeContext)
  return (
    <Box sx={{position: "relative", margin: { xs: "2%", sm: "3%" }, maxWidth: {md: "35%", sm: "100%" }, width: "100%", padding: "0.5rem"}}>
      <Box classes="vendorName" sx={{marginTop: "10%", width: "100%"}} backgroundColor={theme.palette.grayishblue}>
        <Typography variant='p' color={theme.palette.primary.main} textTransform="uppercase" letterSpacing="0.025rem" fontWeight="700" fontSize="0.875rem" lineHeight="1.25rem" backgroundColor={theme.palette.neutral.grayishblue} padding="5px">   
        {productInfo.vendor}   
        </Typography>
      </Box>
      <Box classes="productTitle" sx={{marginTop: "10%", marginBottom: "10%", width: "100%"}}>
        <Typography variant='h4' fontWeight="700" fontSize="1.875rem" lineHeight="2.25rem">
          {productInfo.title}
        </Typography>
      </Box>
      <Box classes="productDescription" sx={{wordSpacing: "0.20rem"}}>
        <Typography variant='p' color={theme.palette.neutral.darkgrayishblue} width="100%" lineHeight="1.625rem">
          {productInfo.description}
        </Typography>
      </Box>
      <Box classes="productPrice" sx={{marginTop: "10%", marginBottom: "10%"}}>
        <Typography variant='p' sx={{fontSize: "1.5rem", fontWeight: "700"}}>
          ${parseFloat(((productInfo.price * (productInfo.discount / 100)))).toFixed(2)}
        </Typography>
        <span className='discountPercentage' style={{color: theme.palette.primary.main, fontWeight: "700", backgroundColor: theme.palette.primary.light, marginLeft: "5%", marginRight: "5%", fontSize: "1.2rem"}}>
          {productInfo.discount}%
        </span>
        <Typography classes="productFullPrice" sx={{fontSize: '14px', marginTop: "5px", textDecoration: "line-through", color: theme.palette.neutral.verydarkblue}}>
          {`$${parseFloat(productInfo.price).toFixed(2)}`}
        </Typography>
      </Box>
      <Box className="buttonsWrapper" sx={{marginTop: "10%", display: 'flex', flexDirection: 'row'}}>
        <Box sx={{gap: "20px", width: "90%", lineHeight: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <ul style={{width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem", paddingBottom: "2rem", backgroundColor: theme.palette.neutral.grayishblue, borderRadius: "0.5rem", paddingLeft: "20px", paddingRight: "20px", userSelect: "none"}}>
            <li><img src={minusIcon} onClick={handleMinus} style={{cursor: "pointer"}} /></li>
          <li>{quantity}</li><img src={plusIcon} onClick={handlePlus} style={{cursor: "pointer"}}/></ul>
        
        
          <Button onClick={handleAddToCart} style={{borderRadius: "0.5rem", height: "100%", backgroundColor: theme.palette.primary.main, display: "flex", gap: "40px", alignItems: "center", paddingLeft: "20px", color: "white", paddingRight: "20px", width: "100%", textAlign: "center", justifyContent: "center"}}>
            <img src={cartIcon} /> Add to cart
          </Button>
        </Box>
      </Box>
   </Box>
  
  )
}