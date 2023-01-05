import { Link } from "react-router-dom"
import React from "react"

function SignupUser() {
  return (
    <>
      <div className="title-container">
        <h2>Minga</h2>
        <h3>Welcome!</h3>
        <p>
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
      </div>
      <div className="form-container">
        <form className="sign-form">
          <div className="form-signup-row">
            <label className="label-sign" htmlFor="username">Username</label>
            <input
              autoComplete="false"
              type="text"
              className="form-control"
              id="username"
            />
          </div>
          <div className="form-signup-row">
            <label className="label-sign" htmlFor="email">Email</label>
            <input
              autoComplete="false"
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="form-signup-row">
            <label className="label-sign" htmlFor="password">Password</label>
            <input
              autoComplete="false"
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="form-signup-row">
            <label className="label-sign" htmlFor="confirmPassword">Confirm password</label>
            <input
              autoComplete="false"
              type="password"
              className="form-control"
              id="confirmPassword"
            />
          </div>
          <div className="form-row">
            {/* <input className="submitButton" type="submit" value="Sign up" /> */}
            <Link className="submitButton" to={"/accounttype"}>Sign up</Link>
          </div>
        </form>
        <button className="signup-google"><img className="signup-google-img" alt="google icon" src="./Google.png" /> Sign up with Google</button>
      </div>
    </>
  )
}

export default SignupUser