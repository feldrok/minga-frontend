import React from "react"

function SignupReader() {
  return (
    <>
      <div className="title-container">
        <h2>Reader Sign up</h2>
      </div>
      <div className="signup-form-container">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                autoComplete="false"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                autoComplete="false"
                type="text"
                className="form-control"
                id="last_name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                autoComplete="false"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthday">Birthday</label>
              <input
                autoComplete="false"
                type="text"
                className="form-control"
                id="birthdate"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                autoComplete="false"
                type="text"
                className="form-control"
                id="city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                autoComplete="false"
                type="text"
                className="form-control"
                id="country"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                autoComplete="false"
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                autoComplete="false"
                type="password"
                className="form-control"
                id="confirm-password"
              />
            </div>
          </div>
          <div className="form-row">
            <input className="submitButton" type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    </>
  )
}

export default SignupReader
