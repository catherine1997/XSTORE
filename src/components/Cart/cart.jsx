import React from 'react'
import { useState, useEffect } from 'react'

function Cart({cart}) {

  const [CART, setCART] = useState([])

  useEffect (() => {
    setCART(cart)
  }, [cart])
  return (
    <div> 
      {
        CART?.map((item, index) => {
          return(
            <div>
              <img src={item.image} alt="" width={33}/>
              <span>{item.name}</span>
              <button
               onClick={() => {
                const _CART = CART.map((item,index ) => {
                  return index === index ? { ...item, quantity: item.quantity > 0 ? item.quantity -1 : 0} : item
                })
                setCART(_CART)
              }} 
              >-</button>
              <span>{item.quantity}</span>
              <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return index === index ? { ...item, quantity: item.quantity + 1} : item
                })
                setCART(_CART)
              }} 
              >+</button>
              <span> Rs. {item.price * item.quantity}</span>
            </div>
          )
        })
      }
      <p> Total <span></span>
        {
          CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
        }
      </p>
    </div>
  )
}

export default Cart