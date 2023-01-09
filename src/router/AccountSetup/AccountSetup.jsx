import "./AccountSetup.css"

import { Outlet } from "react-router-dom"
import React from "react"

function AccountSetup() {
  return (
    <>
      <div className="accountsetup-container">
        <div className="accountsetup-form-container">
          <Outlet />
        </div>
        <div className="image-container-accsetup">
          <div className="review-container">
            <h2 className="review-content">
              Minga.com is the best place to find manga reviews. We've been
              super impressed by the quality of applicants.
            </h2>
            <p className="review-name"> - Madhushan Sasanka</p>
            <p>CEO abc.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSetup
