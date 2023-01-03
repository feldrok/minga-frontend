import "./Hero.css"

import React from "react"

function Hero({ children }) {
  return (
    <header>
      <div className="bg-dark-film">
        <div className="hero-container">
          <div className="hero-content">
            {children}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero