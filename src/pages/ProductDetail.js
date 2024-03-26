import React from 'react'
import { useParams } from 'react-router-dom'
import Product from "../components/Product"
import { availProds } from '../components/data/data'

export default function ProductDetail() {
  const {id} = useParams()
  return (
    <div>
        <h1>ProductDetail</h1>
          { availProds.map((prod) => {
            if(prod.id == id) {
              return <div id='productdetail'> <Product
              key={prod.id}
              id={prod.id}
              name={prod.name}
              image={prod.image}
              price={prod.price}
              />
              <p>{prod.detail}</p>
              </div>

            }
          })}
    </div>
  )
}
