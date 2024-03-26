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
    const [total, setTotal] = useState(0)

    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))
        setTotal((prev) => (prev += availProds[id-1].price))
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
        setTotal((prev) => (prev -= availProds[id-1].price))
    }

    const context = {cartItems, addToCart, removeFromCart, total}

    return <CartContext.Provider value={context}>{props.children}</CartContext.Provider>
}
