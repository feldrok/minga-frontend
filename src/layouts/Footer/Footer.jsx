import './Footer.css'

import { Link } from 'react-router-dom'
import React from 'react'

const routes = [
  {
    path: "/",
    name: "Inicio",
  },
]

function Footer() {
  return (
    <footer>
      <div className='logo-div'>
        <img src="./logo.png" alt="logo" className='footer-logo' />
        <p>Comics</p>
      </div>
      <div>
        <p className='copyright-text'>© 2022 Comics App.</p>
      </div>
      <div>
        <h1>Pages</h1>
        <ul className='footer-links'>
          {
            routes.map((route, index) => (
              <li key={index}><Link className='footer-link' to={route.path}>{route.name}</Link></li>

            ))
          }
        </ul>
      </div>
    </footer>
  )
}

export default Footer