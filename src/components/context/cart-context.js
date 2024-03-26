import React, { useState, createContext } from 'react'
import { availProds } from '../data/data'

export const CartContext = createContext(null)

const defaultCart = () => { // initialize array representing # of each item in cart
    let cart = {}
    for(let i=1;i<availProds.length + 1;i++) {
        cart[i] = 0;
    }
    return cart
}

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defaultCart())
    const [total, setTotal] = useState(0) // end total

    const addToCart = (id) => { //add item to cart by id
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))
        setTotal((prev) => (prev += availProds[id-1].price)) // add item price by id to total
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
        setTotal((prev) => (prev -= availProds[id-1].price)) // remove item price by id from total
    }

    const context = {cartItems, addToCart, removeFromCart, total}

    return <CartContext.Provider value={context}>{props.children}</CartContext.Provider>
}
