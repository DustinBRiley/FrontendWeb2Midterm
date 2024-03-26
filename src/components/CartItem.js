import React, { useContext } from 'react'
import { CartContext } from "./context/cart-context";

export default function CartItem({id,name,image,price,adjustTotal}) {
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
          <p>{cartItems[id]}</p>
          <div id='buttons'>
            <button onClick={() => {removeFromCart(id)}}>-</button>
            <button onClick={() => {addToCart(id)}}>+</button>
          </div>
        </div>
    </div>
  )
}
