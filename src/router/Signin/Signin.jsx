import "./Signin.css"

import { Link, Outlet } from "react-router-dom"

import React from "react"

function Signin() {
  return (
    <div className="signup-container">
      <div className="image-film-wrap">
        <div className="container-1">
          <div className="title-container">
            <h2>Sign in</h2>
            <p>Sign in to your account</p>
          </div>
          <div className="signin-form-container">
            <form>
              <div className="form-row-signin">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="email" id="email" />
              </div>
              <div className="form-row-signin">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" />
              </div>
              <div className="form-row">
                <input className="submitButton" type="submit" value="Sign in" />
              </div>
            </form>
          </div>
          <div className="account-exists-container">
            <p>Don't have an account?</p>
            <Link className="signin-link" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
