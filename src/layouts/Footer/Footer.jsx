import "./Footer.css"

import { Link } from "react-router-dom"
import React from "react"

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About Us",
  },
  {
    path: "/Comics",
    name: "Comics",
  },
]

function Footer() {
  return (
    <footer>
      <div className="subscribe-container">
        <h1 className="subscribe-label">Subscribe to our newsletter</h1>
        <form className="newsletter-form">
          <div className="news-form-group">
            <input
              className="subscribe-input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="subscribe-button" type="submit">
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-links-wrapper">
            <div className="footer-links-items">
              {routes.map((route, index) => {
                return (
                  <Link className="footer-link" to={route.path} key={index}>
                    {route.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="social-media">
          <div className="social-media-wrap">
            <div className="social-logo-wrap">
              <Link to="/" className="social-logo">
                <img
                  className="logo"
                  src="./Facebook.png"
                  alt="Facebook"
                  width="24"
                />
              </Link>
              <Link to="/" className="social-logo">
                <img
                  className="logo"
                  src="./Twitter.png"
                  alt="Twitter"
                  width="24"
                />
              </Link>
              <Link to="/" className="social-logo">
                <img
                  className="logo"
                  src="./Vimeo.png"
                  alt="Vimeo"
                  width="24"
                />
              </Link>
              <Link to="/" className="social-logo">
                <img
                  className="logo"
                  src="./Youtube.png"
                  alt="Youtube"
                  width="24"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
