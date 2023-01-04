import "./Signup.css"

import { Link, Outlet } from "react-router-dom"

import React from "react"

function Signup() {
  return (
    <div className="signup-container">
      <div className="image-film-wrap">
        <div className="container-1">
          <Outlet />
          <div className="account-exists-container">
            <p>Already have an account?</p>
            <Link className="signin-link" to="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
