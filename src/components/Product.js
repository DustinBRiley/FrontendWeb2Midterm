import React, { useContext } from "react";
import { CartContext } from "./context/cart-context";
import { Link } from "react-router-dom";

function Product({id,name,image,price}) {
    const { cartItems, addToCart } = useContext(CartContext)
    return(
        <div id="products">
            <img src={image}></img>
            <h2>{name}</h2>
            <h3>${price.toFixed(2)}</h3>
            <button onClick={() => addToCart(id)}>Add to Cart {cartItems[id] > 0 && <> ({cartItems[id]}) </>}</button>
            <Link to={`/productdetail/${id}`}>Details</Link>
        </div>
    );
}

export default Product;