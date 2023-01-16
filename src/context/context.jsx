
import React from "react";
import { useState, createContext } from "react"
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'

export const ProductContext = createContext()

export const ProductInfoContext = props => {
    const [productInfo, setProductInfo] = useState({
        title: 'Fall Limited Edition Sneakers',
        subtitle: 'Autumn Limited Edition',
        price: 250.00,
        discount: 50,
        vendor: 'Sneakers Company',
        image: thumb1,
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubbler outer sole, they'll withstand everything the weather can offer."
    })

    return(
        <ProductContext.Provider value={{productInfo, setProductInfo}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export const CartContext = createContext()

export const CartContextProvider = props => {
    const [cartItem, setCartItem ] = useState(null)

    return (
        <CartContext.Provider value={{cartItem, setCartItem}}>
            {props.children}
        </CartContext.Provider>
    )
}