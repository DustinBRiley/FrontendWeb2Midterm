import React from 'react'
import {availProds} from "../components/data/data"
import { CartContext } from '../components/context/cart-context'

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
  return (
    <div>
      { availProds.map((product) => {
        if(cartItems[product.id] > 0) {
          return <CartItem data={product}/>
        }
      })}
    </div>
  )
}
