import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <ul className="flex md:py-10 py-4 text-xl md:text-lg font-garamond font-medium">
      <li className="mx-2">
        <Link to="/">Home</Link>
      </li>
      <li className="mx-2">
        <a href="https://blog.kalijonn.com">Blog</a>
      </li>
      <li className="mx-2">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="mx-2">
        <Link to="/work">Work</Link>
      </li>
    </ul>
  )
}
