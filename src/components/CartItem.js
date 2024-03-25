import React from 'react'
import { CartContext } from "./context/cart-context";


export default function CartItem(id,name,image,price) {
    const { addToCart } = useContext(CartContext)
  return (
    <div>
        <h2>{{name}}</h2>
        <img src={image}></img>
        <h3>{{price}}</h3>
        <button onClick={addToCart(id)}>Add to Cart</button>
    </div>
  )
}
