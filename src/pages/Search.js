import React, { useState } from 'react'
import { availProds } from "../components/data/data"
import Product from "../components/Product"

export default function Search() {
  const [search,setSearch] = useState("")

  return (
    <div>
        <h1>Search</h1>
        <input id="search" value={search} onChange={(e) => {setSearch(e.target.value)}}></input>
        <div id="searchResult">
        { availProds.map((prod) => {
          if(prod.name.toLowerCase().includes(search.toLowerCase())) {
            return <Product
                  key={prod.id}
                  id={prod.id}
                  name={prod.name}
                  image={prod.image}
                  price={prod.price}
                  />
          }
        })}
        </div>
    </div>

  )
}
