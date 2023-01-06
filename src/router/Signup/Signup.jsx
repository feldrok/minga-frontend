import "./Signup.css";
import { Link, Outlet } from "react-router-dom";
import React from "react";

function Signup() {
  return (
      <div className="signup-container">
        <div className="container-1">
          <div className="form-container">
            <Outlet />
          </div>
          <div className="account-exists-container">
            <p>Already have an account?</p>
            <Link className="signin-link" to="/signin">
              Sign in
            </Link>
          </div>
          <div className="back-home">
            <p>Go back to</p>
            <Link className="signin-link" to="/">
              home page
            </Link>
          </div>
        </div>
        <div className="image-film-wrap"></div>
      </div>
  );
}

export default Signup;