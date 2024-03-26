import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/" style={{textDecoration: "none"}}>Home</Link>
            </li>
            <li>
                <Link to="/search" style={{textDecoration: "none"}}>Search</Link>
            </li>
            <li>
                <Link to="/cart" style={{textDecoration: "none"}}>Cart</Link>
            </li>
        </ul>
    </nav>

  )
}
