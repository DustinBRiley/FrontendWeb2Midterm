import React, { useContext } from 'react'
import { CartContext } from "./context/cart-context";

export default function CartItem({id,name,image,price}) {
    const { addToCart, removeFromCart, cartItems } = useContext(CartContext)
  return (
    <div id="cartItem">
        <img src={image}></img>
        <div>
          <h2>{name}</h2>
          <h3>${price.toFixed(2)}</h3>
        </div>
        <div id="quantity">
          <p>Quantity: </p>
          <p>{cartItems[id]}</p> {/* get quantity from cart item array by id */}
          <div id='buttons'> {/* to hide buttons on checkout screen */}
            <button onClick={() => {removeFromCart(id)}}>-</button>
            <button onClick={() => {addToCart(id)}}>+</button>
          </div>
        </div>
    </div>
  )
}
