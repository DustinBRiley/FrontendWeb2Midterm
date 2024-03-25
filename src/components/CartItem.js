import React, { useContext } from 'react'
import { CartContext } from "./context/cart-context";


export default function CartItem({id,name,image,price}) {
    const { addToCart, removeFromCart, cartItems } = useContext(CartContext)
  return (
    <div>
        <img src={image}></img>
        <h2>{name}</h2>
        <h3>${price.toFixed(2)}</h3>
        <p>Quantity: </p>
        <button onClick={() => removeFromCart(id)}>-</button>
        <p>{cartItems[id]}</p>
        <button onClick={() => addToCart(id)}>+</button>
    </div>
  )
}
