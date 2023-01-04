import { Link } from "react-router-dom"
import React from "react"

function SignupUserType() {
  return (
    <>
      <div className="title-container">
        <h2>Sign up to</h2>
        <h1>Minga.com</h1>
        <p>Are you looking for a manga read or manga reviewers?</p>
      </div>
      <div className="signup-form-container">
        <form>
          <Link className="user-type-container" to={"/signup/author"}>
            <div className="user-type-text">
              <h3>I'm an Author</h3>
              <p>looking to publish manga</p>
            </div>
          </Link>
          <Link className="user-type-container" to={"/signup/company"}>
            <div className="user-type-text">
              <h3>We are a Company</h3>
              <p>hiring the best manga reviewers</p>
            </div>
          </Link>
          <Link className="user-type-container" to={"/signup/reader"}>
            <div className="user-type-text">
              <h3>I'm a Reader</h3>
              <p>looking for the best manga</p>
            </div>
          </Link>
        </form>
      </div>
    </>
  )
}

export default SignupUserType
