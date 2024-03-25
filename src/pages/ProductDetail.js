import React from 'react'
import { useParams } from 'react-router-dom'
import Products from "../components/Products"

export default function ProductDetail() {
  const {id} = useParams()
  return (
    <div>
        <h1>ProductDetail</h1>
        <Products>
          
        </Products>
    </div>
  )
}
