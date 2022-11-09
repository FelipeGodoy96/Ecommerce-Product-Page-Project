import React from "react";


export default function ProductInfo () {
  return (
    <>
    <p style={{lineHeight: '3rem', color: 'hsl(26, 100%, 55%)', fontStyle: 'bold', fontWeight: '700', marginTop: '3rem', marginBottom: '1rem', letterSpacing: '0.15rem'}}>SNEAKER COMPANY</p>
    <p style={{fontSize: '36px', lineHeight: '2rem', fontWeight: '700', color: 'hsl(220, 13%, 13%)'}}>Fall Limited Edition Sneakers</p>
    <p style={{marginTop: '2em', marginBottom: '2em', color: 'hsl(219, 9%, 45%'}}>
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they'll withstand everything the weatehr can offer.
    </p>
    <p style={{fontWeight: '700', fontSize: '24px'}}>$125.00 <span style={{backgroundColor: 'hsl(25, 100%, 94%)', color: 'hsl(26, 100%, 55%)', fontSize: '18px'}}>50%</span></p>
    <p style={{textDecoration: 'line-through', color: 'hsl(219, 9%, 45%'}}>$250.00</p>
    </>
  )
}