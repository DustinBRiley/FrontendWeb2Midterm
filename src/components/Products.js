import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function Products() {
    const availProds = [
        {id: 1, name: "Shirt", image: "Shirt", price: 3.50},
        {id: 2, name: "Pants", image: "Pants", price: 4.00},
        {id: 3, name: "Shoes", image: "Shoes", price: 5.00}
    ]

    const addCart = id => {

    }

    return (
        <div>
            {availProds.map( (prod,i) => {
                return <Product
                key={i}
                id={prod.id}
                name={prod.name}
                image={prod.image}
                price={prod.price}
                addCart={addCart}
                ></Product>
            })}
        </div>
    );
}