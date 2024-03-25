import React, { useContext } from "react";
import { CartContext } from "./context/cart-context";

function Product({id,name,image,price}) {
    const { addToCart } = useContext(CartContext)
    return(
        <div>
            <img src={image}></img>
            <h2>{name}</h2>
            <h3>${price.toFixed(2)}</h3>
            <button onClick={addToCart(id)}>Add to Cart</button>
        </div>
    );
}

export default Product;