import React from "react";

function Product(id,name,image,price) {
    return(
        <div>
            <h2>{{name}}</h2>
            <img src={`../images/${image}.jpg`}></img>
            <h3>{{price}}</h3>
            <button onClick={addCart(id)}>Add to Cart</button>
        </div>
    );
}

export default Product;