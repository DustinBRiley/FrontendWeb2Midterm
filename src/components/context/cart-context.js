import React, { useState, createContext } from 'react'
import { availProds } from '../data/data'

export const CartContext = createContext(null)

const defaultCart = () => {
    let cart = {}
    for(let i=1;i<availProds.length + 1;i++) {
        cart[i] = 0;
    }
    return cart
}

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defaultCart())

    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
    }

    const context = {cartItems, addToCart, removeFromCart}

    return <CartContext.Provider value={context}>{props.children}</CartContext.Provider>
}
