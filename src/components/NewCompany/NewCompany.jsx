import React from "react";

function SignupCompany() {
  return (
    <>
      <div className="title-container">
        <h2>Company Sign up</h2>
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
              <label htmlFor="logo">Logo</label>
              <input
                autoComplete="false"
                type="text"
                className="form-control"
                id="logo"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input
                autoComplete="false"
                type="text"
                className="form-control"
                id="website"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                autoComplete="false"
                type="text"
                className="form-control"
                id="description"
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
  );
}

export default SignupCompany;
