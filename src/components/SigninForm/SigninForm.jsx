import { Link } from "react-router-dom"
import React from "react"

function SigninForm() {
  return (
    <div className="signup-container">
        <div className="container-1">
        <div className="title-container">
            <h2>Minga</h2>
            <p>Sign in to your account</p>
          </div>
        <div className="form-container">
            <form className="sign-form">
              <div className="form-row-signin">
                <label className="label-sign" htmlFor="email">Email</label>
                <input className="form-control" type="email" id="email" />
              </div>
              <div className="form-row-signin">
                <label className="label-sign" htmlFor="password">Password</label>
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
          <div className="back-home">
            <p>Go back to</p>
            <Link className="signin-link" to="/">
              home page
            </Link>
          </div>
        </div>
      <div className="image-film-wrap">
      </div>
    </div>
  )
}

export default SigninForm