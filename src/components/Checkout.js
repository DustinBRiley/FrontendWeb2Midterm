import React, { useContext, useState } from 'react'
import { availProds } from "../components/data/data"
import { CartContext } from '../components/context/cart-context'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function Checkout() {
    const { cartItems, total } = useContext(CartContext)

    const order = () => {
        for(let i=1;i<availProds.length + 1;i++) {
            cartItems[i] = 0;
        }
    }

    return (
        <div id="checkout">
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
            <form>
                <label htmlFor="address">Address: </label>
                <input id='address'></input>
                <br></br>
                <label htmlFor="cc">Credit Card #: </label>
                <input id='cc'></input>
                <br></br>
                <Link to="/ThankYou">
                    <button onClick={order}>Submit</button>
                </Link>
            </form>
            <div>
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>
        </div>
    )
}
