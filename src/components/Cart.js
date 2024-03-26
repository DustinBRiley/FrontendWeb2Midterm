import React, { useContext, useState } from 'react'
import { availProds } from "../components/data/data"
import { CartContext } from '../components/context/cart-context'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cartItems } = useContext(CartContext)

  return (
    <div id="cart">
      <div id="cartItems">
        { availProds.map((prod) => {
          if(cartItems[prod.id] !== 0) {
            return <CartItem
                  key={prod.id}
                  id={prod.id}
                  name={prod.name}
                  image={prod.image}
                  price={prod.price}
                  />
          }
        })}
      </div>
      <div>
        <Link to="/Checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  )
}
