import Product from "./Product";
import { availProds } from "./data/data";

export default function Products() {
    return (
        <div id="shop">
            {availProds.map( (prod) => {
                return <Product
                key={prod.id}
                id={prod.id}
                name={prod.name}
                image={prod.image}
                price={prod.price}
                />
            })}
        </div>
    );
}